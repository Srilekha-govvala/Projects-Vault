import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get started</h1>
          <p className="text-lg text-gray-600 mb-8">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test <code className="bg-gray-100 px-2 py-1 rounded">HMR</code>
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Count is {count}
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Next Steps Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Documentation Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">📚 Documentation</h2>
            <p className="text-gray-600 mb-4">Your questions, answered</p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://vite.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Vite Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://react.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  React Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🤝 Connect with us</h2>
            <p className="text-gray-600 mb-4">Join the Vite community</p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/vitejs/vite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://chat.vite.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/vite_js" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  X.com
                </a>
              </li>
              <li>
                <a 
                  href="https://bsky.app/profile/vite.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
