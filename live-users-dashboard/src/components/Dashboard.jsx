import { useState, useRef, useEffect } from "react";
import axios from "axios";
export default function Dashboard() {
    const [users, setUsers] = useState([])//sores user data
    const [filtered, setFiltered] = useState([]);//sore search results
    const [loading, setLoading] = useState(true)//loading state
    const searchRef = useRef(null)//ref for search input
    useEffect(() => {
        fetchUsers()
        searchRef.current?.focus()//auto focus input when page loads
    }, [])
    //API call to fetch users
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            const result = res.data
            console.log(result)
            setUsers(result)
            setFiltered(result)
        }
        catch (e) {
            console.log("Failed to fetch the users: ", e)
        }
        finally {
            setLoading(false)
        }
    }
    //filter case in-sensitive
    const handlesearch = (e) => {
        const query = (e?.target?.value || "").trim().toLowerCase();
        if (!query) {
            setFiltered(users);
            return;
        }
        const result = users.filter((u) => u.name.toLowerCase().includes(query));
        setFiltered(result);
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-cyan-600 p-8 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">
                👩‍💻 Live Users Dashboard
            </h1>
            {/* Search Bar */}
            <div className="flex justify-center gap-3 mb-6">
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="search by name..." className="px-4 py-2 rounded text-black w-64 shadow" onChange={handlesearch} />
                <button onClick={fetchUsers} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
                    Refresh
                </button>
            </div>
            {/* Display Section */}
            {loading ?
                <p className="text-center text-lg">⏳ Loading users...</p>
                : filtered.length === 0 ? <p className="text-center text-lg">😔 No users found</p> :
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((fd) => (
                            <div className="bg-white/10 p-5 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300" key={fd.id}>
                                <p className="text-xl font-bold md-1">{fd.name}</p>
                                <p className="text-white/90">{fd.email}</p>
                                <p className="text-white/70">{fd.address.city}</p>
                                <p className="text-sm text-white/50 mt-2">company : {fd.company.name}</p>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}