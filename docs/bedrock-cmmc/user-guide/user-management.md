# User Management

Manage users, roles, and permissions within Bedrock CMMC to ensure appropriate access control.

## User Roles

Bedrock CMMC includes predefined roles:

### Administrator

Full access to all features:

- User management
- System configuration
- All assessments and reports
- Integration settings

### Compliance Manager

Manage compliance activities:

- Run assessments
- View all results
- Manage remediation
- Generate reports

### Compliance Analyst

Day-to-day compliance operations:

- Run assessments (assigned scope)
- View results
- Update remediation status
- Generate reports

### Auditor (Read-Only)

View-only access for external assessors:

- View assessment results
- View remediation status
- Download reports
- No configuration changes

## Managing Users

### Adding Users

1. Navigate to **Settings** > **User Management**
2. Click **Add User**
3. Enter user details:
   - Email address (must exist in your tenant)
   - Display name
   - Role
4. Click **Save**

The user will receive an email invitation.

### Editing Users

1. Find the user in the user list
2. Click **Edit**
3. Modify role or permissions
4. Click **Save**

### Removing Users

1. Find the user in the user list
2. Click **Remove**
3. Confirm the action

:::note
Removing a user does not delete their activity history, which is retained for audit purposes.
:::

## Custom Roles

Create custom roles for specific needs:

1. Go to **Settings** > **Roles**
2. Click **Create Role**
3. Name the role
4. Select permissions
5. Save

## Access Scoping

Limit user access to specific areas:

- **Organizational Units** - Restrict to specific departments
- **Domains** - Limit to specific CMMC domains
- **Controls** - Access to specific control families

## Audit Logging

All user actions are logged:

- Login/logout events
- Configuration changes
- Assessment activities
- Report generation

View logs in **Settings** > **Audit Log**.
