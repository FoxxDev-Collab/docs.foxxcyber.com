---
sidebar_position: 5
title: Configuration Management (CM)
description: NIST SP 800-171 Rev 3 Configuration Management requirements - 11 controls for system baselines and change control.
---

# Configuration Management (CM)

**Family Description:** Establish and maintain baseline configurations and inventories.

**Total Requirements:** 11

## Quick Reference

| ID | Title |
|----|-------|
| [03.04.01](#030401---baseline-configuration) | Baseline Configuration |
| [03.04.02](#030402---configuration-change-control) | Configuration Change Control |
| [03.04.03](#030403---track-changes) | Track Changes |
| [03.04.04](#030404---security-impact-analysis) | Security Impact Analysis |
| [03.04.05](#030405---access-restrictions) | Access Restrictions |
| [03.04.06](#030406---least-functionality) | Least Functionality |
| [03.04.07](#030407---nonessential-programs) | Nonessential Programs |
| [03.04.08](#030408---user-installed-software) | User-Installed Software |
| [03.04.09](#030409---control--monitor-user-installed-software) | Control & Monitor User-Installed Software |
| [03.04.10](#030410---software-usage-restrictions) | Software Usage Restrictions |
| [03.04.11](#030411---application-whitelisting) | Application Whitelisting |

---

## 03.04.01 - Baseline Configuration

**Requirement:** Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles.

:::info Discussion
Baseline configurations are documented, formally reviewed, and agreed-upon specifications for systems or configuration items within those systems. Baseline configurations serve as a basis for future builds, releases, and changes to systems. Baseline configurations include information about system components, network topology, and the logical placement of those components within the system architecture.
:::

---

## 03.04.02 - Configuration Change Control

**Requirement:** Establish and enforce security configuration settings for information technology products employed in organizational systems.

:::info Discussion
Configuration settings are the set of parameters that can be changed in hardware, software, or firmware components of the system that affect the security posture or functionality of the system. Security-related parameters are those parameters impacting the security state of systems including the parameters required to satisfy other security requirements.
:::

---

## 03.04.03 - Track Changes

**Requirement:** Track, review, approve or disapprove, and log changes to organizational systems.

:::info Discussion
Tracking, reviewing, approving/disapproving, and logging changes is called configuration change control. Configuration change control for organizational systems involves the systematic proposal, justification, implementation, testing, review, and disposition of changes to the systems, including system upgrades and modifications.
:::

---

## 03.04.04 - Security Impact Analysis

**Requirement:** Analyze the security impact of changes prior to implementation.

:::info Discussion
Organizational personnel with system security responsibilities conduct security impact analyses. Individuals conducting security impact analyses possess the necessary skills and technical expertise to analyze the changes to systems and the associated security ramifications.
:::

---

## 03.04.05 - Access Restrictions

**Requirement:** Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems.

:::info Discussion
Any changes to the hardware, software, or firmware components of systems can potentially have significant effects on the overall security of the systems. Therefore, organizations permit only qualified and authorized individuals to access systems for purposes of initiating changes.
:::

---

## 03.04.06 - Least Functionality

**Requirement:** Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities.

:::info Discussion
Systems can provide a wide variety of functions and services. Some of the functions and services routinely provided by default may not be necessary to support essential organizational missions or functions. The principle of least functionality is applied with the goal of reducing attack surface.
:::

---

## 03.04.07 - Nonessential Programs

**Requirement:** Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services.

:::info Discussion
Restricting the use of nonessential functions and services reduces attack surface. This requirement does not apply to kernel subsystems or other functions of the operating system.
:::

---

## 03.04.08 - User-Installed Software

**Requirement:** Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software.

:::info Discussion
The process used to identify software programs that are not authorized to execute on organizational systems is commonly referred to as blacklisting. The process used to identify software programs that are authorized to execute on organizational systems is commonly referred to as whitelisting.
:::

---

## 03.04.09 - Control & Monitor User-Installed Software

**Requirement:** Control and monitor user-installed software.

:::info Discussion
Users install software on organizational systems for a variety of reasons. Users can be provided with the necessary privileges to install software to ensure that they have the capabilities required to accomplish organizational missions and business functions. Organizations have options for controlling and monitoring user-installed software.
:::

---

## 03.04.10 - Software Usage Restrictions

**Requirement:** Enforce software usage and installation restrictions.

:::info Discussion
Organizations may want to restrict the use of certain types of software including file sharing and peer-to-peer software. The use of prohibited software, including unauthorized software, is generally tracked through the use of technologies such as software asset management systems.
:::

---

## 03.04.11 - Application Whitelisting

**Requirement:** Implement application whitelisting to prevent the execution of malicious or unauthorized software.

:::info Discussion
Application whitelisting is the identification of applications that are permitted to execute on systems. Application whitelisting is provided by application control functions of operating systems, host-based security software, and virtualization systems.
:::

---

*Source: NIST Special Publication 800-171 Revision 3*
