# Triply MVP Demo - Talking Points for Flyo CTO

## Opening (30 seconds)

"Hi Shubham, thanks for taking time to look at this. I want to be upfront about what Triply is and what this MVP demonstrates.

**Original vision:** Triply started as a B2C idea—a modular travel planner where individual travelers choose destinations, accommodation, and activities with transparent pricing.

**This MVP:** I narrowed it to one specific workflow that might fit Flyo's B2B travel-agent context. I'm showing you this to get feedback on whether it's useful, not to claim Flyo has a gap."

---

## The Core Hypothesis (1 minute)

**The Problem I Think Might Exist:**

When a travel agent sends a customer a trip proposal, the customer might want changes:
- "Can we upgrade to a nicer hotel?"
- "Let's skip the heritage tour and do something else"
- "What if we add scuba diving instead of the water sports package?"

**What Might Happen Today:**
- These requests come as WhatsApp messages, emails, or phone calls
- The agent has to interpret the request
- Revise the proposal manually
- Recalculate the price
- Send it back
- Sometimes multiple rounds of back-and-forth

**What This MVP Proposes:**
- Agent prepares a proposal with pre-approved alternative options
- Customer can choose from those alternatives in a shared link
- Price updates live as they make changes
- Customer submits a structured change request
- Agent receives an organized summary instead of scattered messages

---

## Live Demo (2 minutes)

**Step 1: Show the Landing Page**
- Quick scan of the product positioning
- "Here's the context about B2C vs B2B scope"

**Step 2: Open the Proposal**
- "This is a sample 3-day Goa trip"
- "Customer sees dates, itinerary, current estimate"
- Point out the disclaimer about sample data

**Step 3: Customize Options**
- Change hotel: "Let me upgrade to the luxury villa"
- Show price update: "+₹12,000"
- Change activity: "Skip the water sports package"
- Show price update: "-₹8,000, new total ₹49,000"
- Add another: "Upgrade the sunset cruise to premium private"
- Show price update: "+₹8,500, total ₹57,500"

**Step 4: Submit**
- Add a note: "We're celebrating our anniversary, any special arrangements would be great"
- Click submit
- Show confirmation screen

**Step 5: Agent Summary**
- "This is what you as the agent would receive"
- Point out:
  - Clear list of what changed
  - Price impact for each change
  - Total price difference
  - Customer's note
  - Complete selection details

---

## The Key Questions for You (2 minutes)

**I need your help understanding:**

1. **Does Flyo already handle this?**
   - Can customers customize proposals inside Flyo's shareable itineraries?
   - Or do change requests arrive outside the system?

2. **If they come outside, where do they land?**
   - WhatsApp?
   - Email?
   - Phone calls?
   - Flyo's internal workflow?

3. **How much work does a typical change request create?**
   - Does the agent need to interpret what the customer wants?
   - Manually update the proposal?
   - Recalculate pricing?

4. **Would structured selections help?**
   - Or is the current workflow already efficient?

5. **If this were useful, how would it fit Flyo's architecture?**
   - API handoff?
   - Webhook?
   - Email notification?
   - Something else?

6. **What outcome matters most to your agents?**
   - Fewer messages?
   - Faster proposal confirmation?
   - Higher booking conversion?
   - Better upsell attachment rate?

---

## What I'm NOT Claiming

**I'm not saying:**
- Flyo has a product gap (I don't know yet)
- This is production-ready (it's a prototype with sample data)
- You need another dashboard (designed to integrate with existing workflow)
- This is the most important problem (that's what I'm here to learn)

**I am saying:**
- This workflow might reduce friction
- I want to validate whether the problem exists
- I'm open to "Flyo already does this" feedback
- I want to understand where the real pain points are

---

## What's Deliberately Out of Scope

**I didn't build:**
- AI itinerary generation
- Live supplier APIs (hotels, flights, activities)
- Payment processing
- Authentication system
- Full agent CRM
- Email/WhatsApp integration (yet)

**Why not?**
- These don't answer the core question: "Is customer customization a friction point?"
- Adding them creates complexity without validation
- Better to test the interaction first, infrastructure later

---

## Technical Details (If Asked)

**Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Local sample data (3-day Goa trip)

**Data Persistence:**
- Currently uses sessionStorage (demo only)
- Submissions lost on refresh (by design for prototype)
- Production would integrate with Flyo's backend

**Mobile:**
- Fully responsive
- Touch-optimized for phones and tablets

**Integration Ready:**
- Modular architecture
- Can add API endpoints
- Webhook-ready submission flow

---

## Possible Outcomes & Next Steps

**Outcome 1: "Flyo already handles this via X"**
- Response: "Great! How does it work? Are agents happy with it?"
- Next step: Ask about other pain points

**Outcome 2: "This isn't in Flyo, but agents do complain about change requests"**
- Response: "Interesting! Can you tell me more about the complaints?"
- Next step: Discuss integration path and priority

**Outcome 3: "Not a priority compared to Y"**
- Response: "What is Y? Would it make sense to explore that instead?"
- Next step: Pivot or park Triply

**Outcome 4: "Show me how this would integrate with Flyo"**
- Response: Technical discussion about APIs, webhooks, data flow
- Next step: Prototype integration layer

---

## Questions I Want Answered Today

**Primary:**
1. Does this problem exist for travel agents using Flyo?
2. If yes, how big is it? (Daily annoyance or occasional friction?)
3. What would reduce friction more: customer customization or something else?

**Secondary:**
1. How does Flyo think about customer-facing vs agent-facing features?
2. What's Flyo's approach to working with existing systems vs building new dashboards?
3. Are there other B2C elements of Triply that might be more relevant?

**Tactical:**
1. If we move forward, what's the integration path?
2. Who would I talk to next (product, engineering, pilot agent)?
3. What would a proof-of-concept look like?

---

## Closing (30 seconds)

"That's the demo. The most valuable thing you can tell me is whether I'm solving a real problem or building something agents don't need. If Flyo already handles this, that's useful feedback. If there's friction here, I want to understand it. What are your thoughts?"

---

## Backup: If Asked About Business Model

**Not relevant for this conversation, but if pressed:**

**B2C Path:**
- Subscription for travelers (modular trip planning tool)
- Commission from suppliers (hotels, activities)
- Freemium model (basic free, premium features paid)

**B2B Path (Flyo-Aligned):**
- White-label for agencies (customer-facing customization layer)
- Per-agent subscription
- Per-proposal fee
- Integration fee + revenue share

**Current Focus:**
- Validation first, business model later
- Want to understand what agents and customers need
- Open to partnership, licensing, or acquisition discussion if there's fit

---

*Prepared for demo to Shubham (Flyo CTO) - October 5, 2026*
