export function ContentWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {children}
    </div>
  );
}
