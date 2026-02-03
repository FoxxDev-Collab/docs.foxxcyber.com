import ThemedImage from '@theme/ThemedImage';

# Managing Engagements

Engagements represent assessment relationships between your C3PAO organization and customers seeking CMMC certification. This guide covers how to view, filter, and manage all your engagements.

---

## Viewing All Engagements

Navigate to **Engagements** from the top navigation bar to see all customer assessment requests in one place.

{/* <!-- SCREENSHOT: c3pao-engagements-list — Full engagements list page showing the table with org names, package names, status badges, CMMC levels, and dates --> */}
<ThemedImage
  alt="Engagements List"
  sources={{
    light: '/img/screenshots/c3pao/engagements-list-light.png',
    dark: '/img/screenshots/c3pao/engagements-list-dark.png',
  }}
/>

Each engagement row displays:

| Column | Description |
|--------|-------------|
| **Organization** | Customer's company name |
| **Package** | System/package being assessed |
| **CMMC Level** | Target certification level |
| **Status** | Current engagement status (color-coded badge) |
| **Request Date** | When the customer submitted the request |
| **Lead Assessor** | Assigned lead assessor (if any) |

---

## Filtering & Searching

Use the filter controls at the top of the engagements list to find specific engagements.

{/* <!-- SCREENSHOT: c3pao-engagement-filters — The filter bar showing search input, status dropdown, and any other filter options --> */}
<ThemedImage
  alt="Engagement Filters"
  sources={{
    light: '/img/screenshots/c3pao/engagement-filters-light.png',
    dark: '/img/screenshots/c3pao/engagement-filters-dark.png',
  }}
/>

- **Search** — Filter by organization name or package name
- **Status Filter** — Show only engagements with a specific status

---

## Engagement Statuses

Engagements progress through the following statuses:

| Status | Badge | Description | Your Action |
|--------|-------|-------------|-------------|
| **Introduced** | 🔵 | Initial contact established | Await formal request |
| **Acknowledged** | 🔵 | Customer has confirmed interest | Await formal request |
| **Requested** | 🟡 | Customer submitted assessment request | Review and accept/decline |
| **Pending** | 🟡 | Under review by your organization | Finalize your decision |
| **Accepted** | 🟢 | You've agreed to perform the assessment | Start assessment when ready |
| **In Progress** | 🟢 | Assessment is actively underway | Complete the review |
| **Completed** | ⚪ | Assessment finished and results recorded | None — archived |
| **Cancelled** | 🔴 | Engagement was cancelled | None — archived |

---

## Accepting Assessment Requests

### Step 1: Review the Request

Click on a **Requested** engagement to open the detail view. Before you have full access, you'll see a limited view with key information about the request.

{/* <!-- SCREENSHOT: c3pao-limited-engagement — The limited/pre-access engagement view showing org info, package details, and readiness indicators --> */}
<ThemedImage
  alt="Limited Engagement View"
  sources={{
    light: '/img/screenshots/c3pao/limited-engagement-light.png',
    dark: '/img/screenshots/c3pao/limited-engagement-dark.png',
  }}
/>

Review the following before accepting:

| Information | What to Check |
|-------------|---------------|
| **Organization** | Customer's company name and contact info |
| **Package Name** | System being assessed |
| **Target Level** | CMMC level requested — ensure you're authorized |
| **Customer Notes** | Additional context or urgency notes |
| **Request Date** | When the request was submitted |

### Step 2: Evaluate Readiness

Assess the customer's preparation level:

- How many controls have they self-assessed?
- How many evidence files have they uploaded?
- What is their SSP completion status?
- Do they have open POA&Ms?

### Step 3: Accept or Decline

Click **Accept Request** to proceed, or decline if the engagement isn't a good fit.

{/* <!-- SCREENSHOT: c3pao-accept-decline — The accept/decline buttons on the engagement request view --> */}
<ThemedImage
  alt="Accept or Decline"
  sources={{
    light: '/img/screenshots/c3pao/accept-decline-light.png',
    dark: '/img/screenshots/c3pao/accept-decline-dark.png',
  }}
/>

:::note
Once accepted, the customer is notified and the engagement status changes to **Accepted**. You can then assign a lead assessor and start the assessment when ready.
:::

---

## Engagement Access Levels

Your access to customer data changes based on engagement status:

| Access Level | Statuses | What You Can Do |
|-------------|----------|-----------------|
| **No Access** | Introduced, Acknowledged, Cancelled | View basic engagement info only |
| **Read Only** | Requested, Pending, Accepted | View customer data (controls, evidence, SSP) |
| **Full Assess** | In Progress, Completed | Full assessment capabilities — record findings, generate reports |

---

## Assigning a Lead Assessor

After accepting an engagement, assign a lead assessor from your team.

{/* <!-- SCREENSHOT: c3pao-assign-lead — The team assignment dialog/dropdown for selecting a lead assessor on an engagement --> */}
<ThemedImage
  alt="Assign Lead Assessor"
  sources={{
    light: '/img/screenshots/c3pao/assign-lead-light.png',
    dark: '/img/screenshots/c3pao/assign-lead-dark.png',
  }}
/>

The lead assessor is responsible for:
- Overseeing the assessment process
- Recording the final pass/fail determination
- Signing off on findings and reports

---

## Assigning Team Members

You can assign additional team members to support the assessment.

{/* <!-- SCREENSHOT: c3pao-engagement-team-card — The engagement team card showing assigned lead and team members --> */}
<ThemedImage
  alt="Engagement Team"
  sources={{
    light: '/img/screenshots/c3pao/engagement-team-card-light.png',
    dark: '/img/screenshots/c3pao/engagement-team-card-dark.png',
  }}
/>

---

## Next Steps

- [Performing Assessments](./performing-assessments) — Start the assessment and conduct your review
- [Team Management](./team-management) — Manage your assessors and assignments
