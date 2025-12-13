---
sidebar_position: 1
---

# Dashboard Overview

The Bedrock CMMC dashboard provides a comprehensive, at-a-glance view of your organization's compliance status, security posture, and ongoing activities.

## Main Dashboard

### Compliance Score Widget

The compliance score widget displays your overall CMMC compliance percentage:

- **Green (90-100%)**: Excellent compliance
- **Yellow (70-89%)**: Good compliance with some gaps
- **Orange (50-69%)**: Moderate compliance, action needed
- **Red (0-49%)**: Poor compliance, immediate action required

### Domain Scores

View compliance scores broken down by CMMC domain:

| Domain | Description |
|--------|-------------|
| **AC** | Access Control |
| **AM** | Asset Management |
| **AU** | Audit and Accountability |
| **AT** | Awareness and Training |
| **CM** | Configuration Management |
| **IA** | Identification and Authentication |
| **IR** | Incident Response |
| **MA** | Maintenance |
| **MP** | Media Protection |
| **PS** | Personnel Security |
| **PE** | Physical Protection |
| **RE** | Recovery |
| **RM** | Risk Management |
| **CA** | Security Assessment |
| **SC** | System and Communications Protection |
| **SI** | System and Information Integrity |

### Critical Gaps

This widget highlights the most critical compliance gaps requiring immediate attention:

- **Priority Level**: Critical, High, Medium, Low
- **Affected Assets**: Number of assets impacted
- **CMMC Practice**: Specific practice reference
- **Recommended Action**: Quick remediation guidance

### Recent Activities

Timeline of recent system activities:
- Assessment completions
- Remediation task updates
- Evidence collection
- User actions
- System changes

## Asset Compliance View

Navigate to **Assets → Compliance** to see:

- Asset compliance scores
- Individual asset status
- Assets by compliance level
- Non-compliant assets requiring attention

### Asset Status Indicators

- ✓ **Compliant**: Meets all requirements
- ⚠ **Partial**: Some findings present
- ✗ **Non-Compliant**: Significant gaps
- ◷ **Assessing**: Assessment in progress
- ? **Unknown**: Not yet assessed

## Assessment History

View all completed assessments:

```
Dashboard → Assessments → History

Displays:
- Assessment date/time
- CMMC level assessed
- Overall score
- Number of findings
- Assessor
- Status
```

### Filtering and Searching

- Filter by date range
- Filter by CMMC level
- Filter by assessor
- Search by asset or finding

## Evidence Dashboard

Monitor evidence collection status:

**Evidence Status:**
- ☑ **Collected**: Evidence successfully gathered
- ⏳ **Pending**: Awaiting collection
- ⚠ **Expiring**: Evidence nearing expiration
- ✗ **Missing**: Required evidence not found

**Evidence Types:**
- Screenshots
- Configuration files
- Policy documents
- Audit logs
- Certificates
- Training records

## Remediation Tracker

Track remediation efforts:

### By Status
- Open
- In Progress
- Awaiting Verification
- Completed
- Overdue

### By Priority
- Critical (0-7 days)
- High (8-30 days)
- Medium (31-60 days)
- Low (60+ days)

### Remediation Metrics
- Average time to remediate
- Success rate
- Overdue tasks
- Tasks by owner

## Customizing Your Dashboard

### Adding Widgets

1. Click **Customize Dashboard**
2. Select from available widgets:
   - Compliance trend chart
   - Asset inventory summary
   - Upcoming tasks
   - Evidence expiration alerts
   - Recent security events
   - Cost of non-compliance
   - Third-party risk
3. Drag to arrange
4. Save layout

### Creating Custom Views

```
Dashboard → Settings → Custom Views

Options:
- Executive View (high-level metrics)
- Technical View (detailed findings)
- Compliance Officer View (audit focus)
- Asset Owner View (specific systems)
```

### Scheduled Reports

Configure automatic dashboard reports:

```
Dashboard → Reports → Schedule

Frequency:
- Daily summary
- Weekly digest
- Monthly comprehensive

Recipients:
- Email distribution list
- Slack channel
- Teams channel
- SIEM integration
```

## Dashboard Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + D` | Return to dashboard |
| `Ctrl + F` | Search/filter |
| `Ctrl + R` | Refresh data |
| `Ctrl + E` | Export current view |
| `F5` | Reload dashboard |

## Mobile Dashboard

Access dashboard on mobile devices:

- Responsive design
- Key metrics prioritized
- Touch-optimized controls
- Push notifications for critical events

**Mobile App Available:**
- iOS: App Store
- Android: Google Play

## Dashboard Performance

### Real-Time Updates

- Compliance scores: Every 15 minutes
- Asset status: Real-time
- Critical alerts: Immediate
- Evidence status: Hourly

### Data Refresh

Manual refresh: Click refresh icon or press `Ctrl + R`

Auto-refresh: Configurable (1, 5, 15, 30 minutes, or disabled)

## Dashboard Permissions

Different roles see different dashboard elements:

| Role | View Access |
|------|-------------|
| **Administrator** | All widgets and data |
| **Compliance Manager** | Compliance, assessments, remediation |
| **Auditor** | Read-only, compliance and evidence |
| **Asset Owner** | Assets they own only |
| **Viewer** | High-level summary only |

## Exporting Dashboard Data

Export current dashboard view:

1. Click **Export** button
2. Choose format:
   - PDF (for reports)
   - Excel (for analysis)
   - CSV (for data import)
   - JSON (for API integration)
3. Select date range
4. Download file

## Dashboard Best Practices

1. **Review Daily**: Check critical gaps and overdue tasks
2. **Monitor Trends**: Watch for declining compliance scores
3. **Prioritize**: Focus on critical findings first
4. **Delegate**: Assign remediation tasks to asset owners
5. **Document**: Keep notes on remediation efforts
6. **Report**: Share dashboard with stakeholders regularly

## Troubleshooting

### Dashboard Not Loading
- Check internet connection
- Clear browser cache
- Try different browser
- Check service status

### Data Not Updating
- Verify assessment schedules
- Check integration status
- Review system logs
- Contact support

### Slow Performance
- Reduce dashboard widget count
- Increase auto-refresh interval
- Clear old assessment data
- Optimize database

---

**Next Steps:**
- [Run Assessments](./assessments.md)
- [Manage Remediation Tasks](./remediation.md)
- [Generate Reports](./reporting.md)
