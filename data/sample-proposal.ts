import { ProposalData, ItineraryItem, Option } from '@/types';

/**
 * DEMO DATA NOTES:
 * 
 * For production integration, this data would be sourced from:
 * 
 * 1. HOTELS: 
 *    - APIs: MakeMyTrip, Booking.com, Agoda, Goibibo
 *    - Real reviews from TripAdvisor, Google Reviews
 *    - Live availability and pricing
 * 
 * 2. ACTIVITIES:
 *    - APIs: GetYourGuide, Viator, Thrillophilia
 *    - Verified operator reviews and ratings
 *    - Real-time slot availability
 * 
 * 3. INSURANCE:
 *    - APIs: ICICI Lombard, HDFC ERGO, Bajaj Allianz
 *    - Dynamic pricing based on traveler age, trip value
 *    - Real policy terms and coverage details
 * 
 * 4. TRANSPORT:
 *    - Uber/Ola APIs for ride estimates
 *    - Private car rental services (Savaari, Zoomcar)
 *    - Live driver availability
 * 
 * 5. REVIEWS & RATINGS:
 *    - TripAdvisor API for hotel/activity reviews
 *    - Google Places API for ratings and photos
 *    - Flyo's internal customer feedback system
 * 
 * Current data: Sample prices and descriptions for MVP demo only
 */

// Sample 3-day Goa trip proposal
export const goaProposal: ProposalData = {
  proposal: {
    id: 'GOA-2026-001',
    title: 'Goa Beach Escape',
    destination: 'Goa, India',
    startDate: '2026-11-15',
    endDate: '2026-11-17',
    currency: 'INR',
    baseEstimate: 45000, // Accommodation (18k) + Water Sports (8k) + Heritage (4.5k) + Cruise (6.5k) + Plantation (3.5k) + Transport (4.5k)
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
    {
      id: 'item-7',
      proposalId: 'GOA-2026-001',
      day: 1,
      type: 'meal',
      title: 'Dining Preferences',
      description: 'Customize your meal plan for the entire trip.',
      included: true,
      basePrice: 0,
      defaultOptionId: 'opt-7-1',
    },
    {
      id: 'item-8',
      proposalId: 'GOA-2026-001',
      day: 1,
      type: 'activity',
      title: 'Travel Insurance',
      description: 'Protection coverage for your trip including medical emergencies and cancellations.',
      included: false,
      basePrice: 0,
      defaultOptionId: 'opt-8-1',
    },
    {
      id: 'item-9',
      proposalId: 'GOA-2026-001',
      day: 2,
      type: 'activity',
      title: 'Tour Guide Language',
      description: 'Choose your preferred language for all guided tours and activities.',
      included: true,
      basePrice: 0,
      defaultOptionId: 'opt-9-1',
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

    // Options for Dining Preferences (item-7)
    {
      id: 'opt-7-1',
      itineraryItemId: 'item-7',
      label: 'Standard Meal Plan (Breakfast Only)',
      description: 'Daily breakfast included at hotel. Lunch and dinner at your own expense. Most flexible option.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-7-2',
      itineraryItemId: 'item-7',
      label: 'Half Board (Breakfast + Dinner)',
      description: 'Daily breakfast and dinner at hotel restaurant. Lunch at your choice. Popular with families.',
      priceDelta: 3500,
      approvedForSelection: true,
    },
    {
      id: 'opt-7-3',
      itineraryItemId: 'item-7',
      label: 'Full Board (All Meals)',
      description: 'Breakfast, lunch, and dinner included. Buffet style with vegetarian and non-vegetarian options.',
      priceDelta: 6500,
      approvedForSelection: true,
    },
    {
      id: 'opt-7-4',
      itineraryItemId: 'item-7',
      label: 'Vegetarian Meal Plan',
      description: 'All meals with exclusively vegetarian options. Includes Jain food upon request.',
      priceDelta: 6000,
      approvedForSelection: true,
    },

    // Options for Travel Insurance (item-8)
    // Note: Real data integration - Insurance quotes from providers like ICICI Lombard, HDFC ERGO
    {
      id: 'opt-8-1',
      itineraryItemId: 'item-8',
      label: 'No Insurance',
      description: 'Skip travel insurance. Not recommended for international travelers.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-8-2',
      itineraryItemId: 'item-8',
      label: 'Basic Coverage',
      description: 'Medical emergencies up to ₹2 lakh, baggage loss up to ₹10k. Trip cancellation: 50% refund.',
      priceDelta: 850,
      approvedForSelection: true,
    },
    {
      id: 'opt-8-3',
      itineraryItemId: 'item-8',
      label: 'Comprehensive Coverage',
      description: 'Medical up to ₹5 lakh, baggage up to ₹25k, 100% trip cancellation, adventure activities covered.',
      priceDelta: 1800,
      approvedForSelection: true,
    },

    // Options for Tour Guide Language (item-9)
    // Note: Real data - Guide availability can be verified through local tour operator APIs
    {
      id: 'opt-9-1',
      itineraryItemId: 'item-9',
      label: 'English',
      description: 'All tours conducted in English. Most guides are fluent English speakers.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-9-2',
      itineraryItemId: 'item-9',
      label: 'Hindi',
      description: 'All tours conducted in Hindi. Preferred by North Indian travelers.',
      priceDelta: 0,
      approvedForSelection: true,
    },
    {
      id: 'opt-9-3',
      itineraryItemId: 'item-9',
      label: 'Regional Language (Kannada/Tamil/Telugu)',
      description: 'Tours in South Indian languages. Subject to guide availability, 48-hour advance booking required.',
      priceDelta: 1500,
      approvedForSelection: true,
    },
    {
      id: 'opt-9-4',
      itineraryItemId: 'item-9',
      label: 'International Language (Spanish/French/German)',
      description: 'Professional multilingual guide for international tourists. Limited availability, advance booking required.',
      priceDelta: 3500,
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
