'use client';

import { useEffect, useState } from 'react';
import { goaProposal } from '@/data/sample-proposal';
import { CustomerSubmission } from '@/types';

export default function AgentSummaryPage() {
  const [submission, setSubmission] = useState<CustomerSubmission | null>(null);
  const { proposal, itineraryItems } = goaProposal;
  
  useEffect(() => {
    const stored = sessionStorage.getItem('latestSubmission');
    if (stored) {
      setSubmission(JSON.parse(stored));
    }
  }, []);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: proposal.currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  const formatDateTime = (isoString: string) => {
    return new Date(isoString).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  if (!submission) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h1 className="text-xl font-bold text-gray-900 mb-2">No Submission Found</h1>
          <p className="text-gray-600 mb-2">
            Complete a proposal customization first to see the agent summary.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            Note: Submissions are stored in sessionStorage and will be cleared on browser refresh or closing the tab.
          </p>
          <a
            href="/proposal/GOA-2026-001"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go to Demo Proposal
          </a>
        </div>
      </div>
    );
  }
  
  const getChangeSummary = () => {
    const changes: Array<{ item: string; from: string; to: string; priceImpact: number }> = [];
    
    itineraryItems.forEach(item => {
      const selectedOptionId = submission.selectedOptions[item.id];
      const defaultOptionId = item.defaultOptionId;
      
      if (selectedOptionId !== defaultOptionId) {
        const fromOption = goaProposal.options.find(opt => opt.id === defaultOptionId);
        const toOption = goaProposal.options.find(opt => opt.id === selectedOptionId);
        
        if (fromOption && toOption) {
          changes.push({
            item: item.title,
            from: fromOption.label,
            to: toOption.label,
            priceImpact: toOption.priceDelta - fromOption.priceDelta,
          });
        }
      }
    });
    
    return changes;
  };
  
  const changes = getChangeSummary();
  const totalPriceChange = changes.reduce((sum, change) => sum + change.priceImpact, 0);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Agent Summary View
            </h1>
            <p className="text-gray-600">
              Demo view showing what the travel agent receives
            </p>
          </div>
          <a
            href="/proposal/GOA-2026-001"
            className="px-4 py-2 text-sm bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            ← Back to Proposal
          </a>
        </div>
        
        {/* Demo Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 px-6 py-4 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-900">Demo Agent Dashboard</p>
              <p className="text-xs text-blue-700 mt-1">
                In production, this would integrate with the agent's existing workflow (Flyo, email, WhatsApp, etc.). This is a standalone demo view only.
              </p>
            </div>
          </div>
        </div>
        
        {/* Submission Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">Customization Request</h2>
                <p className="text-blue-100">Proposal: {proposal.id}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-xs text-blue-100 mb-1">Status</div>
                <div className="text-sm font-semibold">Pending Review</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <span className="text-blue-100">Customer:</span> {proposal.customerName}
              </div>
              <span className="text-blue-200">•</span>
              <div>
                <span className="text-blue-100">Submitted:</span> {formatDateTime(submission.submittedAt)}
              </div>
            </div>
          </div>
          
          {/* Customer Changes */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Requested Changes</h3>
            
            {changes.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>No changes requested - customer accepted the original proposal</p>
              </div>
            ) : (
              <div className="space-y-4">
                {changes.map((change, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="font-medium text-gray-900 mb-2">{change.item}</div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex-1">
                        <div className="text-gray-500 mb-1">Original:</div>
                        <div className="text-gray-700">{change.from}</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-gray-500 mb-1">Requested:</div>
                        <div className="font-medium text-gray-900">{change.to}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          change.priceImpact > 0 ? 'text-orange-600' :
                          change.priceImpact < 0 ? 'text-green-600' :
                          'text-gray-500'
                        }`}>
                          {change.priceImpact > 0 && '+'}
                          {formatCurrency(change.priceImpact)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Price Impact */}
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Original Estimate:</span>
              <span className="font-semibold text-gray-900">{formatCurrency(proposal.baseEstimate)}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-700">Total Changes:</span>
              <span className={`font-semibold ${
                totalPriceChange > 0 ? 'text-orange-600' :
                totalPriceChange < 0 ? 'text-green-600' :
                'text-gray-500'
              }`}>
                {totalPriceChange > 0 && '+'}
                {formatCurrency(totalPriceChange)}
              </span>
            </div>
            <div className="border-t pt-3 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">New Estimated Total:</span>
              <span className="text-2xl font-bold text-blue-600">{formatCurrency(submission.displayedEstimate)}</span>
            </div>
          </div>
          
          {/* Customer Note */}
          {submission.optionalNote && (
            <div className="px-6 py-4 border-t">
              <h3 className="font-semibold text-gray-900 mb-2">Customer Note:</h3>
              <p className="text-gray-700 bg-gray-50 rounded-lg p-4">{submission.optionalNote}</p>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="px-6 py-6 border-t bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Confirm Availability & Send Quote
              </button>
              <button className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                Request More Info
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3">
              Demo buttons - in production, these would trigger your actual workflow
            </p>
          </div>
        </div>
        
        {/* Full Selection Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Complete Selection Details</h3>
          <div className="space-y-3">
            {itineraryItems.map(item => {
              const selectedOptionId = submission.selectedOptions[item.id];
              const option = goaProposal.options.find(opt => opt.id === selectedOptionId);
              
              return (
                <div key={item.id} className="flex justify-between items-start py-3 border-b last:border-b-0">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{option?.label}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${
                      (option?.priceDelta || 0) > 0 ? 'text-orange-600' :
                      (option?.priceDelta || 0) < 0 ? 'text-green-600' :
                      'text-gray-500'
                    }`}>
                      {(option?.priceDelta || 0) !== 0 ? (
                        <>
                          {(option?.priceDelta || 0) > 0 && '+'}
                          {formatCurrency(option?.priceDelta || 0)}
                        </>
                      ) : (
                        'Included'
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
