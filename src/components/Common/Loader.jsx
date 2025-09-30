export default function Loader({ size = "md", position = "center" }) {
  const sizeMap = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <div className={`flex w-full ${justifyMap[position]}`}>
      <div
        className={`animate-spin rounded-full border-t-transparent border-indigo-500 ${sizeMap[size]}`}
      ></div>
    </div>
  );
}
