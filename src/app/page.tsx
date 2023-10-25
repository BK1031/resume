import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              BK1031 Resume Bank
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              A static site that automatically compiles LaTeX resumes from my GitHub repository into PDFs and deploys them for easy access.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/resumes"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                View Resumes
              </a>
              <a href="https://github.com/bk1031/resume" className="text-sm font-semibold leading-6 text-gray-100">
                See how it works <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
    </main>
  )
}
