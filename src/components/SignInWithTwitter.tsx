import { signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';

const SignInWithTwitter = () => {
  const auth = useAuth();

  const signIn = async () => {
    const provider = new TwitterAuthProvider();

    if (auth) {
      signInWithPopup(auth, provider)
      .then(() => {
        toast.success(`Success! You've logged in using your Twitter account.`); 
      }).catch((error) => {
        console.error(error);
        toast.error('There was an error signing in with Twitter. Please try again later.')
      });
    }
  };

  return (
    <button
      onClick={signIn}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
    >
      Sign in with Twitter
    </button>
  );
}

export default SignInWithTwitter;
