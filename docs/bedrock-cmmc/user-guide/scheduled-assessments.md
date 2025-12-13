# Scheduled Assessments

Automate your compliance monitoring with scheduled assessments that run at regular intervals.

## Benefits of Scheduled Assessments

- **Continuous Monitoring** - Stay informed of compliance drift
- **Trend Analysis** - Track improvement over time
- **Reduced Manual Effort** - Automate routine assessments
- **Timely Alerts** - Get notified of new issues immediately

## Creating a Schedule

1. Navigate to **Assessments** > **Schedules**
2. Click **New Schedule**
3. Configure the schedule:

### Basic Settings

- **Name** - Descriptive name for the schedule
- **Description** - Purpose and scope details
- **Enabled** - Toggle to activate/deactivate

### Frequency

Choose how often assessments run:

- **Daily** - Run every day at specified time
- **Weekly** - Select days of the week
- **Monthly** - Select day of month
- **Custom** - Cron expression for advanced scheduling

### Scope

Define what to assess:

- **Full Assessment** - All controls and configurations
- **Quick Assessment** - Critical controls only
- **Custom Scope** - Selected domains or controls

### Notifications

Configure alerts:

- Email recipients
- Notification conditions:
  - Always notify
  - Only on score change
  - Only on new findings

4. Click **Save Schedule**

## Managing Schedules

### Viewing Schedules

The Schedules page shows:

- Schedule name and status
- Next run time
- Last run results
- Run history

### Editing Schedules

1. Click on a schedule
2. Modify settings
3. Save changes

### Pausing Schedules

Temporarily disable without deleting:

1. Find the schedule
2. Toggle **Enabled** off
3. Re-enable when ready

### Deleting Schedules

1. Select the schedule
2. Click **Delete**
3. Confirm the action

:::note
Deleting a schedule does not remove historical assessment data.
:::

## Best Practices

- **Weekly Full Assessments** - Comprehensive review of all controls
- **Daily Quick Assessments** - Monitor critical security controls
- **Post-Change Assessments** - Schedule after maintenance windows
- **Stagger Schedules** - Avoid running multiple assessments simultaneously

## Viewing Scheduled Results

Results from scheduled assessments appear in:

- **Assessments** > **History**
- **Dashboard** compliance trend
- Automated reports (if configured)
