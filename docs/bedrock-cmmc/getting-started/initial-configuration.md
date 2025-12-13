---
sidebar_position: 2
---

# Initial Configuration

After completing the Quick Start, configure Bedrock CMMC to match your organization's specific requirements and compliance goals.

## Organization Settings

### Company Profile

Navigate to **Settings → Organization** to configure:

- **Organization Name**: Your legal entity name
- **Industry**: Select your primary industry sector
- **Company Size**: Number of employees
- **CAGE Code**: If applicable for government contracting
- **DUNS Number**: For contractor identification

### Compliance Settings

Define your compliance scope and targets:

1. **Target CMMC Level**
   - Level 1: Foundational
   - Level 2: Advanced
   - Level 3: Expert

2. **Assessment Frequency**
   - Continuous monitoring (recommended)
   - Weekly assessments
   - Monthly assessments
   - Custom schedule

3. **Evidence Retention Period**
   - Regulatory requirement: minimum 3 years
   - Recommended: 5 years for audit history

## User Management

### Creating User Accounts

1. Navigate to **Settings → Users**
2. Click **Invite User**
3. Enter email address and assign role
4. User receives invitation email

### User Roles

Bedrock CMMC supports granular role-based access control (RBAC):

| Role | Permissions | Use Case |
|------|-------------|----------|
| **Administrator** | Full system access | IT leadership, security officers |
| **Compliance Manager** | Assessment, reporting, remediation | Compliance team leads |
| **Auditor** | Read-only access, reporting | Internal/external auditors |
| **Analyst** | View assessments, create reports | Security analysts |
| **Technician** | View specific assets, update configurations | IT staff |
| **Viewer** | Read-only dashboard access | Executives, stakeholders |

### Multi-Factor Authentication (MFA)

**Enable MFA for all users (required for CMMC compliance):**

1. Go to **Settings → Security**
2. Enable "Require MFA for all users"
3. Choose MFA methods:
   - Authenticator apps (Google Authenticator, Microsoft Authenticator)
   - SMS verification
   - Hardware tokens (FIDO2/U2F)

## Asset Management Configuration

### Asset Groups

Organize assets into logical groups for easier management:

```
Examples:
- Production Servers
- Development Environment
- Cloud Infrastructure
- User Workstations
- Network Devices
- CUI Systems (systems handling Controlled Unclassified Information)
```

**To create asset groups:**
1. Navigate to **Assets → Groups**
2. Click **New Group**
3. Define group criteria (tags, location, type)
4. Save configuration

### Asset Tagging

Implement a tagging strategy:

```yaml
Recommended tags:
- environment: [production, staging, development]
- criticality: [high, medium, low]
- data-classification: [cui, confidential, public]
- cmmc-scope: [in-scope, out-of-scope]
- owner: [department or individual]
- location: [datacenter, cloud, office]
```

## Integration Configuration

### Active Directory / LDAP

Connect to your directory service:

```
Settings → Integrations → Identity Providers → Add Provider

Connection Settings:
- Server: ldap://your-dc.company.com
- Base DN: DC=company,DC=com
- Bind DN: CN=bedrock-service,CN=Users,DC=company,DC=com
- Port: 389 (LDAP) or 636 (LDAPS)

Sync Settings:
- Sync frequency: Every 4 hours
- Auto-create users: Enabled
- Default role: Viewer
```

### SIEM Integration

Connect to your Security Information and Event Management system:

**Supported SIEM Platforms:**
- Splunk
- Microsoft Sentinel
- IBM QRadar
- LogRhythm
- Elastic SIEM

**Configuration Example (Splunk):**
```
Settings → Integrations → SIEM → Add Splunk

- Splunk URL: https://splunk.company.com:8089
- API Token: [Your API token]
- Index: cmmc_compliance
- Sync interval: 15 minutes
```

### Cloud Provider Integration

#### AWS Integration
```
Settings → Integrations → Cloud Providers → AWS

Authentication Method: IAM Role or Access Keys
- Account ID: 123456789012
- Role ARN: arn:aws:iam::123456789012:role/BedrockCMMC
- Regions: [Select regions to scan]

Scanning Options:
☑ EC2 Instances
☑ S3 Buckets
☑ RDS Databases
☑ IAM Users & Policies
☑ Security Groups
☑ CloudTrail Logs
```

#### Azure Integration
```
Settings → Integrations → Cloud Providers → Azure

- Tenant ID: your-tenant-id
- Client ID: your-client-id
- Client Secret: [Secret value]
- Subscription IDs: [List subscriptions]

Services to Monitor:
☑ Virtual Machines
☑ Storage Accounts
☑ Azure AD
☑ Key Vault
☑ Network Security Groups
```

### Vulnerability Scanner Integration

Connect your vulnerability scanners:

