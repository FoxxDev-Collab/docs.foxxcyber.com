---
sidebar_position: 1
---

# ATO Packages

An ATO Package represents a system or boundary you're preparing for CMMC certification.

## Creating an ATO Package

### Step 1: Start New Package

Click **New ATO Package** from the dashboard or navigate to **Packages > New Package**.

![Screenshot: New ATO Package form](/img/screenshots/cmmc/new-package.png)

### Step 2: Enter Package Information

Complete the required fields:

| Field | Description | Required |
|-------|-------------|----------|
| **Package Name** | A descriptive name for your system | Yes |
| **Target CMMC Level** | Level 1, Level 2, or Level 3 | Yes |
| **Description** | Brief description of the package | No |

### Step 3: System Information

Provide details for your System Security Plan:

| Field | Description | Required |
|-------|-------------|----------|
| **System Name** | Official name of the information system | Yes |
| **System Description** | Detailed description of system purpose and function | No |
| **System Boundary** | Define the scope and boundaries of the system | No |
| **System Owner** | Name of the responsible system owner | Yes |
| **ISSO** | Information System Security Officer name | Yes |

### Step 4: Create Package

Click **Create Package** to finalize. The system automatically initializes all requirements based on your selected CMMC level:

- **Level 1**: 17 foundational requirements
- **Level 2**: 110 requirements (NIST SP 800-171)
- **Level 3**: 110+ advanced requirements

![Screenshot: Package created successfully](/img/screenshots/cmmc/package-created.png)

---

## Package Overview

After creating a package, you'll see the package detail view with comprehensive compliance tracking.

![Screenshot: Package detail view](/img/screenshots/cmmc/package-detail.png)

### Dashboard Statistics

The package dashboard shows:

- **Compliance Score** - Percentage of requirements marked as compliant
- **Requirements** - Total count for this CMMC level
- **Evidence Files** - Documents uploaded for this package
- **Assets** - Inventory items tracked within scope

### Requirement Status Distribution

Visual breakdown of your assessment progress:

| Status | Description | Color |
|--------|-------------|-------|
| **Met** | Requirement is fully implemented | Green |
| **Not Met** | Gap identified - remediation needed | Red |
| **In Progress** | Currently being implemented | Yellow |
| **Not Started** | Assessment not yet begun | Gray |
| **Not Applicable** | Requirement doesn't apply to your system | Blue |

## Next Steps

- [Control Assessment](./control-assessment) - Begin assessing your controls
- [Evidence Management](./evidence) - Upload supporting documentation
- [Asset Inventory](./asset-inventory) - Track your system assets
