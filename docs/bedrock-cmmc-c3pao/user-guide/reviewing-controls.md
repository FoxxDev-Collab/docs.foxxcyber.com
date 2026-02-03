import ThemedImage from '@theme/ThemedImage';

# Reviewing Controls

The Controls tab is where you assess each of the 110 NIST SP 800-171 requirements. This is the core assessment activity — recording determinations, assessment methods, findings, and recommendations for every requirement.

---

## Controls Overview

Navigate to the **Controls** tab on any active engagement to see all requirements. This is the place for Assessors to view the status of their assessment in real time as they mark the status of controls.

{/* <!-- SCREENSHOT: c3pao-controls-tab-overview — The Controls tab showing the full controls table with columns for ID, title, family, customer status, and assessor determination --> */}
<ThemedImage
  alt="Controls Tab"
  sources={{
    light: '/img/screenshots/c3pao/controls-tab-light.png',
    dark: '/img/screenshots/c3pao/controls-tab-dark.png',
  }}
/>

### Controls Table

Each row in the controls table displays:

| Column | Description |
|--------|-------------|
| **Requirement ID** | NIST SP 800-171 identifier (e.g., 3.1.1) |
| **CMMC ID** | CMMC format identifier (e.g., AC.L2-3.1.1) |
| **Title** | Brief requirement name |
| **Family** | Control family (AC, AU, CM, etc.) |
| **Customer Status** | The customer's self-assessment status |
| **Assessor Determination** | Your recorded determination |

---

## Filtering Controls

Use the filter controls to focus your review on specific subsets of requirements.

| Filter | Options |
|--------|---------|
| **By Status** | Met, Not Met, Not Applicable, Not Assessed |
| **By Family** | AC, AT, AU, CM, IA, IR, MA, MP, PE, PS, RA, SA, SC, SI |
| **Search** | Free-text search on requirement ID or title |

:::tip
Start your review by filtering to **Not Assessed** to see which controls still need your determination. As you work through them, switch to **Not Met** to focus on gap areas.
:::

---

## Control Families Reference

| Code | Family Name | # of Controls |
|------|-------------|---------------|
| AC | Access Control | 22 |
| AT | Awareness & Training | 3 |
| AU | Audit & Accountability | 9 |
| CM | Configuration Management | 9 |
| IA | Identification & Authentication | 11 |
| IR | Incident Response | 3 |
| MA | Maintenance | 6 |
| MP | Media Protection | 8 |
| PE | Physical Protection | 6 |
| PS | Personnel Security | 2 |
| RA | Risk Assessment | 3 |
| SA | System & Services Acquisition | 4 |
| SC | System & Communications Protection | 16 |
| SI | System & Information Integrity | 7 |

---

## Assessing a Control

To view the entire control, click the "Assess" button on the row to open the full control detail view. This will open up the details with all objectives for that control.

{/* <!-- SCREENSHOT: c3pao-assess-button — The full control detail page showing the requirement text, customer implementation, assessment form, and linked evidence --> */}
<ThemedImage
  alt="Control Assess Button"
  sources={{
    light: '/img/screenshots/c3pao/assess-button-light.png',
    dark: '/img/screenshots/c3pao/assess-button-dark.png',
  }}
/>

Now you will see the view for all Assessors should dream of. Click on the objective/drop down-tab to view the details.

{/* <!-- SCREENSHOT: c3pao-control-detail-page — The full control detail page showing the requirement text, customer implementation, assessment form, and linked evidence --> */}
<ThemedImage
  alt="Control Detail Page"
  sources={{
    light: '/img/screenshots/c3pao/control-detail-page-light.png',
    dark: '/img/screenshots/c3pao/control-detail-page-dark.png',
  }}
/>


### Recording Your Determination

The assessment form allows you to record your findings for each control:

{/* <!-- SCREENSHOT: c3pao-assessment-form — The assessment form showing determination dropdown, assessment methods checkboxes, and findings text areas --> */}
<ThemedImage
  alt="Assessment Form"
  sources={{
    light: '/img/screenshots/c3pao/assessment-form-light.png',
    dark: '/img/screenshots/c3pao/assessment-form-dark.png',
  }}
/>

#### Determination

Select your assessment result:

| Determination | When to Use |
|--------------|-------------|
| **Met** | The requirement is fully satisfied |
| **Not Met** | Gaps exist that prevent compliance |
| **Not Applicable** | The requirement does not apply to this system |
| **Not Assessed** | You haven't reviewed this control yet (default) |

#### Assessment Methods

Select all methods used to evaluate this control:

| Method | Description |
|--------|-------------|
| **Interview** | Discussion with customer personnel about the control implementation |
| **Examine** | Review of documentation, policies, configurations, or evidence |
| **Test** | Hands-on verification or testing of the control implementation |

#### Findings Details

| Field | Description |
|-------|-------------|
| **Finding Narrative** | Detailed description of what you found during assessment |
| **Objective Evidence** | Specific evidence that supports your determination |
| **Deficiencies** | Identified gaps or weaknesses (for Not Met controls) |
| **Recommendations** | Suggested remediation steps for the customer |
| **Risk Level** | Severity of any finding: Critical, High, Moderate, Low |

{/* <!-- SCREENSHOT: c3pao-findings-fields — Close-up of the findings text areas (narrative, evidence, deficiencies, recommendations) and risk level selector --> */}
<ThemedImage
  alt="Findings Fields"
  sources={{
    light: '/img/screenshots/c3pao/findings-fields-light.png',
    dark: '/img/screenshots/c3pao/findings-fields-dark.png',
  }}
/>

### Saving Findings

Click **Save Finding** to persist your assessment. The platform uses version control to prevent conflicts when multiple assessors are working simultaneously.

---

## Navigating Between Controls

Use the navigation controls on the control detail page to move between requirements without returning to the controls list:

- **Previous/Next arrows** — Move sequentially through controls
- **Back to Controls** — Return to the filtered controls list
- **Family navigation** — Jump to the next control in the same family

---

## Assessor Control Cards

In the assessment view, controls are displayed as cards with visual indicators for their assessment status.

Each card shows:
- Requirement ID and title
- Family badge
- Current determination (color-coded)
- Whether findings have been recorded
- Assessment methods used

---

## Next Steps

- [Reviewing Documents](./reviewing-documents) — Cross-reference SSP claims with your findings
- [Reviewing Evidence](./reviewing-evidence) — Verify evidence supports control implementations
- [Assessment Reports](./assessment-reports) — Your control findings feed directly into the report
