import ThemedImage from '@theme/ThemedImage';

# Assessment Reports

The Report tab provides a built-in report editor for creating your formal assessment report. Reports are structured with standard sections and can be auto-populated from your control findings.

---

## Accessing the Report Editor

Navigate to the **Report** tab on an active engagement to open the assessment report editor.

{/* <!-- SCREENSHOT: c3pao-report-editor-overview — The full report editor page showing the section navigation on the left and the active section editor on the right --> */}
<ThemedImage
  alt="Report Editor"
  sources={{
    light: '/img/screenshots/c3pao/report-editor-light.png',
    dark: '/img/screenshots/c3pao/report-editor-dark.png',
  }}
/>

---

## Report Status

Reports progress through a defined lifecycle:

| Status | Description | Who Can Advance |
|--------|-------------|-----------------|
| **Draft** | Initial creation and editing | Any assessor |
| **In Review** | Report is being reviewed by the team | Lead assessor |
| **Approved** | Report has been approved internally | Lead assessor |
| **Delivered** | Report has been delivered to the customer | Lead assessor |

{/* <!-- SCREENSHOT: c3pao-report-status-bar — The report status indicator showing current status with progression steps (Draft → In Review → Approved → Delivered) --> */}
<ThemedImage
  alt="Report Status"
  sources={{
    light: '/img/screenshots/c3pao/report-status-light.png',
    dark: '/img/screenshots/c3pao/report-status-dark.png',
  }}
/>

---

## Report Sections

The report editor organizes content into standard assessment report sections:

### Executive Summary

High-level overview of the assessment, key findings, and the overall determination.

{/* <!-- SCREENSHOT: c3pao-report-executive-summary — The executive summary section of the report editor with the rich text editor --> */}
<ThemedImage
  alt="Executive Summary"
  sources={{
    light: '/img/screenshots/c3pao/report-executive-summary-light.png',
    dark: '/img/screenshots/c3pao/report-executive-summary-dark.png',
  }}
/>

### Scope

Description of the assessment scope including:
- Systems and boundaries assessed
- CMMC level targeted
- Assessment period
- Methodologies applied

{/* <!-- SCREENSHOT: c3pao-report-scope — The scope section editor --> */}
<ThemedImage
  alt="Report Scope"
  sources={{
    light: '/img/screenshots/c3pao/report-scope-light.png',
    dark: '/img/screenshots/c3pao/report-scope-dark.png',
  }}
/>

### Methodology

Documentation of assessment methods used:
- Interview procedures
- Evidence examination approach
- Testing methods applied
- Standards and frameworks referenced

### Findings Summary

Auto-generated summary of findings organized by control family. This section pulls data from your individual control assessments.

{/* <!-- SCREENSHOT: c3pao-report-findings — The findings summary section showing a table/breakdown of results by control family (e.g., AC: 20 Met, 2 Not Met) --> */}
<ThemedImage
  alt="Findings Summary"
  sources={{
    light: '/img/screenshots/c3pao/report-findings-light.png',
    dark: '/img/screenshots/c3pao/report-findings-dark.png',
  }}
/>

The findings summary includes:
- Total controls assessed
- Met / Not Met / Not Applicable / Not Assessed counts
- Breakdown by control family
- Risk level distribution

### Recommendations

Suggested improvements and remediation guidance for the customer, especially for Not Met controls.

### Conclusion

Final assessment conclusion and certification recommendation.

---

## Auto-Generating Report Data

Click **Generate Report Data** to automatically populate the findings summary and statistics from your recorded control assessments.

{/* <!-- SCREENSHOT: c3pao-report-generate — The "Generate Report Data" button and the resulting auto-populated statistics --> */}
<ThemedImage
  alt="Generate Report Data"
  sources={{
    light: '/img/screenshots/c3pao/report-generate-light.png',
    dark: '/img/screenshots/c3pao/report-generate-dark.png',
  }}
/>

:::tip
Generate the report data after you've completed all control assessments. You can regenerate at any time if findings change.
:::

---

## Saving and Advancing

- **Save Draft** — Save your current work without changing status
- **Submit for Review** — Move the report from Draft to In Review
- **Approve** — Mark the report as approved (lead assessor only)
- **Mark Delivered** — Record that the report has been delivered to the customer

{/* <!-- SCREENSHOT: c3pao-report-actions — The report action buttons (Save Draft, Submit for Review, Approve, Mark Delivered) --> */}
<ThemedImage
  alt="Report Actions"
  sources={{
    light: '/img/screenshots/c3pao/report-actions-light.png',
    dark: '/img/screenshots/c3pao/report-actions-dark.png',
  }}
/>

---

## Next Steps

- [eMASS Export](./emass-export) — Export your assessment data in eMASS format
- [Performing Assessments](./performing-assessments) — Record the final pass/fail result
