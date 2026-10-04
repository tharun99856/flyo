# Pre-Demo Verification Checklist

## Manual Testing Completed Before Showing to Flyo CTO

### ✅ 1. Complete Demo Flow (Start to Finish)

**Steps:**
1. Open http://localhost:3000
2. Read landing page - verify product positioning is clear
3. Click "View Demo Proposal"
4. Review Goa proposal details (dates, itinerary, pricing)
5. Change multiple options (see test scenarios below)
6. Add a note in the text area
7. Click "Send Customization Request"
8. Verify submission confirmation screen
9. Click "View Agent Summary"
10. Review structured change summary

**Expected Result:** Smooth flow from landing → customization → submission → agent view

---

### ✅ 2. Price Calculation Verification

**Base Configuration (All Defaults):**
- Standard Beachfront Resort: ₹0 delta
- Full Water Sports Package: ₹0 delta
- Standard Heritage Tour: ₹0 delta
- Standard Sunset Cruise: ₹0 delta
- Standard Plantation Tour: ₹0 delta
- Private AC Car: ₹0 delta
- **Total: ₹45,000** (base estimate)

**Test Scenario A: Single Upgrade**
- Change: Accommodation → Luxury Beach Villa (+₹12,000)
- Expected Total: ₹57,000
- Verify: Price summary shows +₹12,000 line item

**Test Scenario B: Downgrade**
- Change: Accommodation → Budget Beach Hotel (-₹6,000)
- Expected Total: ₹39,000
- Verify: Price summary shows -₹6,000 in green

**Test Scenario C: Multiple Changes**
- Change: Accommodation → Luxury Beach Villa (+₹12,000)
- Change: Water Sports → Skip Water Sports (-₹8,000)
- Change: Dolphin Cruise → Premium Private Cruise (+₹8,500)
- Expected Total: ₹57,500 (45,000 + 12,000 - 8,000 + 8,500)
- Verify: All three changes show in price summary

**Test Scenario D: Repeated Changes**
- Start: Change accommodation to Luxury (+₹12,000) → Total: ₹57,000
- Then: Change back to Standard (₹0 delta) → Total: ₹45,000
- Then: Change to Budget (-₹6,000) → Total: ₹39,000
- Verify: Price updates correctly each time

**Test Scenario E: Skip Activity**
- Change: Heritage Tour → Skip Heritage Tour (-₹4,500)
- Expected Total: ₹40,500
- Verify: Shows savings in green

---

### ✅ 3. Agent Summary Handoff Verification

**Test with Scenario C (Multiple Changes):**

**Expected in Agent Summary:**
1. **Requested Changes Section:**
   - Shows 3 change cards:
     - Beachfront Resort: Standard → Luxury Villa (+₹12,000)
     - Water Sports: Full Package → Skip (-₹8,000)
     - Dolphin Cruise: Standard → Premium Private (+₹8,500)

2. **Price Impact:**
   - Original Estimate: ₹45,000
   - Total Changes: +₹12,500
   - New Estimated Total: ₹57,500

3. **Customer Note:**
   - Displays the note if provided
   - Hidden section if note is empty

4. **Complete Selection Details:**
   - All 6 items listed with selected options
   - Changed items show price delta
   - Unchanged items show "Included"

**Data Persistence Test:**
- Submit a request from proposal page
- Navigate to agent summary → Should see data ✓
- Refresh the browser → Data lost (sessionStorage limitation) - **Expected behavior for demo**
- Note displayed on empty state explains this

---

### ✅ 4. Mobile & Edge Cases

**Mobile Viewport (375px width):**
- [ ] Landing page: Hero text readable, buttons stack vertically
- [ ] Proposal page: Itinerary cards don't overflow
- [ ] Option radio buttons: Touch targets large enough
- [ ] Price summary: Doesn't break layout
- [ ] Submit button: Full width, easy to tap
- [ ] Agent summary: Change cards readable, data doesn't truncate

**Error/Edge States:**
- [ ] Empty note submission: Works fine (note is optional)
- [ ] Repeated submissions: Can click back and submit again
- [ ] No changes made: Agent summary shows "No changes requested"
- [ ] Direct navigation to agent summary (no data): Shows helpful message
- [ ] Browser back button: Returns to proposal correctly
- [ ] Browser forward button: Navigation works

