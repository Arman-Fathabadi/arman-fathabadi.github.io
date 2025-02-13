import Link from 'next/link'
 
export default function NotFound() {
  const basePath = process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '';
  
  return (
    <main className="container mx-auto px-4 py-24">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The page you are looking for does not exist.
          </p>
          <Link 
            href={`${basePath}/`}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  )
}