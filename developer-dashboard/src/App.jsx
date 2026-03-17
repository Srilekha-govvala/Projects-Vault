import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6">
          <p className="text-gray-400 text-sm">Dashboard content coming soon...</p>
        </main>
      </div>
    </div>
  )
}