---
sidebar_position: 2
title: Access Control (AC)
description: NIST SP 800-171 Rev 3 Access Control requirements - 22 controls for limiting system access to authorized users.
---

# Access Control (AC)

**Family Description:** Limit system access to authorized users, processes acting on behalf of authorized users, and devices.

**Total Requirements:** 22

## Quick Reference

| ID | Title |
|----|-------|
| [03.01.01](#030101---authorized-access-control) | Authorized Access Control |
| [03.01.02](#030102---transaction--function-control) | Transaction & Function Control |
| [03.01.03](#030103---external-connections) | External Connections |
| [03.01.04](#030104---separation-of-duties) | Separation of Duties |
| [03.01.05](#030105---least-privilege) | Least Privilege |
| [03.01.06](#030106---non-privileged-account-use) | Non-Privileged Account Use |
| [03.01.07](#030107---privileged-functions) | Privileged Functions |
| [03.01.08](#030108---unsuccessful-logon-attempts) | Unsuccessful Logon Attempts |
| [03.01.09](#030109---privacy--security-notices) | Privacy & Security Notices |
| [03.01.10](#030110---session-lock) | Session Lock |
| [03.01.11](#030111---session-termination) | Session Termination |
| [03.01.12](#030112---control-remote-access) | Control Remote Access |
| [03.01.13](#030113---remote-access-confidentiality) | Remote Access Confidentiality |
| [03.01.14](#030114---route-remote-access) | Route Remote Access |
| [03.01.15](#030115---privileged-remote-access) | Privileged Remote Access |
| [03.01.16](#030116---wireless-access-authorization) | Wireless Access Authorization |
| [03.01.17](#030117---wireless-access-protection) | Wireless Access Protection |
| [03.01.18](#030118---mobile-device-connection) | Mobile Device Connection |
| [03.01.19](#030119---encrypt-cui-on-mobile) | Encrypt CUI on Mobile |
| [03.01.20](#030120---external-system-use) | External System Use |
| [03.01.21](#030121---portable-storage-use) | Portable Storage Use |
| [03.01.22](#030122---control-public-information) | Control Public Information |

---

## 03.01.01 - Authorized Access Control

**Requirement:** Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems).

:::info Discussion
Access control policies (e.g., identity-based, role-based, attribute-based) and associated access enforcement mechanisms (e.g., access control lists, access control matrices, cryptography) are employed by organizations to control access between users and processes and between systems. Organizations consider the implementation of access control policies through software, hardware, or a combination of both.
:::

---

## 03.01.02 - Transaction & Function Control

**Requirement:** Limit system access to the types of transactions and functions that authorized users are permitted to execute.

:::info Discussion
Organizations may choose to define access privileges or other attributes by account, by type of account, or a combination of both. System account types include individual, shared, group, system, anonymous, guest, emergency, developer, manufacturer, vendor, and temporary. Other attributes required for authorizing access include restrictions on time-of-day, day-of-week, and point-of-origin.
:::

---

## 03.01.03 - External Connections

**Requirement:** Control the flow of CUI in accordance with approved authorizations.

:::info Discussion
Information flow control regulates where CUI can travel within a system and between interconnected systems. Flow control restrictions include keeping export-controlled information from being transmitted in the clear to the internet, blocking outside traffic that claims to be from within the organization, restricting requests to the internet that are not from the internal web proxy server, and limiting information transfers between organizations based on data structures and content.
:::

---

## 03.01.04 - Separation of Duties

**Requirement:** Separate the duties of individuals to reduce the risk of malevolent activity without collusion.

:::info Discussion
Separation of duties addresses the potential for abuse of authorized privileges and helps to reduce the risk of malevolent activity without collusion. Separation of duties includes dividing mission functions and system support functions among different individuals or roles, conducting system support functions with different individuals, and ensuring security personnel administering access control functions do not also administer audit functions.
:::

---

## 03.01.05 - Least Privilege

**Requirement:** Employ the principle of least privilege, including for specific security functions and privileged accounts.

:::info Discussion
Organizations employ least privilege for specific duties and systems. The principle of least privilege is also applied to system processes, ensuring that the processes operate at privilege levels no higher than necessary to accomplish organizational missions or business functions. Organizations consider the creation of additional processes, roles, and system accounts as necessary to achieve least privilege.
:::

---

## 03.01.06 - Non-Privileged Account Use

**Requirement:** Use non-privileged accounts or roles when accessing nonsecurity functions.

:::info Discussion
This requirement limits exposure when operating from within privileged accounts or roles. The inclusion of roles addresses situations where organizations implement access control policies such as role-based access control and where a change of role provides the same degree of assurance in the change of access authorizations for the user and all processes acting on behalf of the user as would be provided by a change between a privileged and non-privileged account.
:::

---

## 03.01.07 - Privileged Functions

**Requirement:** Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs.

:::info Discussion
Privileged functions include establishing system accounts, performing system integrity checks, conducting patching operations, or administering cryptographic key management activities. Non-privileged users are individuals that do not possess appropriate authorizations. Privileged functions that require protection from non-privileged users include circumventing intrusion detection and prevention mechanisms or malicious code protection mechanisms.
:::

---

## 03.01.08 - Unsuccessful Logon Attempts

**Requirement:** Limit unsuccessful logon attempts.

:::info Discussion
Due to the potential for denial of service, automatic lockouts initiated by systems are usually temporary and automatically release after a predetermined time period established by organizations. If a delay algorithm is selected, organizations may choose to employ different algorithms for different components of the system based on the capabilities of those components.
:::

---

## 03.01.09 - Privacy & Security Notices

**Requirement:** Provide privacy and security notices consistent with applicable CUI rules.

:::info Discussion
System use notifications can be implemented using messages or warning banners displayed before individuals log in to systems. System use notifications are used only for access via logon interfaces with human users and are not required when such human interfaces do not exist.
:::

---

## 03.01.10 - Session Lock

**Requirement:** Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity.

:::info Discussion
Session locks are temporary actions taken when users stop work and move away from the immediate vicinity of the system but do not want to log out because of the temporary nature of their absences. Pattern-hiding displays can include static or dynamic images.
:::

---

## 03.01.11 - Session Termination

**Requirement:** Terminate (automatically) a user session after a defined condition.

:::info Discussion
This requirement addresses the termination of user-initiated logical sessions in contrast to the termination of network connections that are associated with communications sessions. A logical session is initiated whenever a user or process accesses systems. Organizations can establish session termination after an absolute time period, after a certain period of inactivity, or by explicit user action.
:::

---

## 03.01.12 - Control Remote Access

**Requirement:** Monitor and control remote access sessions.

:::info Discussion
Remote access is access to organizational systems by users communicating through external networks. Examples of remote access methods include dial-up, broadband, and wireless. Organizations often employ encrypted virtual private networks (VPNs) to enhance confidentiality and integrity over remote connections.
:::

---

## 03.01.13 - Remote Access Confidentiality

**Requirement:** Employ cryptographic mechanisms to protect the confidentiality of remote access sessions.

:::info Discussion
Cryptographic standards include FIPS-validated cryptography and NSA-approved cryptography. See NIST FIPS 140-3 and NIST FIPS 197.
:::

---

## 03.01.14 - Route Remote Access

**Requirement:** Route remote access via managed access control points.

:::info Discussion
Routing remote access through managed access control points enhances explicit, organizational control over such connections, reducing the susceptibility to unauthorized access to organizational systems and CUI.
:::

---

## 03.01.15 - Privileged Remote Access

**Requirement:** Authorize remote execution of privileged commands and remote access to security-relevant information.

:::info Discussion
A privileged command is a human-initiated command executed on a system involving the control, monitoring, or administration of the system including security functions and associated security-relevant information. Security-relevant information is any information within systems that can potentially impact organizational operations, organizational assets, or individuals.
:::

---

## 03.01.16 - Wireless Access Authorization

**Requirement:** Authorize wireless access prior to allowing such connections.

:::info Discussion
Establishing usage restrictions and configuration/connection requirements for wireless access to systems is critical to mitigating potential threats from attackers. Wireless technologies include microwave, packet radio, 802.11x, and Bluetooth.
:::

---

## 03.01.17 - Wireless Access Protection

**Requirement:** Protect wireless access using authentication and encryption.

:::info Discussion
Wireless networking capabilities can be exploited to eavesdrop on wireless communications, gain unauthorized access, and disrupt normal operations. Organizations employ authentication mechanisms for wireless access that can be configured to provide strong, cryptographic protections.
:::

---

## 03.01.18 - Mobile Device Connection

**Requirement:** Control connection of mobile devices.

:::info Discussion
Due to the large variety of mobile devices with different technical characteristics and capabilities, organizational restrictions may vary. Usage restrictions and specific implementation guidance are covered in other security requirements.
:::

---

## 03.01.19 - Encrypt CUI on Mobile

**Requirement:** Encrypt CUI on mobile devices and mobile computing platforms.

:::info Discussion
Organizations can employ full-device encryption or container-based encryption to protect CUI on mobile devices and mobile computing platforms. Container-based encryption provides a more fine-grained approach to data and information encryption on mobile devices and mobile computing platforms.
:::

---

## 03.01.20 - External System Use

**Requirement:** Verify and control/limit connections to and use of external systems.

:::info Discussion
External systems are systems or components of systems for which organizations typically have no direct control over the implementation of required security controls or the assessment of security control effectiveness. External systems include personally owned systems, components, or devices and privately-owned computing and communications devices resident in commercial facilities.
:::

---

## 03.01.21 - Portable Storage Use

**Requirement:** Limit use of portable storage devices on external systems.

:::info Discussion
Limits on the use of portable storage devices are aimed at protecting against malicious code and sensitive information exfiltration. The requirement recognizes that the use of portable storage devices for legitimate business purposes is common and necessary for many organizations.
:::

---

## 03.01.22 - Control Public Information

**Requirement:** Control CUI posted or processed on publicly accessible systems.

:::info Discussion
In accordance with laws, executive orders, directives, policies, regulations, or standards, the public is not authorized to have access to nonpublic information, including CUI. The requirement addresses systems that are controlled by the organization and accessible to the public, typically without identification or authentication.
:::

---

*Source: NIST Special Publication 800-171 Revision 3*
