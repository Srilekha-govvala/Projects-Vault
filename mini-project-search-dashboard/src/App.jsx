import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { useDebounce } from './hooks/useDebounce'

const PAGE_SIZE=3;

function App() {
  const {data:users,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");
  const [search,setSearch]=useState("")
  const [page,setPage]=useState(1)
  const debouncedSearch=useDebounce(search,500);
  const filtered =users.filter(u=>u.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
  const totalPages= Math.ceil(filtered.length/PAGE_SIZE);
  const start=(page-1)*PAGE_SIZE;
  const visible=filtered.slice(start,start+PAGE_SIZE);

  if(loading) return <p>Loading ....</p>
  if(error) return <p>Error loading users</p>

  return (
    <div>
      <input placeholder='Enter user...'
      value={search}
      onChange={e=>{
        setSearch(e.target.value);
        setPage(1)
      }}/>
      <ul>{visible.map(u=>(
        <li key={u.id}>{u.name}</li>
      ))}</ul>
      <div>
        {Array.from({length:totalPages},(_,i)=>i+1).map(n=>(
          <button key={n} onClick={()=>setPage(n)}>{n}</button>
        ))}
      </div>
    </div>
  )
}

export default App
