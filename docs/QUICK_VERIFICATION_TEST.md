# Quick Verification Test (5 Minutes)

Run this test right before showing to Shubham to ensure everything works.

---

## Test Scenario: "Anniversary Trip Upgrade"

**Story:** Customer wants to upgrade their Goa anniversary trip.

---

### Step 1: Landing Page
- [ ] Open http://localhost:3000
- [ ] See "Triply" hero text
- [ ] See "MVP Prototype • Demo Only" badge
- [ ] Read "Original Vision" and "This MVP" sections
- [ ] Click "View Demo Proposal" button

**Expected:** Smooth navigation to proposal page

---

### Step 2: Initial Proposal Review
- [ ] See "Goa Beach Escape" title
- [ ] See dates: "15 Nov, 2026 - 17 Nov, 2026"
- [ ] See "Prepared by Priya Sharma"
- [ ] See amber warning: "Demo Proposal with Sample Data"
- [ ] Scroll to bottom
- [ ] See "Estimated Total" = **₹45,000**

**Expected:** All default selections, ₹45,000 total

---

### Step 3: Make First Change (Upgrade Hotel)
- [ ] Scroll to Day 1 - "Beachfront Resort"
- [ ] See 3 radio button options
- [ ] "Standard Beachfront Resort" is selected (₹0)
- [ ] Click "Luxury Beach Villa" (+₹12,000)
- [ ] Scroll to price summary
- [ ] See new line item: "Luxury Beach Villa +₹12,000"
- [ ] See "Estimated Total" = **₹57,000**

**Expected:** Total increases from ₹45,000 to ₹57,000

---

### Step 4: Make Second Change (Skip Activity)
- [ ] Scroll to Day 1 - "Water Sports Package"
- [ ] Click "Skip Water Sports" (-₹8,000)
- [ ] Scroll to price summary
- [ ] See line item: "Skip Water Sports -₹8,000" (green text)
- [ ] See "Estimated Total" = **₹49,000**

**Calculation Check:**
- Started: ₹45,000
- Add villa: +₹12,000 = ₹57,000
- Skip sports: -₹8,000 = ₹49,000 ✓

**Expected:** Total is now ₹49,000

---

### Step 5: Make Third Change (Upgrade Cruise)
- [ ] Scroll to Day 2 - "Sunset Dolphin Cruise"
- [ ] Click "Premium Private Cruise" (+₹8,500)
- [ ] Scroll to price summary
- [ ] See three line items:
  - Luxury Beach Villa: +₹12,000
  - Skip Water Sports: -₹8,000 (green)
  - Premium Private Cruise: +₹8,500
- [ ] See "Estimated Total" = **₹57,500**

**Calculation Check:**
- Started: ₹45,000
- Villa: +₹12,000
- Skip sports: -₹8,000
- Cruise: +₹8,500
- Total: 45,000 + 12,000 - 8,000 + 8,500 = **₹57,500** ✓

**Expected:** Total is ₹57,500 with three changes shown

---

### Step 6: Add Customer Note
- [ ] Scroll to "Additional Notes" section
- [ ] Click in text area
- [ ] Type: "It's our 5th anniversary! Any special arrangements would be wonderful."
- [ ] See text appear

**Expected:** Text area accepts input

---

### Step 7: Submit Request
- [ ] Scroll to bottom
- [ ] Click "Send Customization Request" button
- [ ] Wait for page to change
- [ ] See green checkmark icon
- [ ] See "Request Sent Successfully!" heading
- [ ] See "Your estimated total: ₹57,500"
- [ ] See "* Final price subject to availability confirmation"
- [ ] See two buttons: "Back to Proposal" and "View Agent Summary"

**Expected:** Confirmation screen with correct total

---

### Step 8: View Agent Summary
- [ ] Click "View Agent Summary →" button
- [ ] See "Agent Summary View" page load
- [ ] See blue notice: "Demo Agent Dashboard"
- [ ] See "Customization Request" card

**Expected:** Navigation to agent summary

---

### Step 9: Verify Agent Summary Details
- [ ] See "Proposal: GOA-2026-001"
- [ ] See "Customer: Rahul & Family"
- [ ] See "Status: Pending Review"
- [ ] Scroll to "Requested Changes"
- [ ] See 3 change cards:

**Change 1: Beachfront Resort**
- [ ] Original: "Standard Beachfront Resort"
- [ ] Requested: "Luxury Beach Villa"
- [ ] Price: **+₹12,000** (orange)

**Change 2: Water Sports Package**
- [ ] Original: "Full Water Sports Package"
- [ ] Requested: "Skip Water Sports"
- [ ] Price: **-₹8,000** (green)

**Change 3: Sunset Dolphin Cruise**
- [ ] Original: "Standard Sunset Cruise"
- [ ] Requested: "Premium Private Cruise"
- [ ] Price: **+₹8,500** (orange)

**Expected:** All three changes shown with correct from/to and price impact

---

### Step 10: Verify Price Impact Summary
- [ ] See "Original Estimate: ₹45,000"
- [ ] See "Total Changes: +₹12,500"
  - (Calculation: +12,000 - 8,000 + 8,500 = +12,500)
- [ ] See "New Estimated Total: ₹57,500"

**Expected:** Math is correct

---

### Step 11: Verify Customer Note
- [ ] Scroll to "Customer Note" section
- [ ] See text: "It's our 5th anniversary! Any special arrangements would be wonderful."

**Expected:** Note text matches what was typed

---

### Step 12: Verify Complete Selection Details
- [ ] Scroll to "Complete Selection Details"
- [ ] See all 6 items listed:
  1. Beachfront Resort → Luxury Beach Villa (+₹12,000)
  2. Water Sports Package → Skip Water Sports (-₹8,000)
  3. Old Goa Heritage Tour → Standard Heritage Tour (Included)
  4. Sunset Dolphin Cruise → Premium Private Cruise (+₹8,500)
  5. Spice Plantation Visit → Standard Plantation Tour (Included)
  6. Airport Transfers → Private AC Car (Included)

**Expected:** All items present, changes highlighted, unchanged items show "Included"

---

## Final Checks

### Navigation
- [ ] Click "← Back to Proposal" button
- [ ] Returns to proposal page
- [ ] Selections are reset to defaults
- [ ] Total is back to ₹45,000

**Expected:** Fresh proposal view

### Refresh Test
- [ ] On agent summary page, click browser refresh
- [ ] See "No Submission Found" message
- [ ] See explanation: "...stored in sessionStorage and will be cleared on browser refresh..."
- [ ] See "Go to Demo Proposal" button

**Expected:** Clean error state with explanation

---

## If Any Step Fails

**Stop and fix before demo!**

Common issues:
- Prices not updating → Check calculateEstimate function
- Agent summary wrong → Check getChangeSummary calculation
- Submission not saving → Check sessionStorage in browser DevTools
- Page not loading → Check dev server is running

---

## Pass Criteria

All checkboxes checked = **READY FOR DEMO** ✅

Any failures = **FIX BEFORE DEMO** ⚠️

---

## Time Required

- First run: 5 minutes
- Subsequent runs: 2 minutes

**Run this test:**
1. The morning of the demo
2. Right before showing Shubham (if possible)
3. After any code changes

---

*Quick reference for pre-demo verification*
