export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tweet Generator</span>
            <img className="h-8 w-auto" src="/logo.svg" alt="Tweet Generator logo" />
          </a>
          <span className="sm:text-md text-xl font-bold ml-2 tracking-tight">TweetGenerator.io</span>
        </div>
      </nav>
    </header>
  )
}
