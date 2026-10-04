export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              MVP Prototype • Demo Only
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Triply
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Customer-Friendly Travel Proposal Customization
            </p>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Helping travel agents and their customers finalize trip details faster with structured, 
              agent-approved choices and transparent pricing.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Demo Scenario
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Review Proposed Trip</h3>
                    <p className="text-gray-600 text-sm">
                      A 3-day Goa Beach Escape proposal prepared by your travel agent with accommodation, 
                      activities, and transport included.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Customize Your Choices</h3>
                    <p className="text-gray-600 text-sm">
                      Choose from agent-approved alternatives for hotels and activities. 
                      See the price update in real-time as you make changes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Send Structured Request</h3>
                    <p className="text-gray-600 text-sm">
                      Submit your preferences and optional notes. Your agent receives a clear, 
                      organized change request instead of scattered messages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <p className="font-medium text-blue-900 mb-1">About This Prototype</p>
                    <p className="text-blue-800">
                      This MVP demonstrates how customer customization could work alongside 
                      a travel agent's workflow. All data is sample only—final prices and 
                      availability require agent confirmation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/proposal/GOA-2026-001"
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-center hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  View Demo Proposal →
                </a>
                <a
                  href="/demo/agent-summary"
                  className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-lg font-medium text-center hover:bg-gray-200 transition-colors"
                >
                  Agent Summary View
                </a>
              </div>
            </div>

            {/* Product Context */}
            <div className="bg-gray-50 px-8 md:px-12 py-8 border-t">
              <h3 className="font-bold text-gray-900 mb-3">Product Context</h3>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Original Vision:</strong> Triply started as a B2C modular travel planner 
                where individual travelers choose destinations, accommodation, and activities with 
                transparent pricing.
              </p>
              <p className="text-sm text-gray-700">
                <strong>This MVP:</strong> Narrowed to one focused capability—letting travel-agent 
                customers customize proposals from agent-approved options. Built as a discussion 
                prototype to explore fit with Flyo's B2B travel-operations platform.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 text-center text-blue-100 text-sm">
            <p>Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
