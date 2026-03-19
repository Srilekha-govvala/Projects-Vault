import { useSelector } from 'react-redux'
import StatsCard from '../components/StatsCard'

export default function Dashboard() {
  const stats = useSelector(state => state.dashboard.stats)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-white font-semibold text-lg">Dashboard</h2>
        <p className="text-gray-500 text-sm mt-1">Your GitHub activity at a glance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <StatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  )
}