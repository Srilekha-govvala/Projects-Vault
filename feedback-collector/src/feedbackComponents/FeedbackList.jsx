export default function FeedbackList({feedbacks,onDeleteFeedback}){
if(feedbacks.length===0)
    return <p className="mt-6 text-white/80">No feedback yet 😊</p>
    return (
        <div className="mt-8 w-full max-w-md space-y-4">
      {feedbacks.map((fb) => (
        <div
          key={fb.id}
          className="bg-white/20 p-4 rounded-lg shadow hover:scale-[1.02] transition"
        >
          <div className="flex justify-between mb-2">
            <span className="font-semibold">⭐ Rating: {fb.rating}</span>
            <span className="text-sm text-white/70">{fb.date}</span>
          </div>
          <div className="flex justify-between mb-2 items-start">
            <p className="mr-2">{fb.comment}</p>
            <button
              onClick={() => onDeleteFeedback(fb.id)}
              aria-label="Delete feedback"
              className="ml-2 w-8 h-8 flex items-center justify-center text-white transition group hover:text-red-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition group-hover:text-red-400 group-hover:drop-shadow-[0_4px_12px_rgba(239,68,68,0.6)]">
                <path d="M9 3a1 1 0 00-.894.553L7 5H4a1 1 0 100 2h16a1 1 0 100-2h-3l-1.106-1.447A1 1 0 0015 3H9z" />
                <path d="M7 8v12a2 2 0 002 2h6a2 2 0 002-2V8H7z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
    )
}