**Browser Refresh Behavior:**
- Proposal page: Resets to defaults (stateless) ✓
- After submission: Loses data, shows confirmation screen (by design)
- Agent summary: Shows "No submission found" with explanation

---

### ✅ 5. Product Positioning (Explicit on Landing Page)

**Key Messages to Verify:**

1. **B2C Origin Acknowledged:**
   - "Original Vision" section clearly states Triply began as a B2C modular travel planner
   - Explains the customer-choice and transparent-pricing concept

2. **MVP Scope Clear:**
   - "This MVP" section explains the narrowing to B2B agent workflow
   - States this is a discussion prototype for exploring fit with Flyo

3. **Demo Limitations:**
   - Blue notice box on landing page states all data is sample
   - Mentions final prices require agent confirmation

4. **Not Positioning as Complete Product:**
   - Uses "MVP Prototype • Demo Only" badge
   - "Demo Scenario" framing, not "Product Features"

5. **Proposal Page Disclaimers:**
   - Amber notice: "Demo Proposal with Sample Data"
   - Bottom of price summary: "* This is an estimate..."
   - Submission confirmation: "subject to availability confirmation"

6. **Agent View Disclaimer:**
   - Blue notice: "Demo Agent Dashboard"
   - Explains this would integrate with existing workflow in production

---

### ✅ 6. Key Question for Flyo (Prepared)

**Primary Question:**
"Does Flyo already support a workflow where customers can customize agent-proposed itineraries by choosing from pre-approved alternatives, and where do customization requests currently arrive?"

**Follow-up Questions:**
1. How do customers typically request changes to proposals today?
2. How much manual interpretation does each change request require?
3. Would structured customer selections reduce friction?
4. What handoff mechanism fits your architecture (API, webhook, email, WhatsApp)?
5. What outcome matters most: fewer messages, faster confirmation, higher conversion, better upsell?

**Key Point to Emphasize:**
"This isn't a claim that Flyo has a gap. I built this to validate whether the workflow is useful. If Flyo already handles this well, that's valuable feedback. If there's friction, I want to understand where."

---

## What We're NOT Building (Deliberately)

- ❌ AI itinerary generation
- ❌ Real supplier APIs (flights, hotels, activities)
- ❌ Payment processing or booking confirmation
- ❌ Authentication system
- ❌ Full agent CRM or proposal authoring dashboard
- ❌ Multi-currency or multi-language support
- ❌ Email/WhatsApp integration (yet)

**Rationale:** These don't strengthen the core hypothesis. They add complexity and bugs without answering the validation question.

---

## What Makes This Valuable to Shubham?

**Not:**
- The gradient backgrounds
- The number of pages
- Using Next.js and TypeScript

**But:**
1. **Clear Problem Hypothesis:**
   - Travel agent sends proposal
   - Customer wants changes
   - Changes arrive as scattered messages
   - Agent must interpret, revise, recalculate

2. **Proposed Solution:**
   - Agent-approved options only
   - Customer sees price impact immediately
   - Structured change request eliminates interpretation
   - Agent receives organized summary

3. **Integration Awareness:**
   - Not proposing another dashboard
   - Designed to fit existing workflow
   - Modular handoff (API/webhook/email)

4. **Validation-First Approach:**
   - Built to test, not to sell
   - Open to "this already exists" feedback
   - Focused on one specific workflow improvement

---

## Demo Delivery Tips

1. **Start with Context (1 min):**
   - "Triply started as B2C travel planning"
   - "I narrowed it to this one workflow for agents"
   - "I want your feedback on whether this is useful"

2. **Show the Flow (2 min):**
   - Live demo: change options, see price update, submit
   - Show agent summary: structured vs scattered messages

3. **Ask the Question (2 min):**
   - Does Flyo handle this?
   - Where's the friction today?
   - Would this reduce agent workload?

4. **Listen More Than Talk:**
   - If Shubham says "we already do this," ask how
   - If he says "interesting," ask what's missing
   - If he says "not a priority," ask what is

---

## Success Metrics

**Good outcome:** Clear answer to "Is customer customization a real problem for travel agents using Flyo?"

**Great outcome:** Shubham says "This workflow isn't in Flyo yet, and agents complain about change requests."

**Also good outcome:** Shubham says "Flyo already handles this via X, but here's another pain point worth exploring."

**Best outcome:** Specific feedback on what to build next or how to integrate with Flyo's architecture.

---

*Last updated: October 5, 2026*
