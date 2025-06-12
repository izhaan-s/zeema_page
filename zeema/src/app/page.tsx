export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Page header */}
          <div className="bg-blue-50 px-8 py-6 border-b border-gray-200">
            <h1 className="text-3xl font-semibold text-blue-600 mb-0 border-none">
              Account Deletion Request
            </h1>
            <p className="text-gray-600 mt-2 mb-0">
              Manage your personal data and account settings
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                If you wish to delete your Zeema account and all associated data, please follow these steps:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-4 border-none">
                  How to request account deletion
                </h2>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-semibold rounded-full mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="mb-1">
                        Email us at <strong className="text-blue-600">support@zeema.app</strong> from your registered email address.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-semibold rounded-full mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="mb-1">
                        Use the subject line: <strong className="text-blue-600">"Account Deletion Request"</strong>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-semibold rounded-full mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="mb-1">
                        We'll verify your identity and delete all data within <strong className="text-blue-600">7 business days</strong>.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-3 border-none flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  What data will be deleted
                </h3>
                <p className="text-amber-800 mb-0">
                  All your personal data will be permanently removed, including symptoms tracking, medications, photos, lifestyle logs, and all account information.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3 border-none flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Need help?
                </h3>
                <p className="text-green-800 mb-0">
                  If you have any questions about the deletion process or need assistance, please don't hesitate to contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm mb-0">
            © 2024 Zeema Health. Your privacy and data protection are important to us.
          </p>
        </div>
      </footer>
    </div>
  );
}
