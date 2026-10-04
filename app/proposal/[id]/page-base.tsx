'use client';

import { goaProposal } from '@/data/sample-proposal';

export default function ProposalPage({ params }: { params: { id: string } }) {
  const { proposal, itineraryItems } = goaProposal;
  
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
        </div>
        
        <div className="text-center text-gray-600">
          Proposal view coming soon...
        </div>
      </div>
    </div>
  );
}
