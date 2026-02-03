# Performing Assessments

This guide covers the complete assessment workflow — from starting an assessment through recording the final result. This is the core of the C3PAO experience on the platform.

---

## Starting the Assessment

From an **Accepted** engagement, click **Start Assessment** to begin the formal review process.

{/* <!-- SCREENSHOT: c3pao-start-assessment-btn — The "Start Assessment" button on an accepted engagement, with the assessment mode indicator --> */}
![Start Assessment](/img/screenshots/c3pao/start-assessment.png)

When you start an assessment:
- The engagement status changes to **In Progress**
- Assessment start date is recorded
- Your access level upgrades to **Full Assess** (you can now record findings)
- An assessment mode indicator appears on the engagement

{/* <!-- SCREENSHOT: c3pao-assessment-mode-indicator — The assessment mode indicator banner showing "Assessment In Progress" with start date --> */}
![Assessment Mode Indicator](/img/screenshots/c3pao/assessment-mode-indicator.png)

---

## Engagement Detail View

The engagement detail page is your main workspace during an assessment. It provides tabbed access to all customer compliance data.

{/* <!-- SCREENSHOT: c3pao-engagement-detail-full — Full engagement detail page showing the tab navigation (Controls, Documents, Evidence, STIGs, POA&Ms, Report, Notes) and the overview statistics at the top --> */}
![Engagement Detail View](/img/screenshots/c3pao/engagement-detail.png)

### Overview Statistics

The top of the engagement detail displays key metrics at a glance:

| Metric | Description |
|--------|-------------|
| **Total Controls** | Number of NIST SP 800-171 requirements for the target level |
| **Met** | Controls determined to be compliant |
| **Not Met** | Controls with identified gaps |
| **Not Applicable** | Controls marked as not applicable |
| **Not Assessed** | Controls still awaiting assessment |
| **Evidence Files** | Total uploaded compliance documents |
| **POA&Ms** | Active remediation items |

{/* <!-- SCREENSHOT: c3pao-engagement-stats — Close-up of the overview statistics bar/cards at the top of the engagement detail --> */}
![Engagement Statistics](/img/screenshots/c3pao/engagement-stats.png)

### Assessment Tabs

Navigate between review areas using the tab bar:

| Tab | Purpose | See Guide |
|-----|---------|-----------|
| **Controls** | Assess all 110 NIST SP 800-171 requirements | [Reviewing Controls](./reviewing-controls) |
| **Documents** | Review SSP, assets, and ESPs | [Reviewing Documents](./reviewing-documents) |
| **Evidence** | Examine uploaded compliance documents | [Reviewing Evidence](./reviewing-evidence) |
| **STIGs** | Review STIG scan results | [STIG Checklists](./reviewing-checklists) |
| **POA&Ms** | Evaluate remediation plans | [Reviewing POA&Ms](./reviewing-poams) |
| **Report** | Generate and edit the assessment report | [Assessment Reports](./assessment-reports) |
| **Notes** | Maintain internal assessor notes | [Below](#assessor-notes) |

---

## Assessment Workflow

Here's the recommended workflow for conducting a thorough assessment:

### 1. Review the System Security Plan

Start by reading the customer's SSP to understand the system boundary, architecture, and claimed control implementations. This provides context for everything else.

→ [Reviewing Documents](./reviewing-documents)

### 2. Review Evidence

Examine the uploaded compliance documentation to verify that evidence supports the customer's claims.

→ [Reviewing Evidence](./reviewing-evidence)

### 3. Review STIG Results

Check the customer's STIG scan results to verify technical compliance across scanned systems.

→ [STIG Checklists](./reviewing-checklists)

### 4. Assess Controls

Work through each of the 110 NIST SP 800-171 requirements. For each control, record your determination, assessment methods, and detailed findings.

→ [Reviewing Controls](./reviewing-controls)

### 5. Evaluate POA&Ms

Review the customer's remediation plans for any identified gaps. Assess whether timelines are realistic and milestones are achievable.

→ [Reviewing POA&Ms](./reviewing-poams)

### 6. Generate the Assessment Report

Create a formal assessment report with executive summary, findings, and recommendations.

→ [Assessment Reports](./assessment-reports)

### 7. Record the Final Result

Submit your pass/fail determination and finalize the engagement.

→ [Below](#recording-the-final-result)

---

## Assessor Notes

The **Notes** tab allows your team to maintain internal assessment observations throughout the review process.

{/* <!-- SCREENSHOT: c3pao-assessor-notes — The Notes tab showing the text editor area with example notes and the Save button --> */}
![Assessor Notes](/img/screenshots/c3pao/assessor-notes.png)

:::important
Notes are **only visible to your C3PAO team** and are never shared with the customer.
:::

### Best Practices for Notes

- Document significant findings as you discover them
- Record questions to follow up with the customer
- Track areas requiring additional evidence
- Note concerns for inclusion in the final report
- Use notes to coordinate with other team members on the assessment

Click **Save Notes** to persist your entries.

---

## Concurrent Editing Protection

When multiple assessors are working on the same engagement, the platform provides built-in conflict detection:

- **Editing Indicators** — See which team member is currently editing a control finding
- **Version Control** — Findings are version-tracked to prevent overwrites
- **Conflict Alerts** — If someone else saved changes to a finding you're editing, you'll be notified before your save

{/* <!-- SCREENSHOT: c3pao-editing-indicator — The editing indicator showing another assessor's name and "Currently editing" on a control --> */}
![Editing Indicator](/img/screenshots/c3pao/editing-indicator.png)

---

## Recording the Final Result

When your review is complete and your report is finalized, record the assessment result.

### Step 1: Click Record Result

{/* <!-- SCREENSHOT: c3pao-record-result-btn — The "Record Result" button on the engagement detail page --> */}
![Record Result Button](/img/screenshots/c3pao/record-result-btn.png)

### Step 2: Select the Outcome

Choose the assessment determination:

| Result | Description |
|--------|-------------|
| **Passed — Certification Recommended** | Customer meets all CMMC requirements for the target level |
| **Failed — Remediation Required** | Significant gaps prevent certification |

{/* <!-- SCREENSHOT: c3pao-result-dialog — The result selection dialog showing Passed/Failed options with findings text area --> */}
![Result Selection Dialog](/img/screenshots/c3pao/result-dialog.png)

### Step 3: Document Findings

Enter any final findings, conditions, or notes about the determination.

### Step 4: Submit

Click **Record Result** to finalize. The engagement status changes to **Completed** and the customer is notified.

{/* <!-- SCREENSHOT: c3pao-completed-banner — The completed assessment banner showing the result (Passed or Failed) with date --> */}
![Completed Assessment](/img/screenshots/c3pao/completed-banner.png)

:::warning
Recording a result is a final action. Ensure your review is thorough and your report is complete before submitting.
:::

---

## Post-Assessment

After recording a result:

- **If Passed**: The certification recommendation is recorded. Proceed to [eMASS Export](./emass-export) to generate the export package.
- **If Failed**: The customer receives notification with your findings. They can create POA&Ms to address gaps and request a reassessment when remediated.

---

## Next Steps

- [Reviewing Controls](./reviewing-controls) — Detailed guide on assessing individual controls
- [Assessment Reports](./assessment-reports) — Creating and delivering the formal report
- [eMASS Export](./emass-export) — Exporting results to eMASS format
