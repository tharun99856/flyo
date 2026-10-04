# Triply MVP - Travel Proposal Customization

A customer-facing travel proposal customization prototype that demonstrates how travelers can select from agent-approved alternatives and submit structured change requests.

## 🎯 Project Overview

**Original Vision:** Triply began as a B2C modular travel planner where individual travelers choose destinations, accommodation, and activities with transparent pricing.

**This MVP:** Narrowed to one focused capability—letting travel-agent customers customize proposals from agent-approved options. Built as a discussion prototype to explore fit with Flyo's B2B travel-operations platform.

## ✨ Key Features

- **Customer Proposal View**: Clean, mobile-responsive interface for reviewing trip details
- **Agent-Approved Choices**: Customers select only from options pre-approved by their travel agent
- **Live Price Updates**: Estimated total updates in real-time as options are changed
- **Structured Change Requests**: Organized submission instead of scattered messages
- **Agent Summary View**: Demo view showing what the agent receives (for prototype purposes)
- **Transparent Disclaimers**: Clear indication that prices are estimates requiring agent confirmation

## 🚀 Demo Scenario

The prototype demonstrates a **3-day Goa Beach Escape** proposal:

1. **Review** the proposed itinerary with accommodation, activities, and transport
2. **Customize** choices like upgrading to a luxury villa or changing activities
3. **Submit** preferences with optional notes for the agent
4. **View** the structured summary the agent receives

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: Local sample data (Goa trip proposal)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
├── app/
│   ├── page.tsx                    # Landing page with demo overview
│   ├── proposal/[id]/page.tsx      # Customer proposal customization view
│   └── demo/agent-summary/page.tsx # Agent summary view (demo only)
├── types/
│   └── index.ts                    # TypeScript data models
├── data/
│   └── sample-proposal.ts          # Sample Goa trip data
└── docs/
    ├── Triply_Flyo_Aligned_MVP_PRD_v2.docx      # Full product requirements
    ├── Triply_Product_and_Market_Strategy.docx  # Product & market strategy
    ├── DEMO_TALKING_POINTS.md                   # Presentation script for demo
    ├── PRODUCT_POSITIONING.md                   # B2C→B2B positioning explanation
    ├── PRE_DEMO_CHECKLIST.md                    # Complete testing verification
    └── READY_FOR_DEMO.md                        # Demo readiness summary
```

## 🎨 Key Pages

### `/` - Landing Page
Introduction to the prototype with product context and navigation to demo.

### `/proposal/GOA-2026-001` - Customer View
Interactive proposal customization interface where customers can:
- Review trip details and itinerary
- Select from agent-approved alternatives
- See price changes in real-time
- Add optional notes
- Submit customization request

### `/demo/agent-summary` - Agent View (Demo Only)
Shows what the travel agent receives:
- Structured change summary
- Price impact breakdown
- Complete selection details
- Customer notes

## 📋 Data Models

### Proposal
Trip overview including destination, dates, customer info, and base estimate.

### ItineraryItem
Individual components of the trip (accommodation, activities, transport) with day number and description.

### Option
Agent-approved alternatives for each itinerary item with price deltas and descriptions.

### CustomerSubmission
Structured record of customer's selected options, notes, and timestamp.

## 🔮 MVP Scope

### ✅ Included
- Sample proposal with realistic Goa trip data
- Multiple options for hotel and activities
- Real-time price calculation
- Mobile-responsive UI
- Submission confirmation flow
- Demo agent summary view
- Clear disclaimers about sample data

### ❌ Out of Scope
- Live supplier inventory or API integrations
- Payment processing or booking confirmation
- AI-generated itineraries
- Full agent CRM or dashboard
- Authentication or user accounts
- Direct Flyo integration (for discussion/validation first)

## 🎭 Demo Data

All data is **sample only**:
- Fictional Goa trip proposal (Nov 15-17, 2026)
- Representative Indian Rupee (INR) pricing
- Agent name, customer name, dates are illustrative
- No actual booking or payment capability

## 📱 Mobile Support

The app is fully responsive and tested for:
- Mobile phones (portrait and landscape)
- Tablets
- Desktop browsers

## 🚧 Future Integration Considerations

For production deployment:
- Integration with Flyo's workflow (API, webhook, or email)
- Real supplier inventory and availability checking
- Agent authentication and proposal authoring tools
- Multi-currency support
- Booking confirmation and payment processing

## 📝 Product Positioning

This MVP validates whether structured customer customization reduces back-and-forth between agents and customers. It's designed to complement (not replace) existing travel agency tools and workflows.

## 🤝 Questions for Validation

When discussing with Flyo or travel agents:
1. Does Flyo already support customer customization in proposals?
2. Where do change requests currently arrive and how much manual work do they create?
3. Would structured selections be useful?
4. What handoff method fits your workflow (email, WhatsApp, API, webhook)?
5. What outcome matters most (fewer messages, faster approval, higher conversion)?

## 📄 License

This is a prototype/demo project created for discussion purposes.

## 📚 Additional Documentation

For comprehensive project documentation, see the `/docs` folder:
- **Product Requirements:** `Triply_Flyo_Aligned_MVP_PRD_v2.docx`
- **Product & Market Strategy:** `Triply_Product_and_Market_Strategy.docx`
- **Demo Preparation:** `DEMO_TALKING_POINTS.md`, `PRE_DEMO_CHECKLIST.md`
- **Product Positioning:** `PRODUCT_POSITIONING.md`
- **Readiness Summary:** `READY_FOR_DEMO.md`

---

Built with ❤️ as an MVP prototype • October 2026
