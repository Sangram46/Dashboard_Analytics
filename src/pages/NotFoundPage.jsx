import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-primary-light dark:text-primary-dark mb-4">
          404
        </h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-primary-light dark:bg-primary-dark text-white font-medium hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage