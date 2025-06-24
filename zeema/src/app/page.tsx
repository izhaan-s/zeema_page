export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center max-w-md w-full">
        {/* Checkmark Icon */}
        <div className="mx-auto mb-8 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-green-600" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          You have been verified
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 text-lg">
          Your account is now confirmed and ready to use.
        </p>
      </div>
    </div>
  );
}
