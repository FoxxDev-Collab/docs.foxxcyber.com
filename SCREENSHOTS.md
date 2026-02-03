# C3PAO Documentation — Screenshots Needed

All screenshots should be saved to `/img/screenshots/c3pao/` as PNG files.
Recommended dimensions: 1200px wide, retina (2x) preferred.

**Important: Each screenshot needs BOTH a light and dark mode version.**
Use the naming convention: `{name}-light.png` and `{name}-dark.png`
Example: `login-light.png` and `login-dark.png`

---

## Getting Started (7 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 1 | `login.png` | `/c3pao/login` | Full login page with email/password fields and sign-in button |
| 2 | `nav-bar.png` | Any authenticated page | Top navigation bar showing all menu items: Dashboard, Engagements, Team, Workload, Profile |
| 3 | `dashboard.png` | `/c3pao` (dashboard) | Full dashboard view — metric cards, alert banner, recent engagements list |
| 4 | `dashboard-metrics.png` | `/c3pao` (dashboard) | Close-up of the four metric cards (New Requests, In Progress, Total Active, Completed) |
| 5 | `new-request-alert.png` | `/c3pao` (dashboard) | The alert banner showing new assessment requests with action button |
| 6 | `recent-engagements.png` | `/c3pao` (dashboard) | Recent engagements list showing org names, status badges, CMMC levels |

---

## Managing Engagements (6 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 7 | `engagements-list.png` | `/c3pao/engagements` | Full engagements list page with table of engagements |
| 8 | `engagement-filters.png` | `/c3pao/engagements` | Filter bar with search input and status dropdown |
| 9 | `limited-engagement.png` | `/c3pao/engagements/[id]` (pre-access) | Limited engagement view for a requested engagement before acceptance |
| 10 | `accept-decline.png` | `/c3pao/engagements/[id]` (requested) | Accept/Decline buttons on a new request |
| 11 | `assign-lead.png` | `/c3pao/engagements/[id]` | Lead assessor assignment dropdown/dialog |
| 12 | `engagement-team-card.png` | `/c3pao/engagements/[id]` | Engagement team card showing assigned lead and team members |

---

## Performing Assessments (7 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 13 | `start-assessment.png` | `/c3pao/engagements/[id]` (accepted) | "Start Assessment" button on an accepted engagement |
| 14 | `assessment-mode-indicator.png` | `/c3pao/engagements/[id]` (in progress) | Assessment mode indicator banner showing "Assessment In Progress" |
| 15 | `engagement-detail.png` | `/c3pao/engagements/[id]` (in progress) | Full engagement detail page with tab navigation and overview stats |
| 16 | `engagement-stats.png` | `/c3pao/engagements/[id]` | Close-up of overview statistics bar (Total, Met, Not Met, Evidence, POA&Ms) |
| 17 | `assessor-notes.png` | `/c3pao/engagements/[id]` Notes tab | Notes tab with text editor and Save button |
| 18 | `editing-indicator.png` | `/c3pao/engagements/[id]` | Editing indicator showing another assessor is currently editing |
| 19 | `record-result-btn.png` | `/c3pao/engagements/[id]` | "Record Result" button |
| 20 | `result-dialog.png` | `/c3pao/engagements/[id]` | Result selection dialog (Passed/Failed) with findings text area |
| 21 | `completed-banner.png` | `/c3pao/engagements/[id]` (completed) | Completed assessment banner showing result and date |

---

## Reviewing Controls (8 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 22 | `controls-tab.png` | `/c3pao/engagements/[id]` Controls tab | Full controls table with all columns |
| 23 | `control-filters.png` | `/c3pao/engagements/[id]` Controls tab | Filter bar with status, family, and search filters |
| 24 | `control-detail-page.png` | `/c3pao/engagements/[id]/control/[controlId]` | Full control detail page with requirement info and assessment form |
| 25 | `assessment-form.png` | `/c3pao/engagements/[id]/control/[controlId]` | Assessment form: determination dropdown, methods checkboxes, findings areas |
| 26 | `findings-fields.png` | `/c3pao/engagements/[id]/control/[controlId]` | Close-up of findings fields: narrative, evidence, deficiencies, recommendations, risk level |
| 27 | `save-finding.png` | `/c3pao/engagements/[id]/control/[controlId]` | Save Finding button with success notification |
| 28 | `control-navigation.png` | `/c3pao/engagements/[id]/control/[controlId]` | Previous/Next navigation arrows on control detail |
| 29 | `control-cards.png` | `/c3pao/engagements/[id]` Controls tab | Assessor control card view with color-coded status indicators |

