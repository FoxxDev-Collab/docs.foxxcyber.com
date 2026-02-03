import ThemedImage from '@theme/ThemedImage';

# Reviewing POA&Ms

The POA&Ms (Plan of Action & Milestones) tab shows the customer's remediation plans for identified compliance gaps. Reviewing POA&Ms helps you understand which controls have known deficiencies and how the customer plans to address them.

---

## POA&Ms Tab Overview

{/* <!-- SCREENSHOT: c3pao-poams-tab — The POA&Ms tab showing the list of all POA&M items with status badges, risk levels, and linked controls --> */}
<ThemedImage
  alt="POA&Ms Tab"
  sources={{
    light: '/img/screenshots/c3pao/poams-tab-light.png',
    dark: '/img/screenshots/c3pao/poams-tab-dark.png',
  }}
/>

---

## POA&M Information

Each POA&M entry includes:

| Field | Description |
|-------|-------------|
| **Title** | Description of the identified weakness |
| **Status** | Current remediation status |
| **Risk Level** | Severity: Critical, High, Moderate, Low |
| **Linked Requirements** | Associated NIST SP 800-171 controls |
| **Target Completion Date** | Planned remediation deadline |
| **Milestones** | Incremental remediation steps with target dates |
| **Responsible Party** | Who is assigned to address this item |

{/* <!-- SCREENSHOT: c3pao-poam-detail — A single POA&M item expanded showing all fields including milestones, linked controls, and responsible party --> */}
<ThemedImage
  alt="POA&M Detail"
  sources={{
    light: '/img/screenshots/c3pao/poam-detail-light.png',
    dark: '/img/screenshots/c3pao/poam-detail-dark.png',
  }}
/>

---

## POA&M Statuses

| Status | Badge | Meaning |
|--------|-------|---------|
| **Open** | 🔴 | Identified but not yet started |
| **In Progress** | 🟡 | Actively being remediated |
| **Completed** | 🟢 | Remediation work is finished |
| **Closed** | ⚪ | Verified and officially closed |
| **Overdue** | 🔴 | Past the target completion date |

---

## Milestone Tracking

Expand any POA&M to view its milestones — incremental steps toward full remediation.

{/* <!-- SCREENSHOT: c3pao-poam-milestones — Expanded milestone view showing multiple milestones with their individual target dates, descriptions, and completion status --> */}
<ThemedImage
  alt="POA&M Milestones"
  sources={{
    light: '/img/screenshots/c3pao/poam-milestones-light.png',
    dark: '/img/screenshots/c3pao/poam-milestones-dark.png',
  }}
/>

Each milestone includes:
- Milestone description
- Target completion date
- Current status
- Completion evidence (if applicable)

---

## POA&M Review Checklist

When evaluating POA&Ms:

- [ ] **Realistic timelines** — Are target dates achievable given the scope of work?
- [ ] **Adequate milestones** — Are there enough intermediate steps to track progress?
- [ ] **Risk alignment** — Does the risk level accurately reflect the severity of the gap?
- [ ] **Coverage** — Do POA&Ms exist for all identified gaps (Not Met controls)?
- [ ] **Responsible parties** — Are specific individuals assigned to each item?
- [ ] **Overdue items** — Flag any POA&Ms past their target date for discussion
- [ ] **Completeness** — Completed POA&Ms should have supporting evidence of remediation

---

## Impact on Assessment

POA&Ms directly affect your assessment:

- Controls with **active POA&Ms** indicate the customer acknowledges a gap and has a remediation plan
- The eMASS export tracks POA&M status alongside requirement determinations
- **CMMC allows some controls to be in POA&M status** at the time of assessment — review current CMMC policy for allowable POA&M thresholds

:::important
The existence of a POA&M does not automatically mean the control is "Not Met." Evaluate whether the POA&M is sufficient and timely as part of your determination.
:::

---

## Next Steps

- [Reviewing Controls](./reviewing-controls) — POA&Ms inform your control-level determinations
- [Assessment Reports](./assessment-reports) — Summarize POA&M findings in your report
- [eMASS Export](./emass-export) — POA&M data is included in the export
