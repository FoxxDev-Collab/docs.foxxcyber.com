import ThemedImage from '@theme/ThemedImage';

# Reviewing Documents

The Documents tab provides access to the customer's System Security Plan (SSP), asset inventory, and external service provider (ESP) information. These documents are read-only during the assessment — they represent the customer's compliance posture as submitted.

---

## Documents Tab Overview

{/* <!-- SCREENSHOT: c3pao-documents-tab — The Documents tab showing the main document categories (SSP, Assets, ESPs) with summary info --> */}
<ThemedImage
  alt="Documents Tab"
  sources={{
    light: '/img/screenshots/c3pao/documents-tab-light.png',
    dark: '/img/screenshots/c3pao/documents-tab-dark.png',
  }}
/>

---

## System Security Plan (SSP)

The SSP is the cornerstone document of the customer's compliance package. It describes the system boundary, architecture, and how each control is implemented.

{/* <!-- SCREENSHOT: c3pao-ssp-overview — The SSP review page showing the main sections/tabs of the SSP --> */}
<ThemedImage
  alt="SSP Overview"
  sources={{
    light: '/img/screenshots/c3pao/ssp-overview-light.png',
    dark: '/img/screenshots/c3pao/ssp-overview-dark.png',
  }}
/>

### SSP Sections

The SSP is organized into the following sections:

| Section | What to Review |
|---------|---------------|
| **System Identification** | System name, description, and boundaries |
| **System Description & Environment** | Architecture, data flows, and operating environment |
| **Network & Interconnections** | Network diagrams, external connections, and data flows |
| **Roles & Responsibilities** | Key personnel and their security responsibilities |
| **SDLC Information** | Software development lifecycle processes |
| **Policies & Procedures** | Organizational security policies |
| **Contact Information** | Key personnel contact details |

### SSP Review Tips

- Cross-reference SSP statements with actual evidence in the Evidence tab
- Verify the system boundary description matches the asset inventory
- Check that all external connections are documented
- Ensure key personnel are identified and roles are clearly defined

---

## Asset Inventory

View the customer's in-scope assets to understand what systems and components are part of the assessment boundary.

{/* <!-- SCREENSHOT: c3pao-asset-inventory — The asset inventory view showing a table of hardware, software, and cloud assets --> */}
<ThemedImage
  alt="Asset Inventory"
  sources={{
    light: '/img/screenshots/c3pao/asset-inventory-light.png',
    dark: '/img/screenshots/c3pao/asset-inventory-dark.png',
  }}
/>

Asset categories include:
- Hardware devices
- Software applications
- Cloud services
- Network components

---

## External Service Providers (ESPs)

Review third-party services the customer relies on and their compliance posture.

### ESP List

{/* <!-- SCREENSHOT: c3pao-esp-list — The ESP list showing all external service providers with their type, CMMC status, and FedRAMP status --> */}
<ThemedImage
  alt="ESP List"
  sources={{
    light: '/img/screenshots/c3pao/esp-list-light.png',
    dark: '/img/screenshots/c3pao/esp-list-dark.png',
  }}
/>

Each ESP entry includes:

| Field | Description |
|-------|-------------|
| **Provider Name** | Third-party company name |
| **Service Type** | MSP, MSSP, CSP, ISP, Consultant, or Other |
| **CUI Handling** | Whether the provider handles Controlled Unclassified Information |
| **FedRAMP Status** | FedRAMP authorization status |
| **CMMC Status** | Provider's CMMC certification status |

### ESP Detail View

Click on any ESP to view its full details, including linked documentation.

{/* <!-- SCREENSHOT: c3pao-esp-detail — The ESP detail page showing provider information, CUI handling, compliance status, and linked documents (SRM, CRM, Provider SSP) --> */}
<ThemedImage
  alt="ESP Detail"
  sources={{
    light: '/img/screenshots/c3pao/esp-detail-light.png',
    dark: '/img/screenshots/c3pao/esp-detail-dark.png',
  }}
/>

ESP detail includes:
- Provider description and contact information
- CUI handling details
- Linked compliance documents:
  - **Shared Responsibility Matrix (SRM)** — Division of security responsibilities
  - **Customer Responsibility Matrix (CRM)** — Customer-specific responsibilities
  - **Provider SSP** — The provider's own System Security Plan
- OPA mapping information

### What to Check for ESPs

- [ ] Verify all third-party services handling CUI are listed
- [ ] Check that FedRAMP status is current for cloud providers
- [ ] Review shared responsibility matrices for completeness
- [ ] Ensure CUI data flow to/from ESPs is documented
- [ ] Confirm provider CMMC status aligns with requirements

---

## Next Steps

- [Reviewing Evidence](./reviewing-evidence) — Verify evidence supports the SSP claims
- [Reviewing Controls](./reviewing-controls) — Cross-reference document review with control assessments
- [STIG Checklists](./reviewing-checklists) — Review technical scan results
