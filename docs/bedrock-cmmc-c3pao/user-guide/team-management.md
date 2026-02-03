import ThemedImage from '@theme/ThemedImage';

# Team Management

Manage your C3PAO organization's assessors, track credentials, assign team members to engagements, and monitor workload distribution.

---

## Team Page

Navigate to **Team** from the top navigation bar to view and manage your organization's assessors.

{/* <!-- SCREENSHOT: c3pao-team-page — The full team management page showing team statistics at the top and the team member table below --> */}
<ThemedImage
  alt="Team Page"
  sources={{
    light: '/img/screenshots/c3pao/team-page-light.png',
    dark: '/img/screenshots/c3pao/team-page-dark.png',
  }}
/>

### Team Statistics

| Metric | Description |
|--------|-------------|
| **Team Size** | Total team members |
| **Lead Assessors** | Members with lead assessor designation |
| **Active Members** | Members with active status |
| **Total Engagements** | Combined engagement assignments across the team |

{/* <!-- SCREENSHOT: c3pao-team-stats — Close-up of the team statistics cards at the top of the page --> */}
<ThemedImage
  alt="Team Statistics"
  sources={{
    light: '/img/screenshots/c3pao/team-stats-light.png',
    dark: '/img/screenshots/c3pao/team-stats-dark.png',
  }}
/>

---

## Team Member Table

The table displays all team members with key information:

| Column | Description |
|--------|-------------|
| **Name** | Team member's full name |
| **Email** | Contact email / login address |
| **Role** | Job title or position |
| **Credentials** | CCA and/or CCP certification numbers |
| **Engagements** | Number of assigned assessments |
| **Status** | Active, Inactive, or Pending |
| **Last Active** | Most recent platform login |

{/* <!-- SCREENSHOT: c3pao-team-table — The team member table showing several members with all columns visible --> */}
<ThemedImage
  alt="Team Table"
  sources={{
    light: '/img/screenshots/c3pao/team-table-light.png',
    dark: '/img/screenshots/c3pao/team-table-dark.png',
  }}
/>

---

## Adding Team Members

Click **Add Team Member** to invite a new assessor to your organization.

{/* <!-- SCREENSHOT: c3pao-add-member-dialog — The Add Team Member dialog with all fields: name, email, job title, CCA/CCP numbers, lead assessor toggle --> */}
<ThemedImage
  alt="Add Team Member"
  sources={{
    light: '/img/screenshots/c3pao/add-member-dialog-light.png',
    dark: '/img/screenshots/c3pao/add-member-dialog-dark.png',
  }}
/>

### Required Information

| Field | Description |
|-------|-------------|
| **Name** | Full name |
| **Email** | Login email address |
| **Job Title** | Position or role |

### Credential Fields

| Field | Description |
|-------|-------------|
| **CCA Number** | Certified CMMC Assessor number |
| **CCP Number** | Certified CMMC Professional number |
| **Lead Assessor** | Toggle to designate as a lead assessor |

:::note
Only **Lead Assessors** can add or edit team members.
:::

---

## Editing Team Members

Click the **Edit** icon on any team member row to modify their details.

{/* <!-- SCREENSHOT: c3pao-edit-member-dialog — The Edit Team Member dialog showing pre-filled fields with save/cancel buttons --> */}
<ThemedImage
  alt="Edit Team Member"
  sources={{
    light: '/img/screenshots/c3pao/edit-member-dialog-light.png',
    dark: '/img/screenshots/c3pao/edit-member-dialog-dark.png',
  }}
/>

You can update:
- Name and contact information
- Job title and role
- CCA/CCP credential numbers
- Lead assessor designation
- Member status (Active, Inactive)

---

## Workload Dashboard

Navigate to **Workload** from the top navigation bar to view assessment distribution across your team.

{/* <!-- SCREENSHOT: c3pao-workload-dashboard — The full workload dashboard showing team member workload visualization, engagement distribution, and concurrent assessment counts --> */}
<ThemedImage
  alt="Workload Dashboard"
  sources={{
    light: '/img/screenshots/c3pao/workload-dashboard-light.png',
    dark: '/img/screenshots/c3pao/workload-dashboard-dark.png',
  }}
/>

The workload dashboard helps you:

- **Monitor distribution** — See how assessments are spread across team members
- **Track concurrent assessments** — View how many active assessments each member has
- **Plan assignments** — Identify team members with capacity for new engagements
- **Balance workload** — Ensure no single assessor is overloaded

{/* <!-- SCREENSHOT: c3pao-workload-chart — The workload visualization chart/graph showing assessment distribution per team member --> */}
<ThemedImage
  alt="Workload Chart"
  sources={{
    light: '/img/screenshots/c3pao/workload-chart-light.png',
    dark: '/img/screenshots/c3pao/workload-chart-dark.png',
  }}
/>

### Workload Metrics

| Metric | Description |
|--------|-------------|
| **Active Assessments** | Number of in-progress engagements per member |
| **Total Assigned** | All engagements (active + completed) per member |
| **Availability** | Whether the member has capacity for new work |

---

## Engagement Assignment

Assign team members to specific engagements from either the engagement detail page or the team management page.

{/* <!-- SCREENSHOT: c3pao-team-assignment-dialog — The team assignment dialog showing the list of team members with checkboxes and the lead assessor selector --> */}
<ThemedImage
  alt="Team Assignment"
  sources={{
    light: '/img/screenshots/c3pao/team-assignment-dialog-light.png',
    dark: '/img/screenshots/c3pao/team-assignment-dialog-dark.png',
  }}
/>

### Assigning a Lead Assessor

Each engagement requires a designated lead assessor who is responsible for:
- Overseeing the assessment process
- Recording the final pass/fail determination
- Approving and delivering the assessment report
- Signing off on findings

### Assigning Supporting Assessors

Additional team members can be assigned to assist with the assessment. All assigned members can:
- View engagement details and customer data
- Record control-level findings
- Add assessor notes
- Review evidence and documents

---

## Next Steps

- [Managing Engagements](./managing-engagements) — Assign team members when accepting engagements
- [Organization Profile](./organization-profile) — Manage organization-level settings and credentials
