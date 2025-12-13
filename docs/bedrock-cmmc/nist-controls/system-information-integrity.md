---
sidebar_position: 15
title: System and Information Integrity (SI)
description: NIST SP 800-171 Rev 3 System and Information Integrity requirements - 17 controls for identifying and correcting system flaws.
---

# System and Information Integrity (SI)

**Family Description:** Identify, report, and correct system flaws in a timely manner.

**Total Requirements:** 17

## Quick Reference

| ID | Title |
|----|-------|
| [03.14.01](#031401---flaw-remediation) | Flaw Remediation |
| [03.14.02](#031402---malicious-code-protection) | Malicious Code Protection |
| [03.14.03](#031403---malicious-code-updates) | Malicious Code Updates |
| [03.14.04](#031404---security-alerts--advisories) | Security Alerts & Advisories |
| [03.14.05](#031405---system--file-scanning) | System & File Scanning |
| [03.14.06](#031406---network-monitoring) | Network Monitoring |
| [03.14.07](#031407---monitoring-tools) | Monitoring Tools |
| [03.14.08](#031408---spam-protection) | Spam Protection |
| [03.14.09](#031409---information-input-validation) | Information Input Validation |
| [03.14.10](#031410---error-handling) | Error Handling |
| [03.14.11](#031411---error-message-information-disclosure) | Error Message Information Disclosure |
| [03.14.12](#031412---information-system-output-handling) | Information System Output Handling |
| [03.14.13](#031413---data-integrity--validation) | Data Integrity & Validation |
| [03.14.14](#031414---memory-protection) | Memory Protection |
| [03.14.15](#031415---session-lock) | Session Lock |
| [03.14.16](#031416---software--information-integrity) | Software & Information Integrity |
| [03.14.17](#031417---least-functionality) | Least Functionality |

---

## 03.14.01 - Flaw Remediation

**Requirement:** Identify, report, and correct system flaws in a timely manner.

:::info Discussion
Organizations identify systems that are affected by announced software and firmware flaws including potential vulnerabilities resulting from those flaws and report this information to designated organizational personnel with information security responsibilities.
:::

---

## 03.14.02 - Malicious Code Protection

**Requirement:** Provide protection from malicious code at designated locations within organizational systems.

:::info Discussion
Designated locations include system entry and exit points which may include firewalls, remote-access servers, workstations, electronic mail servers, web servers, proxy servers, notebook computers, and mobile devices. Malicious code includes viruses, worms, Trojan horses, and spyware.
:::

---

## 03.14.03 - Malicious Code Updates

**Requirement:** Monitor system security alerts and advisories and take action in response.

:::info Discussion
Organizations identify and monitor sources of system security alerts and advisories on an ongoing basis. Sources of information include United States Computer Emergency Readiness Team (US-CERT), information sharing and analysis centers, and vendor and information system developer advisories.
:::

---

## 03.14.04 - Security Alerts & Advisories

**Requirement:** Update malicious code protection mechanisms when new releases are available.

:::info Discussion
Malicious code protection mechanisms include anti-virus signature definitions, rules, and heuristic signatures. The use of automated mechanisms can help to assure the timeliness of malicious code protection mechanism updates.
:::

---

## 03.14.05 - System & File Scanning

**Requirement:** Perform periodic scans of organizational systems and real-time scans of files from external sources as files are downloaded, opened, or executed.

:::info Discussion
Periodic scanning for malicious code includes scanning all media used for system installation or update and scanning on a periodic basis for malicious code on all file servers, notebooks, workstations, and mobile devices when connected to the network.
:::

---

## 03.14.06 - Network Monitoring

**Requirement:** Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks.

:::info Discussion
System monitoring includes external and internal monitoring. External monitoring includes the observation of events occurring at the system boundary. Internal monitoring includes the observation of events occurring within the system.
:::

---

## 03.14.07 - Monitoring Tools

**Requirement:** Identify unauthorized use of organizational systems.

:::info Discussion
System monitoring includes external and internal monitoring. System monitoring can detect unauthorized use of organizational systems. System monitoring can be provided by audit logging and by security event monitoring tools such as Security Information and Event Management (SIEM) systems.
:::

---

## 03.14.08 - Spam Protection

**Requirement:** Implement spam protection mechanisms at designated system entry and exit points.

:::info Discussion
Spam is unsolicited email messages that can contain malicious code, advertisements, pornography, deceptive messages, or other types of unwanted or inappropriate content. Spam protection mechanisms include gateway spam filters and email anti-spam software.
:::

---

## 03.14.09 - Information Input Validation

**Requirement:** Use security functions that verify or validate information.

:::info Discussion
Security functions that verify or validate information include hash functions, checksums, and cyclic redundancy checks. Organizations verify the authenticity of software and firmware components obtained from external sources such as vendors.
:::

---

## 03.14.10 - Error Handling

**Requirement:** Handle and retain error messages to support auditing and analysis.

:::info Discussion
The intent of this requirement is for the organization to identify error messages that could reveal information about the system that could be exploited by adversaries. Organizations carefully consider the structure and content of error messages.
:::

---

## 03.14.11 - Error Message Information Disclosure

**Requirement:** Reveal error messages only to authorized personnel.

:::info Discussion
In some situations, systems need to reveal detailed error messages only to authorized personnel. However, the extent to which systems can identify and handle error conditions is guided and informed by organizational policy and operational requirements.
:::

---

## 03.14.12 - Information System Output Handling

**Requirement:** Protect output from information systems and repositories.

:::info Discussion
Outputs from organizational systems include screens, printed pages, or files. Some types of output are obvious while others are not. Organizations implement mechanisms to ensure outputs containing CUI are properly protected.
:::

---

## 03.14.13 - Data Integrity & Validation

**Requirement:** Employ data validation to ensure that input and output of information are correct and complete.

:::info Discussion
Data validation, which is a part of information input and output validation, provides organizations with assurance that information is correct and complete before being used, transmitted, or stored. Organizations employ data validation mechanisms at the points where information enters the system.
:::

---

## 03.14.14 - Memory Protection

**Requirement:** Implement security safeguards to protect system memory from unauthorized code execution.

:::info Discussion
Security safeguards that can be employed to protect system memory include data execution prevention and address space layout randomization. Data execution prevention safeguards can either be hardware-enforced or software-enforced with hardware providing the greater strength of protection mechanism.
:::

---

## 03.14.15 - Session Lock

**Requirement:** Protect system clocks and clock synchronization mechanisms from unauthorized changes and manipulation.

:::info Discussion
System clocks are used to generate time stamps for audit records. Time is commonly expressed in Coordinated Universal Time (UTC), a modern continuation of Greenwich Mean Time (GMT), or local time with an offset from UTC.
:::

---

## 03.14.16 - Software & Information Integrity

**Requirement:** Employ integrity verification tools to detect unauthorized changes to software, firmware, and information.

:::info Discussion
Organizations employ integrity verification tools to identify changes and identify unauthorized changes to software, firmware, and information. Integrity verification tools include file integrity monitoring tools, checksum utilities, host-based intrusion detection systems, and cyclic redundancy checks.
:::

---

## 03.14.17 - Least Functionality

**Requirement:** Employ spam protection mechanisms at entry and exit points.

:::info Discussion
Spam can be transported by different means including email and web accesses. Spam protection mechanisms include signature definitions.
:::

---

*Source: NIST Special Publication 800-171 Revision 3*
