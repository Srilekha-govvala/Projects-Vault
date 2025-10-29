import { useState } from "react";
export default function FeedbackForm({ onAddFeedback }) {
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!rating || !comment.trim()) return;
        const newFeedback = {
            id: Date.now(),
            rating,
            comment,
            date: new Date().toLocaleString()
        }
        onAddFeedback(newFeedback);
        setComment("")
        setRating("")
    }
    return (
        <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-lg shadow-lg w-full max-w-md">
            <label className="block mb-2 font-semibold">
                Rating (1-5)<span className="text-red-300">*</span> :
            </label>
            <input type="number" min="1" max="5" value={rating} onChange={(e) => { setRating(e.target.value) }}
                className="w-full p-2 rounded md-4 text-black bg-gray-200" />
            <label className="block mb-2 font-semibold">
                Your Comment<span className="text-red-300">*</span> :
            </label>
            <textarea value={comment} onChange={(e) => { setComment(e.target.value) }}
                className="w-full p-2 rounded text-black bg-gray-200" />
            <button className="bg-green-500 mt-4 px-4 rounded hover:bg-green-600 w-full">Submit Feedback</button>
        </form>
    )
}