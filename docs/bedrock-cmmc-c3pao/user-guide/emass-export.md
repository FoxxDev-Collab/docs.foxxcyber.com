# eMASS Export

The eMASS Export wizard generates a CMMC-formatted Excel workbook (.xlsx) from your assessment data. This is a 5-step guided process that allows you to review, edit, and validate all data before exporting.

---

## Accessing the Export Wizard

Navigate to the **eMASS Export** option from the engagement detail page.

{/* <!-- SCREENSHOT: c3pao-emass-entry — The eMASS Export link/button on the engagement detail page --> */}
![eMASS Export Entry](/img/screenshots/c3pao/emass-entry.png)

---

## Export Wizard Overview

The wizard walks you through five sheets that make up the eMASS export package. A progress indicator at the top shows your current step.

{/* <!-- SCREENSHOT: c3pao-emass-wizard-progress — The 5-step progress indicator at the top of the wizard (Assessment, Requirements, Objectives, SSP, Review & Export) --> */}
![Wizard Progress](/img/screenshots/c3pao/emass-wizard-progress.png)

---

## Step 1: Assessment Sheet

Fill in the assessment metadata that goes on the cover sheet of the export.

{/* <!-- SCREENSHOT: c3pao-emass-step1 — The Assessment Sheet form showing all fields: OSC Name, dates, Lead Assessor CPN, Executive Summary, etc. --> */}
![Assessment Sheet](/img/screenshots/c3pao/emass-step1.png)

### Required Fields

| Field | Description |
|-------|-------------|
| **OSC Name** | Organization Seeking Certification name |
| **Assessment Start Date** | When the assessment began |
| **Assessment End Date** | When the assessment concluded |
| **Lead Assessor CPN** | Lead assessor's Certified Professional Number |
| **Executive Summary** | High-level assessment summary |
| **Hash Value** | Hash of the assessment data |
| **Hashed Data List Filename** | Name of the hashed data file |

### Optional Fields

| Field | Description |
|-------|-------------|
| **QA Assessor CPN** | Quality assurance assessor's CPN |
| **Standards Acceptance** | DIBCAC High, FedRAMP Moderate, or FedRAMP High |
| **Hash Algorithm** | Algorithm used for hashing (e.g., SHA-256) |
| **Hash Date** | When the hash was generated |

:::note
Fields marked with an asterisk (*) are required. The wizard will show validation warnings for missing required fields.
:::

---

## Step 2: Requirements Sheet

Review all 110 NIST SP 800-171 requirements and their assessment determinations.

{/* <!-- SCREENSHOT: c3pao-emass-step2 — The Requirements Sheet showing the table of all 110 requirements with CMMC IDs, descriptions, determinations, and POA&M status --> */}
![Requirements Sheet](/img/screenshots/c3pao/emass-step2.png)

### Summary Statistics

At the top of the requirements sheet:

| Metric | Description |
|--------|-------------|
| **Total Requirements** | 110 NIST SP 800-171 requirements |
| **Met** | Requirements determined to be satisfied |
| **Not Met** | Requirements with identified gaps |
| **In POA&M** | Requirements with active remediation plans |

### Requirements Table

Each row shows:

| Column | Description |
|--------|-------------|
| **CMMC ID** | CMMC format identifier (e.g., AC.L2-3.1.1) |
| **Requirement Text** | Full NIST SP 800-171 requirement description |
| **Determination** | Met, Not Met, or Not Applicable |
| **POA&M Allowed** | Whether this requirement can be in POA&M status |
| **Current POA&M Status** | Active POA&M status if applicable |

{/* <!-- SCREENSHOT: c3pao-emass-requirements-detail — Close-up of several requirement rows showing the CMMC ID format, determination badges, and POA&M indicators --> */}
![Requirements Detail](/img/screenshots/c3pao/emass-requirements-detail.png)

---

## Step 3: Objectives Sheet

Review all 320 assessment objectives derived from the 110 requirements.

{/* <!-- SCREENSHOT: c3pao-emass-step3 — The Objectives Sheet showing the assessment objectives table with evidence completeness indicators --> */}
![Objectives Sheet](/img/screenshots/c3pao/emass-step3.png)

### Objectives Summary

| Metric | Description |
|--------|-------------|
| **Total Objectives** | 320 assessment objectives |
| **Assessed** | Objectives with a recorded determination |
| **Met** | Objectives determined to be satisfied |
| **Not Met** | Objectives with identified gaps |

### Evidence Completeness

For each objective, the wizard tracks whether you have:

| Evidence Type | Description |
|--------------|-------------|
| **Artifacts** | Supporting documentation uploaded |
| **Interview Notes** | Interview assessment method notes |
| **Examine Notes** | Examination assessment method notes |
| **Test Notes** | Testing assessment method notes |

Missing evidence types are flagged to help ensure completeness before export.

{/* <!-- SCREENSHOT: c3pao-emass-objectives-evidence — The evidence completeness indicators showing checkmarks and warnings for missing artifacts/notes --> */}
![Objectives Evidence](/img/screenshots/c3pao/emass-objectives-evidence.png)

---

## Step 4: SSP Sheet

Review and edit the System Security Plan information included in the export.

{/* <!-- SCREENSHOT: c3pao-emass-step4 — The SSP Sheet form showing SSP Name, Version, and Date fields --> */}
![SSP Sheet](/img/screenshots/c3pao/emass-step4.png)

| Field | Description |
|-------|-------------|
| **SSP Name** | Name of the System Security Plan |
| **SSP Version** | Current version number |
| **SSP Date** | Date of the SSP version |

These fields are pre-populated from the customer's SSP data but can be edited before export.

---

## Step 5: Review & Export

The final step provides a comprehensive summary and validation check before downloading.

{/* <!-- SCREENSHOT: c3pao-emass-step5 — The Review & Export page showing the export summary, sheets included checklist, warnings list, and Download button --> */}
![Review & Export](/img/screenshots/c3pao/emass-step5.png)

### Export Summary

| Item | Description |
|------|-------------|
| **Sheets Included** | Checklist of all sheets in the export (Assessment, Requirements, Objectives, SSP) |
| **Completion Status** | Overall data completeness percentage |
| **Warnings** | Informational warnings about missing or incomplete data |

### Warnings

The wizard provides informational warnings for:
- Missing required fields
- Requirements without determinations
- Objectives missing evidence
- Incomplete assessment methods

{/* <!-- SCREENSHOT: c3pao-emass-warnings — The warnings section showing informational alerts about missing data --> */}
![Export Warnings](/img/screenshots/c3pao/emass-warnings.png)

:::tip
Warnings are informational — you can still export with warnings present. However, addressing all warnings ensures the most complete eMASS package.
:::

### Download

Click **Download Export** to generate and download the Excel workbook (.xlsx).

{/* <!-- SCREENSHOT: c3pao-emass-download — The Download Export button (highlighted) --> */}
![Download Export](/img/screenshots/c3pao/emass-download.png)

The export file contains:
- **Assessment Sheet** — Cover page with metadata
- **Requirements Sheet** — All 110 requirements with determinations
- **Objectives Sheet** — All 320 objectives with evidence tracking
- **SSP Sheet** — System Security Plan information

---

## Next Steps

- [Performing Assessments](./performing-assessments) — Ensure you've recorded the final result before exporting
- [Assessment Reports](./assessment-reports) — Deliver the formal report alongside the eMASS export
