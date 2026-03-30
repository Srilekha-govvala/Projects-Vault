import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery, setCurrentPage } from '../features/dashboard/dashboardSlice'

export default function ActivityTable() {
  const dispatch = useDispatch()
  const { activity, searchQuery, currentPage, itemsPerPage } = useSelector(
    state => state.dashboard
  )

  const filtered = activity.filter(
    item =>
      item.repo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.message.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-white font-semibold text-sm">Recent Activity</h3>
          <p className="text-gray-500 text-xs mt-1">{filtered.length} events found</p>
        </div>
        <input
          type="text"
          placeholder="Search repos or commits..."
          value={searchQuery}
          onChange={e => dispatch(setSearchQuery(e.target.value))}
          className="bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-lg px-3 py-2 w-56 focus:outline-none focus:border-indigo-500 placeholder-gray-600"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-500 text-xs font-medium pb-3 pr-4">Repository</th>
              <th className="text-left text-gray-500 text-xs font-medium pb-3 pr-4">Type</th>
              <th className="text-left text-gray-500 text-xs font-medium pb-3 pr-4">Message</th>
              <th className="text-left text-gray-500 text-xs font-medium pb-3">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {paginated.length > 0 ? (
              paginated.map(item => (
                <tr key={item.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="py-3 pr-4">
                    <span className="text-indigo-400 text-xs font-medium">{item.repo}</span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.type === 'commit'
                        ? 'bg-indigo-500/10 text-indigo-400'
                        : 'bg-green-500/10 text-green-400'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="text-gray-300 text-xs">{item.message}</span>
                  </td>
                  <td className="py-3">
                    <span className="text-gray-500 text-xs">{item.time}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-8 text-center text-gray-600 text-xs">
                  No results found for "{searchQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            <button
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}