import { Link } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'

const Navbar = ({ onMenuClick, onLogout }) => {
  return (
    <header className="bg-card-light dark:bg-card-dark border-b border-gray-200 dark:border-slate-700">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="mr-4 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none lg:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link
            to="/dashboard"
            className="text-xl font-semibold text-primary-light dark:text-primary-dark"
          >
            Dashboard Overview
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={onLogout}
            className="px-4 py-2 text-sm font-medium rounded-md text-white bg-primary-light dark:bg-primary-dark hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar