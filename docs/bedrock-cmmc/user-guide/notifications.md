# Notifications

Configure how and when Bedrock CMMC alerts you to important events and compliance changes.

## Notification Types

### Assessment Notifications

Alerts related to assessment activities:

- Assessment completed
- Score change detected
- New findings discovered
- Assessment failed/error

### Remediation Notifications

Updates on remediation progress:

- New finding assigned to you
- Remediation deadline approaching
- Finding status changed
- Auto-remediation completed

### System Notifications

Platform and operational alerts:

- Integration connection issues
- License expiration warnings
- Scheduled maintenance
- New features available

## Configuring Notifications

### Personal Preferences

Each user can configure their own preferences:

1. Click your profile icon
2. Select **Notification Settings**
3. Toggle notifications by type
4. Choose delivery method:
   - In-app notifications
   - Email
   - Both

### Organization-Wide Settings

Administrators can set default preferences:

1. Go to **Settings** > **Notifications**
2. Configure default settings for each role
3. Set required notifications (users cannot disable)

## Email Notifications

### Email Frequency

Control email volume:

- **Immediate** - Send as events occur
- **Daily Digest** - Summary once per day
- **Weekly Digest** - Summary once per week

### Email Recipients

Add additional recipients for specific events:

- Distribution lists
- External stakeholders (with restrictions)
- Service accounts for automation

## In-App Notifications

View notifications within Bedrock CMMC:

- Bell icon shows unread count
- Click to view notification center
- Mark as read or dismiss

## Webhooks

For advanced integrations, configure webhooks:

1. Go to **Settings** > **Webhooks**
2. Click **Add Webhook**
3. Enter the endpoint URL
4. Select events to trigger
5. Test the connection
6. Save

Webhooks deliver JSON payloads for:

- Custom dashboards
- SIEM integration
- Automation workflows
- ChatOps (Slack, Teams)

## Notification History

View past notifications:

1. Go to **Notifications** > **History**
2. Filter by type, date, or status
3. Export for audit purposes

## Troubleshooting

### Not Receiving Emails

1. Check spam/junk folder
2. Verify email address in profile
3. Confirm notification is enabled
4. Check organization email policies

### Too Many Notifications

1. Switch to digest mode
2. Adjust notification thresholds
3. Unsubscribe from non-essential alerts
