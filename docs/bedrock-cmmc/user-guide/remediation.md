# Remediation

The Remediation module helps you address compliance gaps identified during assessments and track progress toward full CMMC compliance.

## Remediation Workflow

### 1. Review Findings

After an assessment, review non-compliant controls:

1. Navigate to **Remediation** in the main menu
2. View findings organized by:
   - Severity (Critical, High, Medium, Low)
   - CMMC Domain
   - Control Family

### 2. Prioritize Actions

Bedrock CMMC helps prioritize remediation efforts based on:

- **Risk Impact** - Potential security impact if not addressed
- **Effort Required** - Estimated time and resources needed
- **Dependencies** - Related controls that may be affected

### 3. Assign Ownership

For each finding, you can:

- Assign to a team member
- Set a target completion date
- Add notes and context

### 4. Implement Changes

Each finding includes:

- Step-by-step remediation guidance
- Links to Microsoft documentation
- PowerShell scripts (where applicable)
- Configuration screenshots

### 5. Verify Compliance

After making changes:

1. Click **Verify** on the finding
2. Bedrock CMMC re-checks the specific control
3. Status updates automatically

## Automated Remediation

Some findings support automated remediation:

1. Review the proposed change
2. Click **Auto-Remediate**
3. Confirm the action
4. Monitor the change status

:::caution
Always review automated changes before applying them in production environments.
:::

## Tracking Progress

The Remediation Dashboard shows:

- Total open findings
- Findings by status
- Remediation velocity
- Upcoming deadlines

## Integration with Ticketing

Create tickets in external systems:

- ServiceNow
- Jira
- Azure DevOps

See [Integrations](../installation/integrations) for setup instructions.
