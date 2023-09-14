import { useChat } from 'ai/react';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast'

export default function Tweet(
  { user }: { user: User }
) {
  const [tweetComplete, setTweetComplete] = useState(false);
  const uid = user?.providerData?.[0]?.uid; 

  const { handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      initialInput: '',
      body: {
        uid,
      },
      onFinish() {
        setTweetComplete(true);
      },
      onError() {
        toast.error('There was an error generating your tweet. Please try again later.');
      }
    });

  const lastMessage = messages[messages.length - 1];
  const chatGPTResponse = lastMessage?.role === "assistant" ? lastMessage.content : null

  const triggerInputChange = () => {
    // This is a hack because the useChat hook doesn't allow for submission unless input has changed since last submission
    handleInputChange({
      target: {
        value: '_blank',
        name: '_blank',
      }
    } as any)
  }

  useEffect(() => {
    triggerInputChange();
  }, [isLoading])

  const generateTweet = async (event: any) => {
    setTweetComplete(false);
    triggerInputChange();

    handleSubmit(event);
  }

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        <li className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto mt-8">
          {chatGPTResponse && tweetComplete &&
            <a
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(chatGPTResponse)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet this!
            </a>
          }
          {
            <div
              className="relative pb-8 bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
              onClick={() => {
                if (tweetComplete) {
                  navigator.clipboard.writeText(chatGPTResponse || '');
                  toast('Tweet copied to clipboard', {
                    icon: '✂️',
                  });
                }
              }}
            >
              <div className="relative">
                {user.photoURL && <img
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 ring-1 ring-white mb-4"
                  src={user.photoURL}
                  alt=""
                />}
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {user.displayName}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-700 w-full">
                  {
                    chatGPTResponse ?
                      <p>{chatGPTResponse}</p>
                      :

                      <div style={{ border: '1px solid #e1e8ed', padding: '10px', width: '200px', borderRadius: '5px' }}>
                        <strong>Loading Tweet...</strong>
                      </div>
                  }
                </div>
              </div>
            </div>}
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
            onClick={(event) => generateTweet(event)}
          >
            Generate Tweet
          </button>
        </li>
      </ul>
    </div>
  )
}