import ThemedImage from '@theme/ThemedImage';

# STIG Checklists

The STIGs tab provides access to the customer's Security Technical Implementation Guide (STIG) scan results. STIG checklists show automated and manual compliance checks against DoD security baselines for specific technologies.

---

## STIGs Tab Overview

Navigate to the **STIGs** tab on an engagement to view all imported STIG checklist data.

{/* <!-- SCREENSHOT: c3pao-stigs-tab — The STIGs tab overview showing the list of scanned targets with their STIG benchmark name, scan date, and compliance summary --> */}
<ThemedImage
  alt="STIGs Tab"
  sources={{
    light: '/img/screenshots/c3pao/stigs-tab-light.png',
    dark: '/img/screenshots/c3pao/stigs-tab-dark.png',
  }}
/>

### Dashboard Statistics

The top of the STIGs tab displays aggregate statistics:

| Metric | Description |
|--------|-------------|
| **Total Targets** | Number of scanned systems/applications |
| **Total Checks** | Combined number of STIG checks across all targets |
| **Open Findings** | Checks that are not yet compliant |
| **Not a Finding** | Checks that passed |
| **Not Applicable** | Checks that don't apply to the target |

{/* <!-- SCREENSHOT: c3pao-stigs-dashboard — The STIG dashboard statistics showing totals for targets, checks, open findings, not a finding, and not applicable --> */}
<ThemedImage
  alt="STIGs Dashboard"
  sources={{
    light: '/img/screenshots/c3pao/stigs-dashboard-light.png',
    dark: '/img/screenshots/c3pao/stigs-dashboard-dark.png',
  }}
/>

---

## Scanned Targets

Each row in the targets list represents a system or application that was scanned. Customers import these from CKLB (STIG Viewer checklist) files.

| Column | Description |
|--------|-------------|
| **Target Name** | System or application name |
| **STIG Benchmark** | The STIG benchmark applied (e.g., Windows Server 2019, RHEL 8) |
| **Version** | STIG version and release |
| **Compliance** | Percentage of checks passing |
| **Import Date** | When the checklist was imported |

---

## Target Detail View

Click on any target to view its individual STIG checklist results.

{/* <!-- SCREENSHOT: c3pao-stig-target-detail — The individual target detail page showing the full checklist with vulnerability IDs, rule titles, severity, and status --> */}
<ThemedImage
  alt="Target Detail"
  sources={{
    light: '/img/screenshots/c3pao/stig-target-detail-light.png',
    dark: '/img/screenshots/c3pao/stig-target-detail-dark.png',
  }}
/>

Each checklist entry shows:

| Field | Description |
|-------|-------------|
| **Vulnerability ID** | STIG check identifier (V-XXXXX) |
| **Rule Title** | Description of the security check |
| **Severity** | CAT I (High), CAT II (Medium), CAT III (Low) |
| **Status** | Open, Not a Finding, Not Applicable, Not Reviewed |
| **Finding Details** | Additional context about the finding |
| **Comments** | Customer notes on the check |

---

## STIG Details/All Rules

Assessors can view details about each STIG, filter, sort, and search.

{/* <!-- SCREENSHOT: c3pao-stig-rule-detail — The individual target detail page showing the full checklist with vulnerability IDs, rule titles, severity, and status --> */}
<ThemedImage
  alt="STIG Rule Detail"
  sources={{
    light: '/img/screenshots/c3pao/stig-rule-detail-light.png',
    dark: '/img/screenshots/c3pao/stig-rule-detail-dark.png',
  }}
/>

---

## What to Look For

When reviewing STIG results:

- [ ] **CAT I findings** — High severity findings should be prioritized and addressed
- [ ] **Scan coverage** — All in-scope systems should have STIG scans
- [ ] **Scan recency** — Scans should be recent (within the assessment period)
- [ ] **Open findings justification** — Check if open findings have documented mitigations
- [ ] **Alignment with SSP** — Systems in STIG scans should match the asset inventory
- [ ] **Version currency** — STIG benchmarks should be reasonably current

:::note
STIG data is read-only in the C3PAO view. Customers import their CKLB files, and you review the results as part of your assessment evidence.
:::

---

## Next Steps

- [Reviewing Controls](./reviewing-controls) — STIG results inform your control determinations
- [Reviewing Evidence](./reviewing-evidence) — STIG exports serve as technical evidence
- [Reviewing POA&Ms](./reviewing-poams) — Open STIG findings may have associated POA&Ms
