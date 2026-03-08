import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../features/ui/uiSlice";

export default function Notification() {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.ui);
  const { theme } = useSelector((state) => state.ui);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.show, dispatch]);

  const bgColorClass =
    notification.type === "success"
      ? theme === "dark"
        ? "bg-green-600"
        : "bg-green-100"
      : notification.type === "error"
      ? theme === "dark"
        ? "bg-red-600"
        : "bg-red-100"
      : theme === "dark"
      ? "bg-blue-600"
      : "bg-blue-100";

  const textColorClass =
    notification.type === "success"
      ? theme === "dark"
        ? "text-green-100"
        : "text-green-800"
      : notification.type === "error"
      ? theme === "dark"
        ? "text-red-100"
        : "text-red-800"
      : theme === "dark"
      ? "text-blue-100"
      : "text-blue-800";

  const borderColorClass =
    notification.type === "success"
      ? theme === "dark"
        ? "border-green-500"
        : "border-green-300"
      : notification.type === "error"
      ? theme === "dark"
        ? "border-red-500"
        : "border-red-300"
      : theme === "dark"
      ? "border-blue-500"
      : "border-blue-300";

  return (
    <div
      className={`mb-4 p-4 rounded-lg border-l-4 ${bgColorClass} ${textColorClass} ${borderColorClass} animate-pulse`}
    >
      <p className="font-semibold">
        {notification.type === "success" ? "✓" : notification.type === "error" ? "✕" : "ℹ"}{" "}
        {notification.message}
      </p>
    </div>
  );
}
