import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useSelector } from 'react-redux'

export default function ActivityLineChart() {
  const weeklyActivity = useSelector(state => state.dashboard.weeklyActivity)

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="mb-6">
        <h3 className="text-white font-semibold text-sm">Weekly Activity</h3>
        <p className="text-gray-500 text-xs mt-1">Commits and PRs over the last 7 days</p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={weeklyActivity} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis
            dataKey="day"
            tick={{ fill: '#6b7280', fontSize: 12 }}
            axisLine={{ stroke: '#1f2937' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#6b7280', fontSize: 12 }}
            axisLine={{ stroke: '#1f2937' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
            }}
            cursor={{ stroke: '#4f46e5', strokeWidth: 1, strokeDasharray: '4 4' }}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px', color: '#6b7280', paddingTop: '16px' }}
          />
          <Line
            type="monotone"
            dataKey="commits"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ fill: '#6366f1', r: 4 }}
            activeDot={{ r: 6, fill: '#818cf8' }}
          />
          <Line
            type="monotone"
            dataKey="prs"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6, fill: '#34d399' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}