---

## Reviewing Documents (7 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 30 | `documents-tab.png` | `/c3pao/engagements/[id]` Documents tab | Documents tab overview with SSP, Assets, and ESP sections |
| 31 | `ssp-overview.png` | `/c3pao/engagements/[id]/ssp` | SSP review page with main sections/tabs |
| 32 | `ssp-system-info.png` | `/c3pao/engagements/[id]/ssp` | System Identification section of the SSP |
| 33 | `ssp-network.png` | `/c3pao/engagements/[id]/ssp` | Network & Interconnections section |
| 34 | `asset-inventory.png` | `/c3pao/engagements/[id]` Documents tab | Asset inventory table with hardware/software/cloud items |
| 35 | `esp-list.png` | `/c3pao/engagements/[id]/esps` | ESP list with provider names, types, and compliance status |
| 36 | `esp-detail.png` | `/c3pao/engagements/[id]/esps/[espId]` | Individual ESP detail page with linked documents |

---

## Reviewing Evidence (4 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 37 | `evidence-tab.png` | `/c3pao/engagements/[id]` Evidence tab | Full evidence list with file names, types, sizes, dates |
| 38 | `evidence-list-detail.png` | `/c3pao/engagements/[id]` Evidence tab | Close-up of evidence entries with metadata and linked control badges |
| 39 | `evidence-preview.png` | `/c3pao/engagements/[id]` Evidence tab | Evidence preview modal with inline document view and download button |
| 40 | `evidence-control-links.png` | `/c3pao/engagements/[id]` Evidence tab | Evidence item showing linked control badges (e.g., "3.1.1", "3.1.2") |

---

## STIG Checklists (6 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 41 | `stigs-tab.png` | `/c3pao/engagements/[id]/stigs` | STIGs tab overview with target list |
| 42 | `stigs-dashboard.png` | `/c3pao/engagements/[id]/stigs` | STIG dashboard statistics (targets, checks, findings) |
| 43 | `stigs-target-list.png` | `/c3pao/engagements/[id]/stigs` | Scanned targets list with benchmark, version, compliance % |
| 44 | `stig-target-detail.png` | `/c3pao/engagements/[id]/stigs/[targetId]` | Individual target checklist with V-IDs, rules, severity, status |
| 45 | `stig-import-history.png` | `/c3pao/engagements/[id]/stigs` | Import history showing CKLB file imports with timestamps |

---

## Reviewing POA&Ms (3 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 46 | `poams-tab.png` | `/c3pao/engagements/[id]` POA&Ms tab | POA&Ms list with status badges, risk levels, linked controls |
| 47 | `poam-detail.png` | `/c3pao/engagements/[id]` POA&Ms tab | Expanded POA&M showing all fields, milestones, and responsible party |
| 48 | `poam-milestones.png` | `/c3pao/engagements/[id]` POA&Ms tab | Expanded milestones with dates, descriptions, and completion status |

---

## Assessment Reports (7 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 49 | `report-editor.png` | `/c3pao/engagements/[id]/report` | Full report editor with section nav and active section |
| 50 | `report-status.png` | `/c3pao/engagements/[id]/report` | Report status indicator (Draft → In Review → Approved → Delivered) |
| 51 | `report-executive-summary.png` | `/c3pao/engagements/[id]/report` | Executive summary section with rich text editor |
| 52 | `report-scope.png` | `/c3pao/engagements/[id]/report` | Scope section editor |
| 53 | `report-findings.png` | `/c3pao/engagements/[id]/report` | Findings summary table with results by control family |
| 54 | `report-generate.png` | `/c3pao/engagements/[id]/report` | "Generate Report Data" button and resulting statistics |
| 55 | `report-actions.png` | `/c3pao/engagements/[id]/report` | Action buttons (Save Draft, Submit for Review, Approve, Mark Delivered) |

---

