// Data models for Triply MVP

export interface Proposal {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  currency: string;
  baseEstimate: number;
  status: 'draft' | 'active' | 'expired';
  agentName: string;
  agentEmail: string;
  customerName: string;
}

export interface ItineraryItem {
  id: string;
  proposalId: string;
  day: number;
  type: 'accommodation' | 'activity' | 'transport' | 'meal';
  title: string;
  description: string;
  included: boolean;
  basePrice: number;
  defaultOptionId?: string;
}

export interface Option {
  id: string;
  itineraryItemId: string;
  label: string;
  description: string;
  priceDelta: number; // difference from base price
  approvedForSelection: boolean;
  imageUrl?: string;
}

export interface CustomerSubmission {
  id: string;
  proposalId: string;
  selectedOptions: Record<string, string>; // itineraryItemId -> optionId
  optionalNote: string;
  displayedEstimate: number;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'confirmed';
}

export interface ProposalData {
  proposal: Proposal;
  itineraryItems: ItineraryItem[];
  options: Option[];
}
