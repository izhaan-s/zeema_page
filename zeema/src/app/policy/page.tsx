export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Zeema Health - Effective Date: January 1, 2024
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            <div className="prose max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Health Data:</strong> Symptoms, medications, vital signs, and health metrics you choose to track.</p>
                  <p><strong>Account Information:</strong> Email address, profile information, and preferences.</p>
                  <p><strong>Usage Data:</strong> App interactions, features used, and anonymous analytics.</p>
                  <p><strong>Device Information:</strong> Device type, operating system, and app version.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>• Provide and improve our health tracking services</p>
                  <p>• Generate personalized insights and recommendations</p>
                  <p>• Ensure app functionality and security</p>
                  <p>• Communicate with you about your account and updates</p>
                  <p>• Comply with legal obligations</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Data Sharing and Disclosure
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-semibold mb-2">We do not sell your personal health data.</p>
                  <div className="text-gray-700 space-y-2">
                    <p>We may share information only in these limited circumstances:</p>
                    <p>• With your explicit consent</p>
                    <p>• To comply with legal requirements</p>
                    <p>• To protect rights, property, or safety</p>
                    <p>• With service providers under strict data protection agreements</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Data Security
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>We implement industry-standard security measures including:</p>
                  <p>• End-to-end encryption for sensitive health data</p>
                  <p>• Secure data transmission (TLS/SSL)</p>
                  <p>• Regular security audits and monitoring</p>
                  <p>• Limited access controls and employee training</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Your Rights and Choices
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p><strong>Access:</strong> Request a copy of your personal data</p>
                  <p><strong>Correction:</strong> Update or correct inaccurate information</p>
                  <p><strong>Deletion:</strong> Request deletion of your account and data</p>
                  <p><strong>Portability:</strong> Export your health data in a standard format</p>
                  <p><strong>Opt-out:</strong> Disable analytics and non-essential data collection</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Children&rsquo;s Privacy
                </h2>
                <div className="text-gray-700">
                  <p>Zeema Health is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  International Data Transfers
                </h2>
                <div className="text-gray-700">
                  <p>Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Changes to This Policy
                </h2>
                <div className="text-gray-700">
                  <p>We may update this privacy policy from time to time. We will notify you of any material changes through the app or email. Your continued use constitutes acceptance of the updated policy.</p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Us
                </h2>
                <div className="text-gray-700">
                  <p className="mb-4">If you have any questions about this privacy policy or our data practices, please contact us:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:privacy@zeema.app" className="text-blue-600 hover:text-blue-700 underline">privacy@zeema.app</a></p>
                    <p><strong>Support:</strong> <a href="mailto:support@zeema.app" className="text-blue-600 hover:text-blue-700 underline">support@zeema.app</a></p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Zeema Health. All rights reserved.</p>
          <p className="mt-2">Last updated: January 1, 2024</p>
        </div>
      </div>
    </div>
  );
} 