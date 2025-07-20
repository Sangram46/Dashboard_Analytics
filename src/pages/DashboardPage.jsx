import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar'
import Navbar from '../components/Dashboard/Navbar'
import MetricCard from '../components/Dashboard/MetricCard'
import StatsChart from '../components/Dashboard/StatsChart'

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard
              title="Total Users"
              value="1,234"
              change="+12%"
              isPositive={true}
              icon="users"
            />
            <MetricCard
              title="Active Sessions"
              value="567"
              change="+5%"
              isPositive={true}
              icon="activity"
            />
            <MetricCard
              title="Avg. Response Time"
              value="1.2s"
              change="-0.3s"
              isPositive={false}
              icon="clock"
            />
            <MetricCard
              title="API Requests"
              value="89k"
              change="+24%"
              isPositive={true}
              icon="server"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4 md:p-6">
              <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
              <StatsChart />
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4 md:p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-lg bg-gray-100 dark:bg-slate-700"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">System Update v1.{item}.0</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item} day{item !== 1 ? 's' : ''} ago
                        </p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark">
                        New
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4 md:p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/chat"
                className="p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-center"
              >
                <div className="mx-auto bg-primary-light/10 dark:bg-primary-dark/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-primary-light dark:text-primary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <span>Start Chat</span>
              </Link>
           
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardPage