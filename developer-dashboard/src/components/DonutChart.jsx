import { useSelector } from 'react-redux'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function DonutChart() {
  const languages = useSelector(state => state.dashboard.languages)

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 h-full">
      <div className="mb-4">
        <h3 className="text-white font-semibold text-sm">Language Distribution</h3>
        <p className="text-gray-500 text-xs mt-1">Top languages across all repos</p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={languages}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {languages.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
            }}
            formatter={(value) => [`${value}%`, 'Usage']}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '12px', color: '#6b7280' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}