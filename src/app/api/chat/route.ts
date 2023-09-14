import { NextRequest, NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Redis } from "@upstash/redis"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

console.log(process.env.UPSTASH_REDIS_REST_URL)

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
})

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const { uid } = await request.json();

  const BASE_URL = 'https://api.twitter.com/2/users/';
  
  async function fetchUserTweets(userId: any) {
    const url = `${BASE_URL}${userId}/tweets?max_results=10&exclude=retweets,replies`;
  
    try {
      let mappedTweets: string | null = await redis.get(`${uid}-tweets`);

      if (!mappedTweets) {
        const twitterResponse = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
            'Content-Type': 'application/json'
          }
        });
    
        if (!twitterResponse.ok) {
          throw new Error(`Twitter HTTP error! Status: ${twitterResponse.status}`);
        }
  
        const { data: tweets } = await twitterResponse.json()
  
        mappedTweets = tweets.map((tweet: any) => tweet.text).join('\n\n\n --- NEXT TWEET ---') as string;
        await redis.set(`${uid}-tweets`, mappedTweets);
      }

      const chatGPTResponse = await openai.createChatCompletion({
        model: 'gpt-4',
        stream: true,
        messages: [
          {"role": "system", "content": "You recommend a new tweet based on a set of tweets I send you. Please make sure the tweet you recommend is 160 characters. Do not create tweets with hashtags. Please don't put quotes around the tweet."},
          {
            role: 'user',
            content: mappedTweets,
          },
        ],
      });

      if (!chatGPTResponse.ok) {
        throw new Error(`OpenAI HTTP error! Status: ${chatGPTResponse.status}`);
      }
  
      const stream = OpenAIStream(chatGPTResponse);

      return new StreamingTextResponse(stream);
    } catch (error) {
      console.error(error);

      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }
  
  return await fetchUserTweets(uid)
}