'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import useAnalytics from '@/hooks/useAnalytics'
import Link from 'next/link'

export default function Home() {
  useAnalytics();

  return (
    <main>
      <Header />
      <div className="relative">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 h-[calc(100vh-14rem)]">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Elevate Your Twitter Game with Tweet Generator
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Harness the power of ChatGPT to craft engaging, on-brand tweets based on your recent activity. Get inspired and let AI guide your social media presence.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/ai"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Pulls your recent tweets and generates new ones.{' '}
                  <Link className="whitespace-nowrap font-semibold text-indigo-600" href="/about">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
