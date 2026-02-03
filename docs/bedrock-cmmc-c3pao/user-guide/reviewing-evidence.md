# Reviewing Evidence

The Evidence tab displays all compliance documentation the customer has uploaded to support their control implementations. Thorough evidence review is critical to a sound assessment.

---

## Evidence Tab Overview

{/* <!-- SCREENSHOT: c3pao-evidence-tab — The Evidence tab showing the evidence list/table with file names, types, sizes, dates, and linked controls --> */}
![Evidence Tab](/img/screenshots/c3pao/evidence-tab.png)

---

## Evidence List

Each evidence item in the list displays:

| Field | Description |
|-------|-------------|
| **File Name** | Document name |
| **Type** | File format (PDF, DOCX, XLSX, PNG, etc.) |
| **Size** | File size |
| **Description** | Customer-provided context about what the evidence shows |
| **Upload Date** | When the document was uploaded |
| **Linked Controls** | NIST SP 800-171 requirements this evidence supports |

{/* <!-- SCREENSHOT: c3pao-evidence-list-detail — Close-up of the evidence list showing multiple entries with their metadata and linked control badges --> */}
![Evidence List Detail](/img/screenshots/c3pao/evidence-list-detail.png)

---

## Viewing Evidence

Click on any evidence file to open it:

- **Preview** — View the document inline (supported for PDFs, images, and common document formats)
- **Download** — Save the file to your local system for detailed review

{/* <!-- SCREENSHOT: c3pao-evidence-preview — The evidence preview modal/panel showing an inline document preview with download button --> */}
![Evidence Preview](/img/screenshots/c3pao/evidence-preview.png)

---

## Evidence-to-Control Mapping

Evidence files are linked to specific NIST SP 800-171 controls. This mapping helps you verify that each control has adequate supporting documentation.

{/* <!-- SCREENSHOT: c3pao-evidence-control-links — Evidence item showing its linked control badges/tags (e.g., "3.1.1", "3.1.2") --> */}
![Evidence Control Links](/img/screenshots/c3pao/evidence-control-links.png)

:::tip
When assessing a control in the [Controls tab](./reviewing-controls), you can see which evidence files are linked to that specific requirement — making it easy to cross-reference during your review.
:::

---

## Evidence Verification Checklist

When reviewing evidence, verify the following:

- [ ] **Dates are current** — Evidence should be recent and relevant to the assessment period
- [ ] **Supports linked controls** — The document actually demonstrates compliance with the associated requirements
- [ ] **Signatures and approvals** — Required authorizations are present where applicable
- [ ] **Screenshots show current state** — System screenshots reflect the current configuration, not historical state
- [ ] **Policy effective dates** — Policies are in effect and not expired
- [ ] **Completeness** — Evidence covers all aspects of the control, not just partial implementation
- [ ] **Consistency** — Evidence aligns with SSP statements and other documentation

---

## Common Evidence Types

| Evidence Type | What to Look For |
|--------------|-----------------|
| **Policies** | Current effective date, executive signature, annual review |
| **Configuration Screenshots** | Date/time stamps, system identification, relevant settings |
| **Scan Results** | Recent scan date, scope of scan, findings addressed |
| **Training Records** | Completion dates, participant lists, course content |
| **Audit Logs** | Log configuration, retention periods, review evidence |
| **Network Diagrams** | System boundary, data flows, external connections |
| **Incident Response Plans** | Current version, contact information, procedures |

---

## Next Steps

- [Reviewing Controls](./reviewing-controls) — Link your evidence review to control assessments
- [STIG Checklists](./reviewing-checklists) — Technical scan results as additional evidence
- [Reviewing POA&Ms](./reviewing-poams) — Review remediation plans for any evidence gaps
