---
sidebar_position: 8
title: Maintenance (MA)
description: NIST SP 800-171 Rev 3 Maintenance requirements - 6 controls for system maintenance and repairs.
---

# Maintenance (MA)

**Family Description:** Perform maintenance and manage repairs for organizational systems.

**Total Requirements:** 6

## Quick Reference

| ID | Title |
|----|-------|
| [03.07.01](#030701---system-maintenance) | System Maintenance |
| [03.07.02](#030702---maintenance-controls) | Maintenance Controls |
| [03.07.03](#030703---timely-maintenance) | Timely Maintenance |
| [03.07.04](#030704---maintenance-tools) | Maintenance Tools |
| [03.07.05](#030705---nonlocal-maintenance) | Nonlocal Maintenance |
| [03.07.06](#030706---maintenance-personnel) | Maintenance Personnel |

---

## 03.07.01 - System Maintenance

**Requirement:** Perform maintenance on organizational systems.

:::info Discussion
Controlling system maintenance addresses the information security aspects of the system maintenance program and applies to all types of maintenance to systems located either onsite or offsite. System maintenance also includes those components not directly associated with system processing or data/information retention.
:::

---

## 03.07.02 - Maintenance Controls

**Requirement:** Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.

:::info Discussion
This requirement addresses security-related issues with maintenance tools that are not within organizational systems and are used specifically for diagnostic and repair actions on systems. Organizations have flexibility in determining roles for maintenance personnel and whether contractors or organizational personnel conduct system maintenance.
:::

---

## 03.07.03 - Timely Maintenance

**Requirement:** Ensure equipment removed for off-site maintenance is sanitized of any CUI.

:::info Discussion
This requirement addresses the information security aspects of system components removed for off-site maintenance. Organizations can use different sanitization techniques, including clearing, purging, cryptographic erase, or destruction, depending on the component.
:::

---

## 03.07.04 - Maintenance Tools

**Requirement:** Check media containing diagnostic and test programs for malicious code before the media are used in organizational systems.

:::info Discussion
If, upon inspection of media containing maintenance diagnostic and test programs, organizations determine that the media contain malicious code, the incident is handled consistent with organizational incident handling policies and procedures.
:::

---

## 03.07.05 - Nonlocal Maintenance

**Requirement:** Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete.

:::info Discussion
Nonlocal maintenance and diagnostic activities are conducted by individuals communicating through an external network. Local maintenance and diagnostic activities are carried out by individuals who are physically present at the system and not communicating across a network connection.
:::

---

## 03.07.06 - Maintenance Personnel

**Requirement:** Supervise the maintenance activities of maintenance personnel without required access authorization.

:::info Discussion
This requirement applies to individuals who are performing hardware or software maintenance on organizational systems, while [03.10.01] addresses physical access for individuals whose maintenance duties place them within the physical protection perimeter.
:::

---

*Source: NIST Special Publication 800-171 Revision 3*
