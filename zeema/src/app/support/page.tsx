export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center max-w-lg w-full">
        {/* Support Icon */}
        <div className="mx-auto mb-8 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-blue-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z"
            />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Need Help?
        </h1>
        
        {/* Support Message */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          We&rsquo;re here to help! Reach out to our support team for any questions or assistance.
        </p>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center justify-center mb-4">
            <svg 
              className="w-6 h-6 text-blue-600 mr-3" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Contact Us
            </span>
          </div>
          
          <a 
            href="mailto:support@zeema.app" 
            className="text-2xl font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-200 underline decoration-2 underline-offset-4"
          >
            support@zeema.app
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-gray-500 text-sm mt-6">
          We typically respond within 24 hours
        </p>
      </div>
    </div>
  );
} 