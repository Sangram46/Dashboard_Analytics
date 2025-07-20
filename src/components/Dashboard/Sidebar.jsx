import { Link } from 'react-router-dom'
import { FiHome, FiMessageSquare, FiSettings, FiHelpCircle } from 'react-icons/fi'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-card-light dark:bg-card-dark border-r border-gray-200 dark:border-slate-700 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-4">
            <h2 className="text-xl font-semibold">DA Product</h2>
          </div>
          <nav className="px-2 pb-4">
            <Link
              to="/dashboard"
              className="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors mb-1"
            >
              <FiHome className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
            <Link
              to="/chat"
              className="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors mb-1"
            >
              <FiMessageSquare className="w-5 h-5 mr-3" />
              Chat
            </Link>
            {/* <Link
              to="#"
              className="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors mb-1"
            >
              <FiSettings className="w-5 h-5 mr-3" />
              Settings
            </Link> */}
            <Link
              to="/notFound"
              className="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <FiHelpCircle className="w-5 h-5 mr-3" />
              Help
            </Link>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar