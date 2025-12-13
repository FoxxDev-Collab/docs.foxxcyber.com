---
sidebar_position: 1
---

# Quick Start Guide

Get started with Bedrock CMMC in just a few minutes. This guide will walk you through the essential steps to begin your CMMC compliance journey.

## Prerequisites

Before you begin, ensure you have:

- Administrator access to your organization's systems
- A Bedrock CMMC license key
- Basic understanding of your organization's IT infrastructure
- List of systems and assets in scope for CMMC compliance

## Step 1: Installation

Choose your deployment method:

### Cloud Deployment (Recommended)
```bash
# Access the Bedrock CMMC cloud portal
https://app.bedrock-cmmc.foxxcyber.com
```

### On-Premises Deployment
```bash
# Download the installer
curl -O https://downloads.foxxcyber.com/bedrock-cmmc/latest/installer.sh

# Run the installer
sudo bash installer.sh
```

### Hybrid Deployment
Contact your Foxx Cyber representative for hybrid deployment options.

## Step 2: Initial Setup

1. **Launch Bedrock CMMC**
   - Navigate to your installation URL
   - Log in with your administrator credentials

2. **Activate Your License**
   ```
   Settings → License Management → Enter License Key
   ```

3. **Configure Organization Profile**
   - Company name and details
   - Primary contacts
   - Target CMMC level
   - Compliance scope

## Step 3: Asset Discovery

Bedrock CMMC can automatically discover assets in your environment:

1. Navigate to **Assets → Discovery**
2. Select discovery method:
   - Active Directory integration
   - Network scanning
   - Cloud provider integration
   - Manual import (CSV)
3. Configure discovery settings
4. Run initial discovery scan

## Step 4: Baseline Assessment

Run your first compliance assessment:

1. Go to **Assessments → New Assessment**
2. Select CMMC level (1, 2, or 3)
3. Choose assessment scope (all assets or specific groups)
4. Click **Start Assessment**

The initial assessment typically takes 15-30 minutes depending on your environment size.

## Step 5: Review Results

After the assessment completes:

1. Navigate to **Dashboard** for overview
2. Review compliance score by domain
3. Identify critical gaps requiring immediate attention
4. Export initial findings report

## Quick Configuration Checklist

- [ ] License activated
- [ ] Organization profile configured
- [ ] Asset discovery completed
- [ ] Initial assessment run
- [ ] Critical gaps identified
- [ ] Team members invited
- [ ] Notification preferences set
- [ ] Integration with existing tools configured

## Next Steps

Now that you've completed the quick start:

- [Configure integrations](../installation/integrations.md) with your existing security tools
- [Set up user roles and permissions](../user-guide/user-management.md)
- [Create remediation plans](../user-guide/remediation.md) for identified gaps
- [Schedule automated assessments](../user-guide/scheduled-assessments.md)
- [Configure alerts and notifications](../user-guide/notifications.md)

## Common Initial Tasks

### Invite Team Members
```
Settings → Users → Invite Users
```

### Connect to Azure AD
```
Settings → Integrations → Identity Providers → Azure AD
```

### Schedule Daily Scans
```
Assessments → Schedule → New Schedule
```

## Need Help?

- **Live Chat**: Available in the application (bottom right corner)
- **Documentation**: [Full installation guide](../installation/installation.md)
- **Video Tutorials**: [Getting Started Playlist](https://foxxcyber.com/tutorials)
- **Support**: support@foxxcyber.com

## Troubleshooting

### Can't log in?
- Verify your credentials
- Check email for activation link
- Clear browser cache
- Contact your administrator

### Asset discovery not finding devices?
- Verify network connectivity
- Check firewall rules
- Ensure proper credentials are configured
- Review discovery logs

### Assessment taking too long?
- Reduce assessment scope
- Schedule during off-peak hours
- Check system resources
- Contact support for optimization

---

**Congratulations!** You've completed the quick start. You're now ready to begin your CMMC compliance journey with Bedrock CMMC.