## eMASS Export (10 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 56 | `emass-entry.png` | `/c3pao/engagements/[id]` | eMASS Export link/button on engagement detail |
| 57 | `emass-wizard-progress.png` | `/c3pao/engagements/[id]/emass-export` | 5-step progress indicator at top of wizard |
| 58 | `emass-step1.png` | `/c3pao/engagements/[id]/emass-export` Step 1 | Assessment Sheet form (OSC Name, dates, CPN, summary, hash) |
| 59 | `emass-step2.png` | `/c3pao/engagements/[id]/emass-export` Step 2 | Requirements Sheet table with 110 requirements |
| 60 | `emass-requirements-detail.png` | `/c3pao/engagements/[id]/emass-export` Step 2 | Close-up of requirement rows with CMMC IDs and POA&M indicators |
| 61 | `emass-step3.png` | `/c3pao/engagements/[id]/emass-export` Step 3 | Objectives Sheet with evidence completeness indicators |
| 62 | `emass-objectives-evidence.png` | `/c3pao/engagements/[id]/emass-export` Step 3 | Evidence completeness checkmarks and warnings |
| 63 | `emass-step4.png` | `/c3pao/engagements/[id]/emass-export` Step 4 | SSP Sheet form (SSP Name, Version, Date) |
| 64 | `emass-step5.png` | `/c3pao/engagements/[id]/emass-export` Step 5 | Review & Export summary with sheets checklist and Download button |
| 65 | `emass-warnings.png` | `/c3pao/engagements/[id]/emass-export` Step 5 | Warnings section with informational alerts |
| 66 | `emass-download.png` | `/c3pao/engagements/[id]/emass-export` Step 5 | Download Export button highlighted |

---

## Team Management (7 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 67 | `team-page.png` | `/c3pao/team` | Full team management page with stats and table |
| 68 | `team-stats.png` | `/c3pao/team` | Close-up of team statistics cards |
| 69 | `team-table.png` | `/c3pao/team` | Team member table with all columns |
| 70 | `add-member-dialog.png` | `/c3pao/team` | Add Team Member dialog with all fields |
| 71 | `edit-member-dialog.png` | `/c3pao/team` | Edit Team Member dialog with pre-filled fields |
| 72 | `workload-dashboard.png` | `/c3pao/workload` | Full workload dashboard with distribution visualization |
| 73 | `workload-chart.png` | `/c3pao/workload` | Workload chart/graph showing per-member distribution |
| 74 | `team-assignment-dialog.png` | Engagement detail | Team assignment dialog with member checkboxes and lead selector |

---

## Organization Profile (8 screenshots)

| # | Filename | Page/Location | What to Capture |
|---|----------|---------------|-----------------|
| 75 | `profile-page.png` | `/c3pao/profile` | Full profile page with stats and tabbed interface |
| 76 | `profile-stats.png` | `/c3pao/profile` | Close-up of profile statistics cards |
| 77 | `profile-tab.png` | `/c3pao/profile` Profile tab | Profile tab with logo, phone, website, address fields |
| 78 | `logo-upload.png` | `/c3pao/profile` Profile tab | Logo upload area with camera icon overlay |
| 79 | `marketplace-tab.png` | `/c3pao/profile` Marketplace tab | Marketplace tab with description, services, pricing, specialties |
| 80 | `specialties-selector.png` | `/c3pao/profile` Marketplace tab | Specialties multi-select with industry checkboxes |
| 81 | `credentials-tab.png` | `/c3pao/profile` Credentials tab | Credentials tab with accreditation ID, CAGE code, authorized levels |
| 82 | `authorized-levels.png` | `/c3pao/profile` Credentials tab | CMMC level checkboxes (Level 1, 2, 3) |

---

## TOTAL: 82 screenshots needed

### Priority Order for Beta Launch

**Must-have (core assessment flow):**
1. Screenshots 1-6 (Getting Started) — 6
2. Screenshots 7-12 (Managing Engagements) — 6
3. Screenshots 13-21 (Performing Assessments) — 9
4. Screenshots 22-29 (Reviewing Controls) — 8
5. Screenshots 56-66 (eMASS Export) — 11

**Should-have (supporting features):**
6. Screenshots 30-36 (Documents) — 7
7. Screenshots 37-40 (Evidence) — 4
8. Screenshots 41-45 (STIGs) — 5
9. Screenshots 46-48 (POA&Ms) — 3
10. Screenshots 49-55 (Reports) — 7

**Nice-to-have (admin/config):**
11. Screenshots 67-74 (Team) — 8
12. Screenshots 75-82 (Profile) — 8
