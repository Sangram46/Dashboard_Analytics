import { FiUsers, FiActivity, FiClock, FiServer } from 'react-icons/fi'

const iconMap = {
  users: FiUsers,
  activity: FiActivity,
  clock: FiClock,
  server: FiServer,
}

const MetricCard = ({ title, value, change, isPositive, icon }) => {
  const Icon = iconMap[icon] || FiActivity

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="p-3 rounded-lg bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div
        className={`mt-3 text-sm flex items-center ${
          isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}
      >
        {change}
        <svg
          className={`w-4 h-4 ml-1 ${!isPositive && 'transform rotate-180'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </div>
  )
}

export default MetricCard