---
sidebar_position: 14
title: System and Communications Protection (SC)
description: NIST SP 800-171 Rev 3 System and Communications Protection requirements - 20 controls for boundary protection.
---

# System and Communications Protection (SC)

**Family Description:** Monitor, control, and protect communications at system boundaries.

**Total Requirements:** 20

## Quick Reference

| ID | Title |
|----|-------|
| [03.13.01](#031301---boundary-protection) | Boundary Protection |
| [03.13.02](#031302---architectural-design) | Architectural Design |
| [03.13.03](#031303---security-function-isolation) | Security Function Isolation |
| [03.13.04](#031304---shared-resources) | Shared Resources |
| [03.13.05](#031305---denial-of-service-protection) | Denial of Service Protection |
| [03.13.06](#031306---network-segmentation) | Network Segmentation |
| [03.13.07](#031307---split-tunneling) | Split Tunneling |
| [03.13.08](#031308---data-at-rest) | Data at Rest |
| [03.13.09](#031309---transmission-confidentiality) | Transmission Confidentiality |
| [03.13.10](#031310---cryptographic-key-management) | Cryptographic Key Management |
| [03.13.11](#031311---fips-validated-cryptography) | FIPS-Validated Cryptography |
| [03.13.12](#031312---collaborative-computing) | Collaborative Computing |
| [03.13.13](#031313---mobile-code) | Mobile Code |
| [03.13.14](#031314---voice-over-ip) | Voice over IP |
| [03.13.15](#031315---protection-of-information-at-rest) | Protection of Information at Rest |
| [03.13.16](#031316---data-in-transit) | Data in Transit |
| [03.13.17](#031317---public-key-infrastructure) | Public-Key Infrastructure |
| [03.13.18](#031318---session-authenticity) | Session Authenticity |
| [03.13.19](#031319---transmission-integrity) | Transmission Integrity |
| [03.13.20](#031320---endpoint-security) | Endpoint Security |

---

## 03.13.01 - Boundary Protection

**Requirement:** Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems.

:::info Discussion
Communications can be monitored, controlled, and protected at boundary components and by restricting or prohibiting interfaces in organizational systems. Boundary components include gateways, routers, firewalls, guards, network-based malicious code analysis, and virtualization systems.
:::

---

## 03.13.02 - Architectural Design

**Requirement:** Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.

:::info Discussion
Organizations apply systems security engineering principles to new development systems or systems undergoing major upgrades. For legacy systems, organizations apply systems security engineering principles to system upgrades and modifications to the extent feasible.
:::

---

## 03.13.03 - Security Function Isolation

**Requirement:** Separate user functionality from system management functionality.

:::info Discussion
System management functionality includes functions necessary to administer databases, network components, workstations, or servers, and typically requires privileged user access. The separation of user functionality from system management functionality is physical or logical.
:::

---

## 03.13.04 - Shared Resources

**Requirement:** Prevent unauthorized and unintended information transfer via shared system resources.

:::info Discussion
This requirement prevents information produced by the actions of prior users or roles or the actions of processes acting on behalf of prior users or roles from being available to current users or roles or processes acting on behalf of current users or roles that obtain access to shared system resources after those resources have been released back to the system.
:::

---

## 03.13.05 - Denial of Service Protection

**Requirement:** Protect against or limit the effects of denial of service attacks.

:::info Discussion
Organizations can employ network-based Intrusion Detection Systems (IDSs) and Intrusion Prevention Systems (IPSs) or employ boundary protection devices to block malicious traffic. Organizations can increase the availability of systems and information by defining alternate processing sites and by implementing distributed processing or storage.
:::

---

## 03.13.06 - Network Segmentation

**Requirement:** Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception).

:::info Discussion
This requirement applies to inbound and outbound network communications traffic at the system boundary and at identified points within the system. A deny-all, permit-by-exception network communications traffic policy ensures that only authorized traffic is allowed.
:::

---

## 03.13.07 - Split Tunneling

**Requirement:** Prevent remote devices from simultaneously establishing non-remote connections with organizational systems and communicating via some other connection to resources in external networks (i.e., split tunneling).

:::info Discussion
Split tunneling might be desirable by remote users to communicate with local system resources such as printers or file servers. However, split tunneling would in effect allow unauthorized external connections, making the system more vulnerable to attack and to exfiltration of organizational information.
:::

---

## 03.13.08 - Data at Rest

**Requirement:** Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.

:::info Discussion
This requirement applies to internal and external networks and any system components that can transmit information including servers, notebook computers, desktop computers, mobile devices, printers, copiers, scanners, and facsimile machines.
:::

---

## 03.13.09 - Transmission Confidentiality

**Requirement:** Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity.

:::info Discussion
This requirement applies to internal and external networks. Terminating network connections associated with communications sessions includes de-allocating TCP/IP address or port pairs at the operating system level, or de-allocating networking assignments at the application level.
:::

---

## 03.13.10 - Cryptographic Key Management

**Requirement:** Establish and manage cryptographic keys for cryptography employed in organizational systems.

:::info Discussion
Cryptographic key management and establishment can be performed using manual procedures or automated mechanisms with supporting manual procedures. Organizations define key management requirements in accordance with applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance.
:::

---

## 03.13.11 - FIPS-Validated Cryptography

**Requirement:** Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.

:::info Discussion
Cryptography can be employed to support many security solutions including the protection of CUI, the provision of digital signatures, and the enforcement of information separation when authorized individuals have the necessary clearances for such information but lack the necessary formal access approvals.
:::

---

## 03.13.12 - Collaborative Computing

**Requirement:** Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device.

:::info Discussion
Collaborative computing devices include networked white boards, cameras, and microphones. Indication of use includes signals to users when collaborative computing devices are activated.
:::

---

## 03.13.13 - Mobile Code

**Requirement:** Control and monitor the use of mobile code.

:::info Discussion
Mobile code technologies include Java, JavaScript, ActiveX, Postscript, PDF, Flash animations, and VBScript. Usage restrictions and implementation guidance apply to both the selection and use of mobile code installed on organizational servers and mobile code downloaded and executed on individual workstations.
:::

---

## 03.13.14 - Voice over IP

**Requirement:** Control and monitor the use of Voice over Internet Protocol (VoIP) technologies.

:::info Discussion
VoIP technologies include voice over internet, voice over broadband, IP telephony, and internet telephony. VoIP technologies are often used in combination with centralized enterprise-wide technologies like unified communications and network convergence.
:::

---

## 03.13.15 - Protection of Information at Rest

**Requirement:** Protect the authenticity of communications sessions.

:::info Discussion
Authenticity protection includes protecting against man-in-the-middle attacks, session hijacking, and the insertion of false information into communications sessions. This requirement addresses communications protection at the session level, not at the packet level.
:::

---

## 03.13.16 - Data in Transit

**Requirement:** Protect the confidentiality of CUI at rest.

:::info Discussion
Information at rest refers to the state of information when it is not in process or in transit and is located on storage devices. The focus of protection at rest is not on the type of storage device or frequency of access but rather on the state of the information.
:::

---

## 03.13.17 - Public-Key Infrastructure

**Requirement:** Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks.

:::info Discussion
Subnetworks that are physically or logically separated from internal networks are referred to as demilitarized zones (DMZs). DMZs are typically implemented with boundary control devices and techniques that include routers, gateways, firewalls, virtualization, or cloud-based technologies.
:::

---

## 03.13.18 - Session Authenticity

**Requirement:** Control information flows within systems and between interconnected systems.

:::info Discussion
Information flow control restricts information transfers such that only authorized flows are permitted. Organizations may choose to place limiting controls on organizational systems to restrict the flow of CUI to approved sources and destinations.
:::

---

## 03.13.19 - Transmission Integrity

**Requirement:** Protect wireless access using authentication and encryption.

:::info Discussion
Wireless networking capabilities can be exploited to eavesdrop on wireless communications, gain unauthorized access, or disrupt normal operations. Organizations employ authentication mechanisms such as IEEE 802.1x and EAP, and employ cryptographic mechanisms such as WPA2 or WPA3.
:::

---

## 03.13.20 - Endpoint Security

**Requirement:** Protect the integrity of transmitted information.

:::info Discussion
This requirement applies to internal and external networks and all system components that can transmit information including servers, notebook computers, desktop computers, mobile devices, printers, copiers, scanners, facsimile machines, and radios.
:::

---

*Source: NIST Special Publication 800-171 Revision 3*
