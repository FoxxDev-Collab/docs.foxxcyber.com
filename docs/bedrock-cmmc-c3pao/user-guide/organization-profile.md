import ThemedImage from '@theme/ThemedImage';

# Organization Profile

Manage your C3PAO organization's profile, marketplace listing, and accreditation credentials. Your profile is visible to customers browsing the C3PAO marketplace.

---

## Accessing Profile Settings

Navigate to **Profile** from the top navigation bar to manage your organization's information.

{/* <!-- SCREENSHOT: c3pao-profile-page — The full organization profile page showing the profile statistics at top and the tabbed interface (Profile, Marketplace, Credentials) --> */}
<ThemedImage
  alt="Organization Profile"
  sources={{
    light: '/img/screenshots/c3pao/profile-page-light.png',
    dark: '/img/screenshots/c3pao/profile-page-dark.png',
  }}
/>

### Profile Statistics

| Metric | Description |
|--------|-------------|
| **Rating** | Average customer review score |
| **Engagements** | Total completed assessments |
| **Status** | Organization active/inactive status |
| **Marketplace** | Listing visibility (visible/hidden) |

{/* <!-- SCREENSHOT: c3pao-profile-stats — Close-up of the profile statistics cards --> */}
<ThemedImage
  alt="Profile Statistics"
  sources={{
    light: '/img/screenshots/c3pao/profile-stats-light.png',
    dark: '/img/screenshots/c3pao/profile-stats-dark.png',
  }}
/>

---

## Profile Tab

Manage your organization's basic contact information and branding.

{/* <!-- SCREENSHOT: c3pao-profile-tab — The Profile tab showing logo upload, phone, website, address, and description fields --> */}
<ThemedImage
  alt="Profile Tab"
  sources={{
    light: '/img/screenshots/c3pao/profile-tab-light.png',
    dark: '/img/screenshots/c3pao/profile-tab-dark.png',
  }}
/>

| Field | Description |
|-------|-------------|
| **Organization Name** | Your C3PAO organization name |
| **Logo** | Organization logo (click camera icon to upload) |
| **Phone** | Contact phone number |
| **Website** | Company website URL |
| **Description** | Brief organization description |
| **Address** | Full mailing address (street, city, state, zip) |

### Uploading a Logo

Click the camera icon on your logo area to upload a new image.

- Supported formats: PNG, JPG, GIF
- Maximum size: 2MB
- Recommended: Square image, at least 200x200px

{/* <!-- SCREENSHOT: c3pao-logo-upload — The logo upload area showing the camera icon overlay and current logo --> */}
<ThemedImage
  alt="Logo Upload"
  sources={{
    light: '/img/screenshots/c3pao/logo-upload-light.png',
    dark: '/img/screenshots/c3pao/logo-upload-dark.png',
  }}
/>

---

## Marketplace Tab

Configure how your organization appears to customers browsing the C3PAO marketplace.

{/* <!-- SCREENSHOT: c3pao-marketplace-tab — The Marketplace tab showing description, services, pricing, timeline, and specialties fields --> */}
<ThemedImage
  alt="Marketplace Tab"
  sources={{
    light: '/img/screenshots/c3pao/marketplace-tab-light.png',
    dark: '/img/screenshots/c3pao/marketplace-tab-dark.png',
  }}
/>

### Marketplace Fields

| Field | Description |
|-------|-------------|
| **Description** | Detailed overview of your assessment services |
| **Services Offered** | List of assessment and consulting services |
| **Pricing Information** | General pricing guidance for customers |
| **Typical Timeline** | Average assessment duration |
| **Specialties** | Industry expertise areas (select multiple) |

### Specialties

Select all industries where your organization has expertise:

| Specialty | Description |
|-----------|-------------|
| Manufacturing | Industrial and manufacturing environments |
| Healthcare | Healthcare and medical device organizations |
| Financial Services | Banking, finance, and insurance |
| Government Contractors | Federal contractors and subcontractors |
| Technology | Software and IT services companies |
| Aerospace & Defense | Aerospace and defense industry |
| Small Business | Small business CMMC support |
| Cloud | Cloud-native and hybrid environments |

{/* <!-- SCREENSHOT: c3pao-specialties-selector — The specialties multi-select showing available industry options with checkboxes --> */}
<ThemedImage
  alt="Specialties Selection"
  sources={{
    light: '/img/screenshots/c3pao/specialties-selector-light.png',
    dark: '/img/screenshots/c3pao/specialties-selector-dark.png',
  }}
/>

---

## Credentials Tab

View and manage your organization's accreditation information.

{/* <!-- SCREENSHOT: c3pao-credentials-tab — The Credentials tab showing Cyber-AB Accreditation ID, CAGE Code, and authorized CMMC levels --> */}
<ThemedImage
  alt="Credentials Tab"
  sources={{
    light: '/img/screenshots/c3pao/credentials-tab-light.png',
    dark: '/img/screenshots/c3pao/credentials-tab-dark.png',
  }}
/>

### Accreditation Information

| Field | Description | Editable |
|-------|-------------|----------|
| **Cyber-AB Accreditation ID** | Official accreditation number | Admin only |
| **CAGE Code** | Government contractor code | Admin only |
| **Authorized CMMC Levels** | Levels you're authorized to assess | Yes |

### Authorized CMMC Levels

Select the CMMC levels your organization is authorized to assess:

| Level | Description |
|-------|-------------|
| **Level 1** | Basic Cyber Hygiene (17 practices) |
| **Level 2** | Advanced (110 NIST SP 800-171 requirements) |
| **Level 3** | Expert (additional NIST SP 800-172 requirements) |

{/* <!-- SCREENSHOT: c3pao-authorized-levels — The authorized CMMC levels checkboxes showing Level 1, 2, and 3 options --> */}
<ThemedImage
  alt="Authorized Levels"
  sources={{
    light: '/img/screenshots/c3pao/authorized-levels-light.png',
    dark: '/img/screenshots/c3pao/authorized-levels-dark.png',
  }}
/>

:::warning
Accreditation ID and CAGE Code are verified by platform administrators. Contact support at support@bedrockcmmc.com to update these credentials.
:::

---

## Saving Changes

Click **Save** on any tab to persist your changes. Changes to your marketplace profile are reflected immediately in the customer-facing marketplace.

---

## Next Steps

- [Team Management](./team-management) — Manage your team members and credentials
- [Getting Started](./getting-started) — Return to the dashboard overview
