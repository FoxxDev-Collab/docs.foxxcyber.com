---
sidebar_position: 2
---

# Control Assessment

Assess your security controls against NIST SP 800-171 requirements.

## Accessing Control Assessment

Navigate to **Control Assessment** from the main menu or dashboard quick actions.

![Screenshot: Control Assessment page](/img/screenshots/cmmc/control-assessment.png)

### Step 1: Select Package

Choose which ATO package you want to assess from the dropdown.

### Step 2: View Assessment Progress

The assessment dashboard displays:

- Overall progress percentage
- Total controls vs. assessed controls
- Breakdown by status (Met, Not Met, Not Assessed)

### Step 3: Assess by Control Family

Controls are organized by NIST SP 800-171 families:

| Family Code | Family Name | Example Requirements |
|-------------|-------------|---------------------|
| **AC** | Access Control | User authentication, access restrictions |
| **AT** | Awareness & Training | Security training, role-based awareness |
| **AU** | Audit & Accountability | Audit logging, log retention |
| **CM** | Configuration Management | Baseline configurations, change control |
| **IA** | Identification & Authentication | Password policies, MFA |
| **IR** | Incident Response | Incident handling, reporting |
| **MA** | Maintenance | Controlled maintenance, remote access |
| **MP** | Media Protection | Media sanitization, transport |
| **PE** | Physical Protection | Physical access controls |
| **PS** | Personnel Security | Screening, termination procedures |
| **RA** | Risk Assessment | Vulnerability scanning, risk analysis |
| **SA** | System & Services Acquisition | Secure development, supply chain |
| **SC** | System & Communications Protection | Encryption, boundary protection |
| **SI** | System & Information Integrity | Malware protection, monitoring |

![Screenshot: Control family assessment view](/img/screenshots/cmmc/control-family.png)

### Step 4: Update Requirement Status

For each requirement:

1. Click on the requirement to expand details
2. Review the requirement text and implementation guidance
3. Select the appropriate status
4. Add implementation notes (recommended)
5. Link supporting evidence (if available)

![Screenshot: Individual requirement assessment](/img/screenshots/cmmc/requirement-assessment.png)

## Next Steps

- [Evidence Management](./evidence) - Upload documentation to support your assessments
- [POA&M Management](./poam) - Create remediation plans for gaps
