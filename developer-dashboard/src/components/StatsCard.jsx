export default function StatsCard({ title, value, change, icon }) {
  const iconMap = {
    commits: "🔨",
    prs: "🔀",
    repos: "📁",
    stars: "⭐",
  }

  const isPositive = change.startsWith("+")

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-3 hover:border-indigo-500/40 transition-all duration-200">
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <span className="text-xl">{iconMap[icon]}</span>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-white text-2xl font-bold">{value}</span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          isPositive
            ? "bg-green-500/10 text-green-400"
            : "bg-red-500/10 text-red-400"
        }`}>
          {change}
        </span>
      </div>
    </div>
  )
}