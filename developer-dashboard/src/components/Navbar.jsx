export default function Navbar() {
  return (
    <header className="h-14 bg-gray-900 border-b border-gray-200  border-gray-800 flex items-center justify-between px-6">
      <div>
        <h1 className="text-gray-900  text-white font-semibold text-sm">Overview</h1>
        <p className="text-gray-600  text-gray-500 text-xs">Welcome back 👋</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
          SG
        </div>
      </div>
    </header>
  )
}