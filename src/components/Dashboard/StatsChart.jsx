import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', users: 400, sessions: 240 },
  { name: 'Feb', users: 300, sessions: 139 },
  { name: 'Mar', users: 200, sessions: 980 },
  { name: 'Apr', users: 278, sessions: 390 },
  { name: 'May', users: 189, sessions: 480 },
  { name: 'Jun', users: 239, sessions: 380 },
  { name: 'Jul', users: 349, sessions: 430 },
]

const StatsChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.2} />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              color: '#1e293b',
            }}
          />
          <Legend />
          <Bar
            dataKey="users"
            fill="#6366f1"
            radius={[4, 4, 0, 0]}
            name="Active Users"
          />
          <Bar
            dataKey="sessions"
            fill="#1b9e77"
            radius={[4, 4, 0, 0]}
            name="Sessions"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatsChart