'use client';

import { useState, useMemo } from 'react';
import { goaProposal, getOptionsForItem, calculateEstimate } from '@/data/sample-proposal';
import { Option } from '@/types';

export default function ProposalPage({ params }: { params: { id: string } }) {
  const { proposal, itineraryItems } = goaProposal;
  
  // Initialize with default selections
  const defaultSelections: Record<string, string> = {};
  itineraryItems.forEach(item => {
    if (item.defaultOptionId) {
      defaultSelections[item.id] = item.defaultOptionId;
    }
  });
  
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(defaultSelections);
  const [customerNote, setCustomerNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Calculate current estimate
  const currentEstimate = useMemo(() => {
    return calculateEstimate(selectedOptions);
  }, [selectedOptions]);
  
  const handleOptionChange = (itemId: string, optionId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [itemId]: optionId,
    }));
  };
  
  const handleSubmit = () => {
    // In a real app, this would send to API
    const submission = {
      id: `SUB-${Date.now()}`,
      proposalId: proposal.id,
      selectedOptions,
      optionalNote: customerNote,
      displayedEstimate: currentEstimate,
      submittedAt: new Date().toISOString(),
      status: 'pending' as const,
    };
    
    // Store in sessionStorage for demo agent view
    sessionStorage.setItem('latestSubmission', JSON.stringify(submission));
    setIsSubmitted(true);
  };
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: proposal.currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };
  
  // Group items by day
  const itemsByDay = itineraryItems.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {} as Record<number, typeof itineraryItems>);
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Request Sent Successfully!
            </h1>
            
            <p className="text-gray-600 mb-6">
              Thank you for customizing your trip. Your agent {proposal.agentName} will review your selections and confirm final availability and pricing.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Your estimated total:</span> {formatCurrency(currentEstimate)}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                * Final price subject to availability confirmation
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                ← Back to Proposal
              </button>
              <a
                href="/demo/agent-summary"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Agent Summary →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{proposal.title}</h1>
                <p className="text-blue-100 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {proposal.destination}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-100 mb-1">Prepared by</div>
                <div className="font-semibold">{proposal.agentName}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(proposal.startDate)} - {formatDate(proposal.endDate)}
              </span>
              <span className="text-blue-200">•</span>
              <span>3 Days, 2 Nights</span>
            </div>
          </div>
          
          {/* Demo Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-400 px-6 py-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-amber-900">Demo Proposal with Sample Data</p>
                <p className="text-xs text-amber-700 mt-1">
                  All prices and availability shown are illustrative. Final pricing and availability require agent confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Itinerary */}
        <div className="space-y-6 mb-6">
          {Object.entries(itemsByDay).map(([day, items]) => (
            <div key={day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b">
                <h2 className="text-lg font-bold text-gray-900">
                  Day {day}
                </h2>
              </div>
              
              <div className="divide-y">
                {items.map((item) => {
                  const options = getOptionsForItem(item.id);
                  const selectedOptionId = selectedOptions[item.id];
                  
                  return (
                    <div key={item.id} className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          {item.type === 'accommodation' && (
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          )}
                          {item.type === 'activity' && (
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {item.type === 'transport' && (
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Options */}
                      {options.length > 1 && (
                        <div className="ml-13 space-y-3">
                          <p className="text-sm font-medium text-gray-700 mb-3">
                            Choose your preference:
                          </p>
                          {options.map((option) => (
                            <label
                              key={option.id}
                              className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                selectedOptionId === option.id
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300 bg-white'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <input
                                  type="radio"
                                  name={`option-${item.id}`}
                                  value={option.id}
                                  checked={selectedOptionId === option.id}
                                  onChange={() => handleOptionChange(item.id, option.id)}
                                  className="mt-1 w-4 h-4 text-blue-600"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-gray-900">
                                      {option.label}
                                    </span>
                                    <span className={`text-sm font-semibold ${
                                      option.priceDelta > 0 ? 'text-orange-600' :
                                      option.priceDelta < 0 ? 'text-green-600' :
                                      'text-gray-500'
                                    }`}>
                                      {option.priceDelta > 0 && '+'}
                                      {option.priceDelta !== 0 ? formatCurrency(option.priceDelta) : 'Included'}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    {option.description}
                                  </p>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Price Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Price Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-600">
              <span>Base package</span>
              <span>{formatCurrency(proposal.baseEstimate)}</span>
            </div>
            {itineraryItems.map(item => {
              const selectedOptionId = selectedOptions[item.id];
              const option = goaProposal.options.find(opt => opt.id === selectedOptionId);
              if (option && option.priceDelta !== 0) {
                return (
                  <div key={item.id} className="flex justify-between text-sm text-gray-600">
                    <span>{option.label}</span>
                    <span className={option.priceDelta > 0 ? 'text-orange-600' : 'text-green-600'}>
                      {option.priceDelta > 0 ? '+' : ''}{formatCurrency(option.priceDelta)}
                    </span>
                  </div>
                );
              }
              return null;
            })}
          </div>
          
          <div className="border-t pt-4 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Estimated Total</span>
            <span className="text-2xl font-bold text-blue-600">{formatCurrency(currentEstimate)}</span>
          </div>
          
          <p className="text-xs text-gray-500 mt-3">
            * This is an estimate. Final price will be confirmed by your agent after checking availability.
          </p>
        </div>
        
        {/* Customer Note */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <label htmlFor="note" className="block text-lg font-bold text-gray-900 mb-2">
            Additional Notes (Optional)
          </label>
          <p className="text-sm text-gray-600 mb-3">
            Let your agent know about any special requests or questions.
          </p>
          <textarea
            id="note"
            value={customerNote}
            onChange={(e) => setCustomerNote(e.target.value)}
            placeholder="E.g., dietary preferences, accessibility needs, special occasions..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={4}
          />
        </div>
        
        {/* Submit Button */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
          >
            Send Customization Request
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
            Your agent will review and confirm within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
