import { useState,useEffect } from 'react';
import FeedbackForm from './feedbackComponents/FeedbackForm';
import FeedbackList from './feedbackComponents/FeedbackList';
function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stored = localStorage.getItem("feedbacks");
    return stored ? JSON.parse(stored) : [];
  });
    useEffect(() => {
    const stored = localStorage.getItem("feedbacks");
    if (stored) setFeedbacks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  const addFeedback = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev])
  }
  const deleteFeedback = (id) => {
    setFeedbacks((prev) => prev.filter((fb) => fb.id !== id))
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center p-6 text-white'>
      <h1 className='text-3xl font-bold mb-6'>💬 Feedback Collector</h1>
      <FeedbackForm onAddFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} onDeleteFeedback={deleteFeedback} />
    </div>
  );
}

export default App;