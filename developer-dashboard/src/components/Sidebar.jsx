import { NavLink } from "react-router-dom"
const navItems = [
    { label: "Dashboard", icon: "📊", path: '/' },
    { label: "Repositories", icon: "📁", path: '/repositories' },
    { label: "Activity", icon: "📈", path: '/activity' },
    { label: "Settings", icon: "⚙️", path: '/settings' },
]

export default function Sidebar() {
    return (
        <aside className="w-60 min-h-screen  bg-gray-900 border-r border-gray-200  border-gray-800 flex-col px-4 py-6">
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                    D
                </div>
                <span className="text-gray-900  text-white font-semibold text-sm tracking-wide">DevDashboard</span>
            </div>
            <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                        className={({ isActive }) => `flex items-center 
                    gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${isActive ? 'bg-indigo-500/20 text-indigo-400 font-medium'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav><br />
            <div className="mt-auto px-2">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                        SG
                    </div>
                    <div>
                        <p className="text-gray-900 text-white text-xs font-medium">Srilekha Govvala</p>
                        <p className="text-gray-500 text-gray-500 text-xs">@Srilekha-govvala</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}