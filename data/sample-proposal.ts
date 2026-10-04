import { ProposalData, ItineraryItem, Option } from '@/types';

// Sample 3-day Goa trip proposal
export const goaProposal: ProposalData = {
  proposal: {
    id: 'GOA-2026-001',
    title: 'Goa Beach Escape',
    destination: 'Goa, India',
    startDate: '2026-11-15',
    endDate: '2026-11-17',
    currency: 'INR',
    baseEstimate: 45000,
    status: 'active',
    agentName: 'Priya Sharma',
    agentEmail: 'priya@travelco.example',
    customerName: 'Rahul & Family',
  },

  itineraryItems: [
    {
      id: 'item-1',
      proposalId: 'GOA-2026-001',
      day: 1,
      type: 'accommodation',
      title: 'Beachfront Resort',
      description: 'Comfortable beachfront resort with ocean views, swimming pool, and complimentary breakfast.',
      included: true,
      basePrice: 18000,
      defaultOptionId: 'opt-1-1',
    },
    {
      id: 'item-2',
      proposalId: 'GOA-2026-001',
      day: 1,
      type: 'activity',
      title: 'Water Sports Package',
      description: 'Jet skiing, parasailing, and banana boat ride at Calangute Beach.',
      included: true,
      basePrice: 8000,
      defaultOptionId: 'opt-2-1',
    },
    {
      id: 'item-3',
      proposalId: 'GOA-2026-001',
      day: 2,
      type: 'activity',
      title: 'Old Goa Heritage Tour',
      description: 'Guided tour of historic churches, temples, and Portuguese architecture with lunch included.',
      included: true,
      basePrice: 4500,
      defaultOptionId: 'opt-3-1',
    },
    {
      id: 'item-4',
      proposalId: 'GOA-2026-001',
      day: 2,
      type: 'activity',
      title: 'Sunset Dolphin Cruise',
      description: 'Evening cruise with dolphin watching, live music, and dinner on board.',
      included: true,
      basePrice: 6500,
      defaultOptionId: 'opt-4-1',
    },
    {
      id: 'item-5',
      proposalId: 'GOA-2026-001',
      day: 3,
      type: 'activity',
      title: 'Spice Plantation Visit',
      description: 'Tour of organic spice plantation with traditional Goan lunch and spice shopping.',
      included: true,
      basePrice: 3500,
      defaultOptionId: 'opt-5-1',
    },
    {
      id: 'item-6',
      proposalId: 'GOA-2026-001',
      day: 3,
      type: 'transport',
      title: 'Airport Transfers',
      description: 'Private AC car for pickup and drop-off at Goa International Airport.',
      included: true,
      basePrice: 4500,
      defaultOptionId: 'opt-6-1',
    },
  ],

  options: [
    // Options for Accommodation (item-1)
    {
      id: 'opt-1-1',
      itineraryItemId: 'item-1',
      label: 'Standard Beachfront Resort',
      description: 'Comfortable rooms with garden/partial ocean view, pool access, breakfast included. Perfect for families.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-1-2',
      itineraryItemId: 'item-1',
      label: 'Luxury Beach Villa',
      description: 'Premium oceanfront villa with private balcony, premium amenities, butler service, and gourmet breakfast.',
      priceDelta: 12000,
      approvedForSelection: true,
    },
    {
      id: 'opt-1-3',
      itineraryItemId: 'item-1',
      label: 'Budget Beach Hotel',
      description: 'Clean and comfortable hotel, 5-minute walk to beach, breakfast included. Great value option.',
      priceDelta: -6000,
      approvedForSelection: true,
    },

    // Options for Water Sports (item-2)
    {
      id: 'opt-2-1',
      itineraryItemId: 'item-2',
      label: 'Full Water Sports Package',
      description: 'Jet skiing (15 min), parasailing (7 min), banana boat (10 min), and safety equipment included.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-2-2',
      itineraryItemId: 'item-2',
      label: 'Scuba Diving Experience',
      description: 'Beginner-friendly scuba diving session with certified instructor, equipment, and underwater photography.',
      priceDelta: 4500,
      approvedForSelection: true,
    },
    {
      id: 'opt-2-3',
      itineraryItemId: 'item-2',
      label: 'Skip Water Sports',
      description: 'Remove this activity and enjoy free time at the beach or hotel.',
      priceDelta: -8000,
      approvedForSelection: true,
    },

    // Options for Heritage Tour (item-3)
    {
      id: 'opt-3-1',
      itineraryItemId: 'item-3',
      label: 'Standard Heritage Tour',
      description: 'Half-day guided tour covering Basilica of Bom Jesus, Se Cathedral, and local markets with lunch.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-3-2',
      itineraryItemId: 'item-3',
      label: 'Skip Heritage Tour',
      description: 'Remove this activity for more leisure time or other activities.',
      priceDelta: -4500,
      approvedForSelection: true,
    },

    // Options for Dolphin Cruise (item-4)
    {
      id: 'opt-4-1',
      itineraryItemId: 'item-4',
      label: 'Standard Sunset Cruise',
      description: 'Evening cruise with dolphin watching, live music, dinner buffet, and unlimited soft drinks.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-4-2',
      itineraryItemId: 'item-4',
      label: 'Premium Private Cruise',
      description: 'Private yacht with dedicated crew, customized menu, premium beverages, and professional photography.',
      priceDelta: 8500,
      approvedForSelection: true,
    },

    // Options for Spice Plantation (item-5)
    {
      id: 'opt-5-1',
      itineraryItemId: 'item-5',
      label: 'Standard Plantation Tour',
      description: 'Guided tour with spice demonstration, traditional lunch, elephant interaction, and shopping time.',
      priceDelta: 0,
      approvedForSelection: true,
    },

    // Options for Transport (item-6)
    {
      id: 'opt-6-1',
      itineraryItemId: 'item-6',
      label: 'Private AC Car',
      description: 'Sedan with professional driver for all airport transfers and sightseeing.',
      priceDelta: 0,
      approvedForSelection: true,
    },
  ],
};

// Helper function to get options for a specific itinerary item
export function getOptionsForItem(itemId: string): Option[] {
  return goaProposal.options.filter(opt => opt.itineraryItemId === itemId);
}

// Helper function to calculate total estimate with selections
export function calculateEstimate(selectedOptions: Record<string, string>): number {
  let total = goaProposal.proposal.baseEstimate;
  
  goaProposal.itineraryItems.forEach(item => {
    const selectedOptionId = selectedOptions[item.id] || item.defaultOptionId;
    const option = goaProposal.options.find(opt => opt.id === selectedOptionId);
    
    if (option) {
      total += option.priceDelta;
    }
  });
  
  return total;
}
