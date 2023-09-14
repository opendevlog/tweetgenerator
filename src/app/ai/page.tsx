'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SignInWithTwitter from '@/components/SignInWithTwitter'
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth'
import Tweet from '@/components/Tweet'
import useAnalytics from '@/hooks/useAnalytics'
import useAuth from '@/hooks/useAuth';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const auth = useAuth();
  useAnalytics();

  useEffect(() => {
    if (auth) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
    }
  }, [auth])

  return (
    <main>
      <Header />
      <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 h-[calc(100vh-14rem)]">
        <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
          Generate your next tweet using AI
        </h1>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        {
          !user ?
            <SignInWithTwitter />
            :
            <div>
              <Tweet
                user={user}
              />
            </div>
        }
      </div>
      <Footer />
    </main>
  )
}
