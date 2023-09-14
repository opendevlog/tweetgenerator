# TweetGenerator.io

Generate dynamic and AI-powered tweets using the ChatGPT model. For updates and insights, follow me on [Twitter](https://twitter.com/OpenDevLog).

![TweetGenerator Screenshot](./public/screenshot.png)

## Setting Up

### Twitter Developer Account Upgrade
Developers looking to replicate this package should upgrade their Twitter Developer account to the **$100 per month package** for full access to necessary API features.

### Authentication with Twitter through Firebase
1. Set up a Firebase project at the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to the "Authentication" section and enable "Sign-in method" for Twitter.
3. Input your `API key` and `API secret key` from your Twitter Developer account.
4. Copy the callback URL provided by Firebase and paste it into your Twitter Developer App's callback URL section.

### Environment Variables

You'll need to set the following environment variables:

```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
OPENAI_API_KEY=
TWITTER_BEARER_TOKEN=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

#### Getting the Keys:

- **Upstash**: 
    - Go to [Upstash](https://upstash.com/)
    - Create a Redis database
    - From the dashboard, you can get the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.

- **OpenAI**:
    - Register at [OpenAI](https://platform.openai.com/signup)
    - Navigate to the API section to retrieve your `OPENAI_API_KEY`.

- **Twitter**:
    - Apply for a developer account at [Twitter Developer](https://developer.twitter.com/)
    - Create an App and retrieve the `TWITTER_BEARER_TOKEN`.

- **Firebase**:
    - These keys can be found in your Firebase project settings.

Fill these variables with appropriate values from your setup.

## Running Locally

1. Clone the repository to your machine:

```bash
git clone https://github.com/opendevlog/tweetgenerator
```

2. Install the dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

Now, open your browser and navigate to `http://localhost:3000`.

## Deploying to Vercel
Click the "Deploy to Vercel" button or follow the link to deploy this project directly to Vercel: 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/opendevlog/tweetgenerator&env=UPSTASH_REDIS_REST_UR,UPSTASH_REDIS_REST_TOKEN,OPENAI_API_KEY,TWITTER_BEARER_TOKEN,NEXT_PUBLIC_FIREBASE_API_KEY,NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,NEXT_PUBLIC_FIREBASE_PROJECT_ID,NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,NEXT_PUBLIC_FIREBASE_APP_ID,NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)


## License
This project is licensed under MIT.