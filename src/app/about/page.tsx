'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import useAnalytics from '@/hooks/useAnalytics';
import Link from 'next/link'

export default function About() {
  useAnalytics();
  
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 h-[calc(100vh-14rem)]">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-8">About TweetGenerator.io</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
          <p className="mt-4 text-lg text-gray-600">
            As part of the #BuildInPublic journey, TweetGenerator.io was birthed from the idea to elevate the Twitter game of its users. The platform was conceived with the goal to help users generate engaging tweets with the power of AI, specifically the ChatGPT model. After identifying a rising demand for an AI tweet generator, the domain for TweetGenerator.io was secured.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">How Does It Work?</h2>
          <p className="mt-4 text-lg text-gray-600">
            The application works by first authenticating users. Once authenticated, it fetches the last 10 of the user&apos;s tweets. This number is constrained due to Twitter API&apos;s cost but may be increased in the future. These tweets are then sent to the OpenAI API, which employs the GPT-4 model to analyze and suggest a new tweet. To optimize cost and efficiency, results are cached in Redis, thus multiple runs can be executed without re-fetching tweets.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Core Technologies Used</h2>
          <div className="mt-4 text-lg text-gray-600">
            Several technologies are behind the scenes:
            <ul className="list-disc pl-5">
              <li>Firebase is used for user authentication.</li>
              <li>For UI, the combination of NextJS and Tailwind UI was chosen for swift development.</li>
              <li>Underneath, the tech stack comprises of NextJS, with deployments facilitated by Vercel.</li>
              <li>The AI magic happens thanks to ChatGPT by OpenAI.</li>
            </ul>
            For debugging and ensuring smooth user experience, Sentry has been integrated.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Development Insights</h2>
          <p className="mt-4 text-lg text-gray-600">
            During development, the core focus remained on solving user problems. Keyword research was diligently performed using Ahrefs, targeting AI-related topics. The project also emphasizes agility. Swift deployments for early feedback, adjustments based on user feedback, and a focus on agility are essential components of the development journey.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900">Open Source</h2>
          <p className="mt-4 text-lg text-gray-600">
            Embracing the spirit of community and shared learning, the code for TweetGenerator.io will be made available as open source on GitHub.
          </p>
        </section>

        <div className="mt-10">
          <Link className="whitespace-nowrap font-semibold text-indigo-600" href="/">
            <span aria-hidden="true">&larr;</span> Back home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