**Tenable Nessus:**
```
Settings → Integrations → Vulnerability Scanners → Nessus

- Nessus URL: https://nessus.company.com:8834
- API Keys: Access Key / Secret Key
- Sync Frequency: Daily
- Import Severity: High and Critical only
```

**Qualys:**
```
Settings → Integrations → Vulnerability Scanners → Qualys

- Platform: US Platform 1
- Username: [API username]
- Password: [API password]
- Auto-remediation: Create tickets for findings
```

## Notification Configuration

### Email Notifications

Configure alert recipients:

```
Settings → Notifications → Email

Notification Types:
☑ Critical compliance gaps found
☑ Assessment completed
☑ Remediation tasks overdue
☑ License expiration warning
☑ System updates available
☑ Security incidents detected

Recipients:
- security-team@company.com
- compliance-officer@company.com
- it-leadership@company.com
```

### Webhook Notifications

Send alerts to external systems:

```json
{
  "webhook_url": "https://your-system.com/api/alerts",
  "events": [
    "assessment.completed",
    "compliance.critical_gap",
    "remediation.overdue"
  ],
  "auth_type": "bearer_token",
  "auth_token": "your-api-token"
}
```

### Slack Integration

```
Settings → Integrations → Slack

- Workspace: your-workspace.slack.com
- Channel: #cmmc-compliance
- Notification Level: Critical and High only
```

## Compliance Policies

### Define Assessment Policies

Create custom assessment policies:

1. Navigate to **Policies → Assessment Policies**
2. Click **New Policy**
3. Configure:
   - Policy name
   - CMMC practices to include
   - Custom controls (if applicable)
   - Assessment frequency
   - Auto-remediation rules

### Evidence Collection Policies

Configure automated evidence collection:

```
Policies → Evidence Collection

Collection Methods:
☑ Screenshot capture
☑ Configuration file backup
☑ Log file extraction
☑ API data collection
☑ Manual upload

Storage:
- Retention period: 5 years
- Encryption: AES-256
- Location: Secure cloud storage
- Backup: Daily incremental, weekly full
```

## System Preferences

### Dashboard Configuration

Customize your dashboard view:

```
Settings → Dashboard Preferences

Default View:
- Compliance Score Overview
- Critical Gaps (Top 10)
- Recent Assessment Results
- Upcoming Tasks
- Evidence Collection Status

Widgets:
☑ CMMC Domain Scores
☑ Asset Compliance Status
☑ Remediation Progress
☑ Audit Trail Summary
```

### Report Templates

Configure default report settings:

```
Settings → Reports → Templates

Standard Reports:
- Executive Summary
- Technical Findings
- Gap Analysis
- Remediation Plan
- Evidence Package

Custom Branding:
- Company logo
- Color scheme
- Report header/footer
- Custom cover page
```

## Backup and Recovery

### Configure Backups

```
Settings → System → Backup

Backup Schedule:
- Frequency: Daily at 2:00 AM
- Retention: 30 days
- Backup Location: Encrypted cloud storage

Backup Contents:
☑ Configuration settings
☑ Assessment data
☑ Evidence files
☑ User data
☑ Asset inventory
☑ Audit logs
```

### Test Recovery

Regular recovery testing is recommended:
```
Settings → System → Backup → Test Recovery
```

## Security Hardening

### Access Controls

```
Settings → Security → Access Controls

Session Settings:
- Session timeout: 30 minutes
- Maximum concurrent sessions: 3
- Password policy: NIST 800-63B compliant
- Failed login threshold: 5 attempts
- Account lockout duration: 30 minutes

IP Restrictions:
- Allow list: [Your office IPs]
- Deny list: [Known bad actors]
- Geographic restrictions: Optional
```

### API Security

```
Settings → API → Security

- Enable API access: Yes
- Require API key authentication: Yes
- Rate limiting: 1000 requests/hour
- API key rotation: Every 90 days
- Audit all API calls: Enabled
```

## Next Steps

After completing initial configuration:

1. [Run your first comprehensive assessment](../user-guide/assessments.md)
2. [Review compliance dashboard](../user-guide/dashboard-overview.md)
3. [Create remediation plans](../user-guide/remediation.md)
4. [Configure automated reporting](../user-guide/reporting.md)

## Configuration Checklist

- [ ] Organization profile completed
- [ ] User accounts created and MFA enabled
- [ ] Asset groups defined and tagged
- [ ] Active Directory integrated
- [ ] Cloud providers connected
- [ ] SIEM integration configured
- [ ] Vulnerability scanner connected
- [ ] Email notifications set up
- [ ] Assessment policies defined
- [ ] Evidence collection configured
- [ ] Backup schedule enabled
- [ ] Security hardening applied

---

Need assistance with configuration? Contact Foxx Cyber support at support@foxxcyber.com
