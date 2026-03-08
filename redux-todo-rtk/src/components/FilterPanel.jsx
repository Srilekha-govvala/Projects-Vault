import { useDispatch, useSelector } from "react-redux";
import { setFilterStatus, setSearchText, resetFilters } from "../features/filter/filterSlice";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const { status, searchText } = useSelector((state) => state.filter);
  const { theme } = useSelector((state) => state.ui);
  const todos = useSelector((state) => state.todos.items);

  // Filter todos based on multiple slice states
  const filteredTodos = todos
    .filter((t) => {
      if (status === "completed") return t.completed;
      if (status === "pending") return !t.completed;
      return true;
    })
    .filter((t) => t.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div
      className={`p-4 rounded-lg border-2 mb-4 ${
        theme === "dark"
          ? "border-purple-600 bg-purple-900"
          : "border-purple-300 bg-purple-50"
      }`}
    >
      <h2
        className={`font-bold mb-3 ${
          theme === "dark" ? "text-purple-200" : "text-purple-800"
        }`}
      >
        🔍 Filters (using filter slice)
      </h2>

      {/* Search Input - from filter slice */}
      <div className="mb-3">
        <label
          className={`block text-sm font-semibold mb-1 ${
            theme === "dark" ? "text-purple-300" : "text-purple-700"
          }`}
        >
          Search:
        </label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
          placeholder="Search todos..."
          className={`w-full px-3 py-2 rounded border ${
            theme === "dark"
              ? "bg-purple-800 border-purple-500 text-white"
              : "bg-white border-purple-300"
          }`}
        />
      </div>

      {/* Status Filter - from filter slice */}
      <div className="mb-3">
        <label
          className={`block text-sm font-semibold mb-1 ${
            theme === "dark" ? "text-purple-300" : "text-purple-700"
          }`}
        >
          Status:
        </label>
        <div className="flex gap-2">
          {["all", "pending", "completed"].map((s) => (
            <button
              key={s}
              onClick={() => dispatch(setFilterStatus(s))}
              className={`px-3 py-1 rounded text-sm font-semibold transition ${
                status === s
                  ? theme === "dark"
                    ? "bg-purple-500 text-white"
                    : "bg-purple-600 text-white"
                  : theme === "dark"
                  ? "bg-purple-800 text-purple-200"
                  : "bg-white text-purple-700 border border-purple-300"
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => dispatch(resetFilters())}
        className={`px-3 py-2 rounded text-sm font-semibold transition ${
          theme === "dark"
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        Reset Filters
      </button>

      {/* Show matching count */}
      <p
        className={`text-xs mt-3 ${
          theme === "dark" ? "text-purple-300" : "text-purple-700"
        }`}
      >
        Showing {filteredTodos.length} of {todos.length} todos
      </p>
    </div>
  );
}
