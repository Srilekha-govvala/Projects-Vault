import {useEffect, useState} from "react";
/**
 * Custom React hook for fetching data from a URL
 * @param {string} url - The URL to fetch data from
 * @returns {Object} An object containing:
 *   - {Array} data - The fetched data
 *   - {boolean} loading - Loading state indicator
 *   - {Error|null} error - Error object if fetch fails, null otherwise
 * 
 * @description
 * The `alive` variable is a cleanup mechanism that prevents state updates
 * after the component unmounts. When the component unmounts, the cleanup
 * function sets `alive` to false, preventing setData, setError, and setLoading
 * from being called on an unmounted component. This avoids memory leaks and
 * the "Can't perform a React state update on an unm0ounted component" warning
 * that occurs when async operations complete after unmounting.
 */
export function useFetch(url){
    const [data, setData]=useState([]);
    const[loading, setLoading]=useState(true);
    const[error, setError]= useState(null);
    useEffect(()=>{
        let alive = true;
        async function load() {
            try{
                setLoading(true);
                const res=await fetch(url);
                const json=await res.json();
                if(alive) setData(json)
            }catch(e){
                if(alive) setError(e)
            }finally{
                if(alive) setLoading(false)
            }
        }
        load();
        return ()=>(alive=false)
    },[url])
    return {data,loading,error}
}