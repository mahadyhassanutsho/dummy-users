export default function Container({ children, className = "" }) {
  return <div className={`max-w-7xl p-5 mx-auto ${className}`}>{children}</div>;
}
