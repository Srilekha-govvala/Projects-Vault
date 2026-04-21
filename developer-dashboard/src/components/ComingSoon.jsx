export default function ComingSoon({pageName}){
    return(
        <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
           <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-3xl">
            🚧
            </div>
            <div className="text-center">
                <h2 className="text-white font-semibold text-lg">{pageName}</h2>
                <p className="text-gray-500 text-sm mt-1">This page is under construction</p>
            </div>
            <span className="text-xs text-indigo-400 bg-indigo-500/10 px-3 y-1.5 rounded-full border border-indigo-500/20">
            Coming Soon
            </span>
        </div>
    )
}