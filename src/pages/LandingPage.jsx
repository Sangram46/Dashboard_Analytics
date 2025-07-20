import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
            Experience the Future of Dashboard Analytics
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
            A beautifully crafted, modern interface that showcases cutting-edge design principles and seamless user experience across all devices.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-primary-light dark:bg-primary-dark text-white font-medium hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage