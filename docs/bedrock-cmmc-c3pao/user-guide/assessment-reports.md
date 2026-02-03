# Assessment Reports

The Report tab provides a built-in report editor for creating your formal assessment report. Reports are structured with standard sections and can be auto-populated from your control findings.

---

## Accessing the Report Editor

Navigate to the **Report** tab on an active engagement to open the assessment report editor.

{/* <!-- SCREENSHOT: c3pao-report-editor-overview — The full report editor page showing the section navigation on the left and the active section editor on the right --> */}
![Report Editor](/img/screenshots/c3pao/report-editor.png)

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
![Report Status](/img/screenshots/c3pao/report-status.png)

---

## Report Sections

The report editor organizes content into standard assessment report sections:

### Executive Summary

High-level overview of the assessment, key findings, and the overall determination.

{/* <!-- SCREENSHOT: c3pao-report-executive-summary — The executive summary section of the report editor with the rich text editor --> */}
![Executive Summary](/img/screenshots/c3pao/report-executive-summary.png)

### Scope

Description of the assessment scope including:
- Systems and boundaries assessed
- CMMC level targeted
- Assessment period
- Methodologies applied

{/* <!-- SCREENSHOT: c3pao-report-scope — The scope section editor --> */}
![Report Scope](/img/screenshots/c3pao/report-scope.png)

### Methodology

Documentation of assessment methods used:
- Interview procedures
- Evidence examination approach
- Testing methods applied
- Standards and frameworks referenced

### Findings Summary

Auto-generated summary of findings organized by control family. This section pulls data from your individual control assessments.

{/* <!-- SCREENSHOT: c3pao-report-findings — The findings summary section showing a table/breakdown of results by control family (e.g., AC: 20 Met, 2 Not Met) --> */}
![Findings Summary](/img/screenshots/c3pao/report-findings.png)

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
![Generate Report Data](/img/screenshots/c3pao/report-generate.png)

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
![Report Actions](/img/screenshots/c3pao/report-actions.png)

---

## Next Steps

- [eMASS Export](./emass-export) — Export your assessment data in eMASS format
- [Performing Assessments](./performing-assessments) — Record the final pass/fail result
