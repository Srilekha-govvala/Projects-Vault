import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Repositories from './pages/Repositories'
import Activity from './pages/Activity'
import Settings from './pages/Settings'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/repositories' element={<Repositories/>}/>
            <Route  path='/activity' element={<Activity/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </main>
      </div>
    </div>
  )
}