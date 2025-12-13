---
sidebar_position: 99
title: Complete Control List
description: All 110 NIST SP 800-171 Rev 3 security requirements in a single reference document.
---

# NIST SP 800-171 Rev 3 Security Requirements

:::tip Quick Reference
This page contains all 110 security requirements in a single document. For easier navigation, use the [individual control family pages](./index).
:::

This document contains all 110 security requirements from NIST Special Publication 800-171 Revision 3, organized by control family. These requirements form the foundation for CMMC Level 2 compliance.

## Overview

| Family | Code | Requirements |
|--------|------|--------------|
| [Access Control](#access-control-ac) | AC | 22 |
| [Awareness and Training](#awareness-and-training-at) | AT | 3 |
| [Audit and Accountability](#audit-and-accountability-au) | AU | 9 |
| [Configuration Management](#configuration-management-cm) | CM | 11 |
| [Identification and Authentication](#identification-and-authentication-ia) | IA | 11 |
| [Incident Response](#incident-response-ir) | IR | 6 |
| [Maintenance](#maintenance-ma) | MA | 6 |
| [Media Protection](#media-protection-mp) | MP | 7 |
| [Personnel Security](#personnel-security-ps) | PS | 2 |
| [Physical Protection](#physical-protection-pe) | PE | 6 |
| [Risk Assessment](#risk-assessment-ra) | RA | 3 |
| [System and Services Acquisition](#system-and-services-acquisition-sa) | SA | 5 |
| [System and Communications Protection](#system-and-communications-protection-sc) | SC | 20 |
| [System and Information Integrity](#system-and-information-integrity-si) | SI | 17 |
| **Total** | | **110** |

---

## Access Control (AC)

*Limit system access to authorized users, processes acting on behalf of authorized users, and devices.*

### 03.01.01 - Authorized Access Control

**Requirement:** Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems).

**Discussion:** Access control policies (e.g., identity-based, role-based, attribute-based) and associated access enforcement mechanisms (e.g., access control lists, access control matrices, cryptography) are employed by organizations to control access between users and processes and between systems. Organizations consider the implementation of access control policies through software, hardware, or a combination of both.

---

### 03.01.02 - Transaction & Function Control

**Requirement:** Limit system access to the types of transactions and functions that authorized users are permitted to execute.

**Discussion:** Organizations may choose to define access privileges or other attributes by account, by type of account, or a combination of both. System account types include individual, shared, group, system, anonymous, guest, emergency, developer, manufacturer, vendor, and temporary. Other attributes required for authorizing access include restrictions on time-of-day, day-of-week, and point-of-origin.

---

### 03.01.03 - External Connections

**Requirement:** Control the flow of CUI in accordance with approved authorizations.

**Discussion:** Information flow control regulates where CUI can travel within a system and between interconnected systems. Flow control restrictions include keeping export-controlled information from being transmitted in the clear to the internet, blocking outside traffic that claims to be from within the organization, restricting requests to the internet that are not from the internal web proxy server, and limiting information transfers between organizations based on data structures and content.

---

### 03.01.04 - Separation of Duties

**Requirement:** Separate the duties of individuals to reduce the risk of malevolent activity without collusion.

**Discussion:** Separation of duties addresses the potential for abuse of authorized privileges and helps to reduce the risk of malevolent activity without collusion. Separation of duties includes dividing mission functions and system support functions among different individuals or roles, conducting system support functions with different individuals, and ensuring security personnel administering access control functions do not also administer audit functions.

---

### 03.01.05 - Least Privilege

**Requirement:** Employ the principle of least privilege, including for specific security functions and privileged accounts.

**Discussion:** Organizations employ least privilege for specific duties and systems. The principle of least privilege is also applied to system processes, ensuring that the processes operate at privilege levels no higher than necessary to accomplish organizational missions or business functions. Organizations consider the creation of additional processes, roles, and system accounts as necessary to achieve least privilege.

---

### 03.01.06 - Non-Privileged Account Use

**Requirement:** Use non-privileged accounts or roles when accessing nonsecurity functions.

**Discussion:** This requirement limits exposure when operating from within privileged accounts or roles. The inclusion of roles addresses situations where organizations implement access control policies such as role-based access control and where a change of role provides the same degree of assurance in the change of access authorizations for the user and all processes acting on behalf of the user as would be provided by a change between a privileged and non-privileged account.

---

### 03.01.07 - Privileged Functions

**Requirement:** Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs.

**Discussion:** Privileged functions include establishing system accounts, performing system integrity checks, conducting patching operations, or administering cryptographic key management activities. Non-privileged users are individuals that do not possess appropriate authorizations. Privileged functions that require protection from non-privileged users include circumventing intrusion detection and prevention mechanisms or malicious code protection mechanisms.

---

### 03.01.08 - Unsuccessful Logon Attempts

**Requirement:** Limit unsuccessful logon attempts.

**Discussion:** Due to the potential for denial of service, automatic lockouts initiated by systems are usually temporary and automatically release after a predetermined time period established by organizations. If a delay algorithm is selected, organizations may choose to employ different algorithms for different components of the system based on the capabilities of those components.

---

### 03.01.09 - Privacy & Security Notices

**Requirement:** Provide privacy and security notices consistent with applicable CUI rules.

**Discussion:** System use notifications can be implemented using messages or warning banners displayed before individuals log in to systems. System use notifications are used only for access via logon interfaces with human users and are not required when such human interfaces do not exist.

---

### 03.01.10 - Session Lock

**Requirement:** Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity.

**Discussion:** Session locks are temporary actions taken when users stop work and move away from the immediate vicinity of the system but do not want to log out because of the temporary nature of their absences. Pattern-hiding displays can include static or dynamic images.

---

### 03.01.11 - Session Termination

**Requirement:** Terminate (automatically) a user session after a defined condition.

**Discussion:** This requirement addresses the termination of user-initiated logical sessions in contrast to the termination of network connections that are associated with communications sessions. A logical session is initiated whenever a user or process accesses systems. Organizations can establish session termination after an absolute time period, after a certain period of inactivity, or by explicit user action.

---

### 03.01.12 - Control Remote Access

**Requirement:** Monitor and control remote access sessions.

**Discussion:** Remote access is access to organizational systems by users communicating through external networks. Examples of remote access methods include dial-up, broadband, and wireless. Organizations often employ encrypted virtual private networks (VPNs) to enhance confidentiality and integrity over remote connections.

---

### 03.01.13 - Remote Access Confidentiality

**Requirement:** Employ cryptographic mechanisms to protect the confidentiality of remote access sessions.

**Discussion:** Cryptographic standards include FIPS-validated cryptography and NSA-approved cryptography. See NIST FIPS 140-3 and NIST FIPS 197.

---

### 03.01.14 - Route Remote Access

**Requirement:** Route remote access via managed access control points.

**Discussion:** Routing remote access through managed access control points enhances explicit, organizational control over such connections, reducing the susceptibility to unauthorized access to organizational systems and CUI.

---

### 03.01.15 - Privileged Remote Access

**Requirement:** Authorize remote execution of privileged commands and remote access to security-relevant information.

**Discussion:** A privileged command is a human-initiated command executed on a system involving the control, monitoring, or administration of the system including security functions and associated security-relevant information. Security-relevant information is any information within systems that can potentially impact organizational operations, organizational assets, or individuals.

---

### 03.01.16 - Wireless Access Authorization

**Requirement:** Authorize wireless access prior to allowing such connections.

**Discussion:** Establishing usage restrictions and configuration/connection requirements for wireless access to systems is critical to mitigating potential threats from attackers. Wireless technologies include microwave, packet radio, 802.11x, and Bluetooth.

---

### 03.01.17 - Wireless Access Protection

**Requirement:** Protect wireless access using authentication and encryption.

**Discussion:** Wireless networking capabilities can be exploited to eavesdrop on wireless communications, gain unauthorized access, and disrupt normal operations. Organizations employ authentication mechanisms for wireless access that can be configured to provide strong, cryptographic protections.

---

### 03.01.18 - Mobile Device Connection

**Requirement:** Control connection of mobile devices.

**Discussion:** Due to the large variety of mobile devices with different technical characteristics and capabilities, organizational restrictions may vary. Usage restrictions and specific implementation guidance are covered in other security requirements.

---

### 03.01.19 - Encrypt CUI on Mobile

**Requirement:** Encrypt CUI on mobile devices and mobile computing platforms.

**Discussion:** Organizations can employ full-device encryption or container-based encryption to protect CUI on mobile devices and mobile computing platforms. Container-based encryption provides a more fine-grained approach to data and information encryption on mobile devices and mobile computing platforms.

---

### 03.01.20 - External System Use

**Requirement:** Verify and control/limit connections to and use of external systems.

**Discussion:** External systems are systems or components of systems for which organizations typically have no direct control over the implementation of required security controls or the assessment of security control effectiveness. External systems include personally owned systems, components, or devices and privately-owned computing and communications devices resident in commercial facilities.

---

### 03.01.21 - Portable Storage Use

**Requirement:** Limit use of portable storage devices on external systems.

**Discussion:** Limits on the use of portable storage devices are aimed at protecting against malicious code and sensitive information exfiltration. The requirement recognizes that the use of portable storage devices for legitimate business purposes is common and necessary for many organizations.

---

### 03.01.22 - Control Public Information

**Requirement:** Control CUI posted or processed on publicly accessible systems.

**Discussion:** In accordance with laws, executive orders, directives, policies, regulations, or standards, the public is not authorized to have access to nonpublic information, including CUI. The requirement addresses systems that are controlled by the organization and accessible to the public, typically without identification or authentication.

---

## Awareness and Training (AT)

*Ensure that managers, system administrators, and users are aware of security risks.*

### 03.02.01 - Literacy Training & Awareness

**Requirement:** Ensure that managers and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems.

**Discussion:** Organizations determine the content and frequency of security awareness training and security awareness techniques based on the specific organizational requirements and the systems to which personnel have authorized access. Training is provided to all organizational employees and contractors.

---

### 03.02.02 - Insider Threat Awareness

**Requirement:** Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities.

**Discussion:** Organizations determine the content and frequency of security training based on the specific organizational requirements, the systems to which personnel have authorized access, and the specific security-related duties and responsibilities of personnel.

---

### 03.02.03 - Role-Based Training

**Requirement:** Provide security awareness training on recognizing and reporting potential indicators of insider threat.

**Discussion:** Potential indicators and possible precursors of insider threat include behaviors such as inordinate, long-term job dissatisfaction; attempts to gain access to information not required for job performance; unexplained access to financial resources; bullying or sexual harassment of fellow employees; workplace violence; and other serious violations of policies, procedures, directives, rules, or practices.

---

## Audit and Accountability (AU)

*Create, protect, and retain system audit records to enable monitoring and analysis.*

### 03.03.01 - System Audit Records

**Requirement:** Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.

**Discussion:** An event is an observable occurrence in a system. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of organizational systems and the environments in which those systems operate. Event types can include password changes, failed logons, failed accesses, system shutdowns or restarts, and administrative privilege usage.

---

### 03.03.02 - User Accountability

**Requirement:** Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions.

**Discussion:** This requirement ensures that the contents of the audit record include the information needed to link the audit event to the actions of an individual. Organizations consider logging for traceability including results from monitoring of account usage, remote access, wireless connectivity, mobile device connection, communications at system boundaries, and other actions.

---

### 03.03.03 - Audit Record Review

**Requirement:** Review and update logged events.

**Discussion:** The intent of this requirement is to periodically review and update the set of logged events to include events that are relevant and exclude events that are not relevant. Changes in the threat environment or security objectives can influence the events that organizations need to log. The review and update of logged events also facilitates the generation of audit records that are better aligned with the information needs of organizations.

---

### 03.03.04 - Audit Failure Alerting

**Requirement:** Alert in the event of an audit logging process failure.

**Discussion:** Audit logging process failures include software and hardware errors, failures in audit log capturing mechanisms, and reaching or exceeding audit log storage capacity. Organizations may choose to define additional events for which alerts are generated.

---

### 03.03.05 - Audit Correlation

**Requirement:** Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity.

**Discussion:** Correlating audit record information from nontechnical sources can provide context for audit records and can help to identify types of activity that may not be immediately apparent from the audit records themselves.

---

### 03.03.06 - Audit Reduction

**Requirement:** Provide audit record reduction and report generation to support on-demand analysis and reporting.

**Discussion:** Audit record reduction is a process that manipulates collected audit information and organizes such information in a summary format that is more meaningful to analysts. Audit record reduction and report generation capabilities do not always emanate from the same system or organizational entities conducting auditing activities.

---

### 03.03.07 - Time Stamps

**Requirement:** Provide a system capability that compares and synchronizes internal system clocks with an authoritative source to generate time stamps for audit records.

**Discussion:** Internal system clocks are generally used to generate time stamps for audit log entries. Time is commonly expressed in Coordinated Universal Time (UTC), a modern continuation of Greenwich Mean Time (GMT), or local time with an offset from UTC.

---

### 03.03.08 - Audit Information Protection

**Requirement:** Protect audit information and audit logging tools from unauthorized access, modification, and deletion.

**Discussion:** Audit information includes all information needed to successfully audit system activity, such as audit records, audit log settings, audit reports, and personally identifiable information. Audit logging tools are those programs and devices used to conduct system audit and logging activities.

---

### 03.03.09 - Audit Record Management

**Requirement:** Limit management of audit logging functionality to a subset of privileged users.

**Discussion:** Individuals with privileged access to a system and who are also the subject of an audit by that system may affect the reliability of the audit information by inhibiting audit activities or modifying audit records. Limiting privileged access to the management of audit logging functionality helps to preserve the objectivity and integrity of the audit trail.

---

## Configuration Management (CM)

*Establish and maintain baseline configurations and inventories.*

### 03.04.01 - Baseline Configuration

**Requirement:** Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles.

**Discussion:** Baseline configurations are documented, formally reviewed, and agreed-upon specifications for systems or configuration items within those systems. Baseline configurations serve as a basis for future builds, releases, and changes to systems. Baseline configurations include information about system components, network topology, and the logical placement of those components within the system architecture.

---

### 03.04.02 - Configuration Change Control

**Requirement:** Establish and enforce security configuration settings for information technology products employed in organizational systems.

**Discussion:** Configuration settings are the set of parameters that can be changed in hardware, software, or firmware components of the system that affect the security posture or functionality of the system. Security-related parameters are those parameters impacting the security state of systems including the parameters required to satisfy other security requirements.

---

### 03.04.03 - Track Changes

**Requirement:** Track, review, approve or disapprove, and log changes to organizational systems.

**Discussion:** Tracking, reviewing, approving/disapproving, and logging changes is called configuration change control. Configuration change control for organizational systems involves the systematic proposal, justification, implementation, testing, review, and disposition of changes to the systems, including system upgrades and modifications.

---

### 03.04.04 - Security Impact Analysis

**Requirement:** Analyze the security impact of changes prior to implementation.

**Discussion:** Organizational personnel with system security responsibilities conduct security impact analyses. Individuals conducting security impact analyses possess the necessary skills and technical expertise to analyze the changes to systems and the associated security ramifications.

---

### 03.04.05 - Access Restrictions

**Requirement:** Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems.

**Discussion:** Any changes to the hardware, software, or firmware components of systems can potentially have significant effects on the overall security of the systems. Therefore, organizations permit only qualified and authorized individuals to access systems for purposes of initiating changes.

---

### 03.04.06 - Least Functionality

**Requirement:** Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities.

**Discussion:** Systems can provide a wide variety of functions and services. Some of the functions and services routinely provided by default may not be necessary to support essential organizational missions or functions. The principle of least functionality is applied with the goal of reducing attack surface.

---

### 03.04.07 - Nonessential Programs

**Requirement:** Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services.

**Discussion:** Restricting the use of nonessential functions and services reduces attack surface. This requirement does not apply to kernel subsystems or other functions of the operating system.

---

### 03.04.08 - User-Installed Software

**Requirement:** Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software.

**Discussion:** The process used to identify software programs that are not authorized to execute on organizational systems is commonly referred to as blacklisting. The process used to identify software programs that are authorized to execute on organizational systems is commonly referred to as whitelisting.

---

### 03.04.09 - Control & Monitor User-Installed Software

**Requirement:** Control and monitor user-installed software.

**Discussion:** Users install software on organizational systems for a variety of reasons. Users can be provided with the necessary privileges to install software to ensure that they have the capabilities required to accomplish organizational missions and business functions. Organizations have options for controlling and monitoring user-installed software.

---

### 03.04.10 - Software Usage Restrictions

**Requirement:** Enforce software usage and installation restrictions.

**Discussion:** Organizations may want to restrict the use of certain types of software including file sharing and peer-to-peer software. The use of prohibited software, including unauthorized software, is generally tracked through the use of technologies such as software asset management systems.

---

### 03.04.11 - Application Whitelisting

**Requirement:** Implement application whitelisting to prevent the execution of malicious or unauthorized software.

**Discussion:** Application whitelisting is the identification of applications that are permitted to execute on systems. Application whitelisting is provided by application control functions of operating systems, host-based security software, and virtualization systems.

---

## Identification and Authentication (IA)

*Identify users, processes, and devices before authorizing access.*

### 03.05.01 - Identification

**Requirement:** Identify system users, processes acting on behalf of users, and devices.

**Discussion:** Common device identifiers include media access control (MAC) addresses, Internet Protocol (IP) addresses, or device-unique token identifiers. Management of individual identifiers is not applicable to shared system accounts. Typically, individual identifiers are the user names of the system accounts assigned to those individuals.

---

### 03.05.02 - Authentication

**Requirement:** Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems.

**Discussion:** Individual authenticators include passwords, key cards, cryptographic devices, and one-time password devices. Initial authenticator content is the actual content of the authenticator, including the initial password. Organizations can include mutually authenticated cryptographic mechanisms or protocols to provide additional security.

---

### 03.05.03 - Multi-Factor Authentication

**Requirement:** Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.

**Discussion:** Multifactor authentication requires the use of two or more different factors to achieve authentication. The factors are defined as something you know (e.g., password), something you have (e.g., cryptographic identification device, token), or something you are (e.g., biometric).

---

### 03.05.04 - Replay-Resistant Authentication

**Requirement:** Employ replay-resistant authentication mechanisms for network access to privileged and non-privileged accounts.

**Discussion:** Authentication processes resist replay attacks if it is impractical to achieve successful authentications by replaying previous authentication messages. Replay-resistant techniques include protocols that use nonces or challenges such as TLS and time synchronous or challenge-response one-time authenticators.

---

### 03.05.05 - Identifier Management

**Requirement:** Prevent reuse of identifiers for a defined period.

**Discussion:** Identifiers are provided for users, processes acting on behalf of users, or devices. Preventing reuse of identifiers implies preventing the assignment of previously used individual, group, role, or device identifiers to different individuals, groups, roles, or devices.

---

### 03.05.06 - Identifier Disabled

**Requirement:** Disable identifiers after a defined period of inactivity.

**Discussion:** Inactive identifiers pose a risk to organizational systems because attackers may exploit an inactive identifier to gain undetected access to organizational devices. The owners of the inactive accounts may not notice if unauthorized access to the account has been obtained.

---

### 03.05.07 - Password Enforcement

**Requirement:** Enforce a minimum password complexity and change of characters when new passwords are created.

**Discussion:** This requirement applies to single-factor authentication of individuals using passwords as individual or group authenticators, and in a similar manner, when passwords are part of multifactor authenticators. The number of changed characters refers to the number of changes required with respect to the total number of positions in the current password.

---

### 03.05.08 - Password Reuse

**Requirement:** Prohibit password reuse for a specified number of generations.

**Discussion:** Password lifetime restrictions do not apply to temporary passwords.

---

### 03.05.09 - Temporary Passwords

**Requirement:** Allow temporary password use for system logons with an immediate change to a permanent password.

**Discussion:** Changing temporary passwords to permanent passwords immediately after system logon ensures that the necessary strength of the authentication mechanism is implemented at the earliest opportunity, reducing the susceptibility to authenticator compromises.

---

### 03.05.10 - Cryptographic Key Management

**Requirement:** Store and transmit only cryptographically-protected passwords.

**Discussion:** Cryptographically-protected passwords use salted one-way cryptographic hashes of passwords. See NIST Cryptographic Standards and Guidelines.

---

### 03.05.11 - Password Management

**Requirement:** Obscure feedback of authentication information.

**Discussion:** The feedback from systems does not provide information that would allow unauthorized individuals to compromise authentication mechanisms. For example, systems display asterisks when users type passwords into input devices.

---

## Incident Response (IR)

*Establish operational incident handling capability.*

### 03.06.01 - Incident Handling

**Requirement:** Establish an operational incident handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities.

**Discussion:** Organizations recognize that incident handling capabilities are dependent on the capabilities of organizational systems and the mission/business processes being supported by those systems. Organizations consider incident handling as part of the definition, design, and development of mission/business processes and systems.

---

### 03.06.02 - Incident Reporting

**Requirement:** Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.

**Discussion:** Tracking and documenting system security incidents includes maintaining records about each incident, the status of the incident, and other pertinent information necessary for forensics, evaluating incident details, trends, and handling. Incident information can be obtained from a variety of sources.

---

### 03.06.03 - Incident Response Testing

**Requirement:** Test the organizational incident response capability.

**Discussion:** Organizations test incident response capabilities to determine the effectiveness of the capabilities and to identify potential weaknesses or deficiencies. Incident response testing includes the use of checklists, walk-through or tabletop exercises, simulations (both parallel and full interrupt), and comprehensive exercises.

---

### 03.06.04 - Incident Response Plan

**Requirement:** Develop and implement an incident response plan.

**Discussion:** Incident response plans include a roadmap for implementing the incident response capability.

---

### 03.06.05 - Incident Response Assistance

**Requirement:** Provide incident response assistance resources that offer advice and assistance to users.

**Discussion:** Incident response assistance resources can include help desks, assistance groups, and access to forensics services when required.

---

### 03.06.06 - Incident Monitoring

**Requirement:** Monitor and report on user-reported events in organizational systems.

**Discussion:** User reporting channels include help desks and are a key element of incident response capabilities. The intent is to identify security incidents that go beyond normal notification of failed or denied authentications.

---

## Maintenance (MA)

*Perform maintenance and manage repairs for organizational systems.*

### 03.07.01 - System Maintenance

**Requirement:** Perform maintenance on organizational systems.

**Discussion:** Controlling system maintenance addresses the information security aspects of the system maintenance program and applies to all types of maintenance to systems located either onsite or offsite. System maintenance also includes those components not directly associated with system processing or data/information retention.

---

### 03.07.02 - Maintenance Controls

**Requirement:** Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.

**Discussion:** This requirement addresses security-related issues with maintenance tools that are not within organizational systems and are used specifically for diagnostic and repair actions on systems. Organizations have flexibility in determining roles for maintenance personnel and whether contractors or organizational personnel conduct system maintenance.

---

### 03.07.03 - Timely Maintenance

**Requirement:** Ensure equipment removed for off-site maintenance is sanitized of any CUI.

**Discussion:** This requirement addresses the information security aspects of system components removed for off-site maintenance. Organizations can use different sanitization techniques, including clearing, purging, cryptographic erase, or destruction, depending on the component.

---

### 03.07.04 - Maintenance Tools

**Requirement:** Check media containing diagnostic and test programs for malicious code before the media are used in organizational systems.

**Discussion:** If, upon inspection of media containing maintenance diagnostic and test programs, organizations determine that the media contain malicious code, the incident is handled consistent with organizational incident handling policies and procedures.

---

### 03.07.05 - Nonlocal Maintenance

**Requirement:** Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete.

**Discussion:** Nonlocal maintenance and diagnostic activities are conducted by individuals communicating through an external network. Local maintenance and diagnostic activities are carried out by individuals who are physically present at the system and not communicating across a network connection.

---

### 03.07.06 - Maintenance Personnel

**Requirement:** Supervise the maintenance activities of maintenance personnel without required access authorization.

**Discussion:** This requirement applies to individuals who are performing hardware or software maintenance on organizational systems, while [03.10.01] addresses physical access for individuals whose maintenance duties place them within the physical protection perimeter.

---

## Media Protection (MP)

*Protect system media in both digital and non-digital formats.*

### 03.08.01 - Media Access

**Requirement:** Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.

**Discussion:** System media includes digital and non-digital media. Digital media includes diskettes, magnetic tapes, external or removable hard disk drives, flash drives, compact discs, and digital video discs. Non-digital media includes paper and microfilm.

---

### 03.08.02 - Media Storage

**Requirement:** Limit access to CUI on system media to authorized users.

**Discussion:** Access can be limited by physically controlling system media and secure storage areas. Physically controlling system media includes conducting inventories, ensuring procedures are in place to allow individuals to check out and return system media to the media library, and maintaining accountability for all stored media.

---

### 03.08.03 - Media Marking

**Requirement:** Sanitize or destroy system media containing CUI before disposal or release for reuse.

**Discussion:** This requirement applies to all system media, digital and non-digital, subject to disposal or reuse. Methods of sanitization include clearing, purging, cryptographic erase, and destruction. Organizations conduct sanitization or destruction of system media in accordance with federal and organizational standards and policies.

---

### 03.08.04 - Media Accountability

**Requirement:** Mark media with necessary CUI markings and distribution limitations.

**Discussion:** The term security marking refers to the application or use of human-readable security attributes. System media includes digital and non-digital media. Marking of system media reflects applicable federal and organizational policy.

---

### 03.08.05 - Media Transport

**Requirement:** Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas.

**Discussion:** Controlled areas are areas or spaces for which organizations provide physical or procedural controls to meet the requirements established for protecting systems and information. Controls to maintain accountability for media during transport include locked containers and cryptography.

---

### 03.08.06 - Cryptographic Protection

**Requirement:** Implement cryptographic mechanisms to protect the confidentiality of CUI stored on digital media during transport unless otherwise protected by alternative physical safeguards.

**Discussion:** This requirement applies to portable storage devices (e.g., USB memory sticks, digital video disks, compact disks, external or removable hard disk drives). Cryptographic mechanisms can provide confidentiality and integrity protections.

---

### 03.08.07 - Media Disposal

**Requirement:** Control the use of removable media on system components.

**Discussion:** In contrast to requirement 03.08.03, which restricts user access to media, this requirement restricts the use of certain types of media on systems. Examples include restrictions on the use of portable storage devices or audio and compact disk based storage devices.

---

## Personnel Security (PS)

*Screen individuals before authorizing access to systems.*

### 03.09.01 - Personnel Screening

**Requirement:** Screen individuals prior to authorizing access to organizational systems containing CUI.

**Discussion:** Personnel screening includes reviewing employment history, education, references, citizenship, and background investigations or equivalent procedures. Organizations may define different screening criteria for individuals accessing different types of CUI.

---

### 03.09.02 - Personnel Termination

**Requirement:** Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers.

**Discussion:** Actions following termination or transfer of an individual include returning organizational systems-related property, notifying organizational personnel of the need to remove individuals from access lists, revoking authenticators and credentials, conducting exit interviews, and ensuring individuals know about the responsibilities for the continued protection of organizational information.

---

## Physical Protection (PE)

*Limit physical access to systems and the environments in which they operate.*

### 03.10.01 - Physical Access Control

**Requirement:** Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals.

**Discussion:** Controlling physical access to organizational systems and equipment reduces the risk of unauthorized individuals accessing systems and equipment. Physical access controls include key cards, biometric readers, or locked doors. Organizations can use physical access control in combination with other types of controls such as identification and authentication to help ensure the appropriate level of security.

---

### 03.10.02 - Physical Access Authorization

**Requirement:** Protect and monitor the physical facility and support infrastructure for organizational systems.

**Discussion:** Monitoring facilities includes reviews of physical access logs, as well as the use of alarm systems and video surveillance. Organizations protect the physical facility and support infrastructure such as heating, ventilation, and air-conditioning systems, electric power, water, and gas.

---

### 03.10.03 - Escort Visitors

**Requirement:** Escort visitors and monitor visitor activity.

**Discussion:** Visitor logs include names and organizations of persons visiting, dates of visits, times of entry and exit, purposes of visits, and organizational personnel members visited. Physical access controls to facilities where organizational systems reside are employed to ensure that visitors are escorted.

---

### 03.10.04 - Physical Access Logs

**Requirement:** Maintain audit logs of physical access.

**Discussion:** Organizations use physical access logs to identify anomalous physical access activities and implement measures to investigate such activities. Physical access logs include details such as the identity of individuals authorized to access controlled areas and the date and time of access.

---

### 03.10.05 - Manage Physical Access

**Requirement:** Control and manage physical access devices.

**Discussion:** Organizations use different forms of physical access controls depending on the characteristics of the facility and the individuals authorized to access the facility. Physical access controls include badge readers, turnstiles, and locks. Organizations replace or disable physical access devices when individuals are no longer authorized access or when devices are compromised.

---

### 03.10.06 - Alternative Work Sites

**Requirement:** Enforce safeguards for CUI at alternate work sites.

**Discussion:** Alternate work sites include government facilities or private residences of individuals. While typically distinct from alternative processing sites, alternate work sites may provide readily available alternate processing sites depending on organization requirements.

---

## Risk Assessment (RA)

*Periodically assess risk to organizational operations and assets.*

### 03.11.01 - Risk Assessment

**Requirement:** Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI.

**Discussion:** Risk assessments identify and prioritize risks to organizations arising from the operation and use of systems. Risk assessments can be conducted at organization, mission/business process, or system levels and can be conducted at any phase in the system development life cycle.

---

### 03.11.02 - Vulnerability Scanning

**Requirement:** Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems and applications are identified.

**Discussion:** Organizations determine the frequency and scope of vulnerability scans for systems and applications. Security categorizations of information systems guide the frequency of scans. Organizations conduct vulnerability scans on system components and applications within such systems where potential vulnerabilities could be exploited.

---

### 03.11.03 - Vulnerability Remediation

**Requirement:** Remediate vulnerabilities in accordance with risk assessments.

**Discussion:** Vulnerabilities discovered during vulnerability scans or through other sources are categorized and remediated in accordance with defined time frames that are determined by risk assessments. Automated tools can be used to track and report the status of vulnerabilities.

---

## System and Services Acquisition (SA)

*Allocate resources to protect systems and data.*

### 03.12.01 - System Development Life Cycle

**Requirement:** Periodically review and update the security requirements for systems and system services.

**Discussion:** Organizations review and update security requirements whenever systems and services are modified, including when new threats or vulnerabilities are identified. Security requirements reviews and updates ensure that the requirements are aligned with applicable federal and organizational policies, regulations, and other guidance.

---

### 03.12.02 - Developer Configuration Management

**Requirement:** Require that developers and integrators create and implement a system development life cycle that addresses security requirements.

**Discussion:** Trusted relationships between developers and integrators and the organization help facilitate security requirements. Requirements for documentation provide organizations with a traceable record of security measures and the processes followed during the development of systems.

---

### 03.12.03 - Developer Security Testing

**Requirement:** Require that system developers and integrators, either internally or externally, create a security plan.

**Discussion:** Security plans address the authorization requirements for systems that process, store, or transmit CUI and help to ensure that developers and integrators design and implement the system in accordance with organizational security requirements.

---

### 03.12.04 - Acquisition Process

**Requirement:** Include security requirements, descriptions, and criteria, explicitly or by reference, in acquisition contracts.

**Discussion:** Contracts can include organizational and federal security requirements, definitions and concepts, or other security-related contract language. Security requirements can be reflected in the substance of the contract or within the contract attachments.

---

### 03.12.05 - External System Services

**Requirement:** Employ only organization-defined external system services in accordance with applicable federal and organizational security requirements.

**Discussion:** External system services are services that are provided by an external provider. System service providers have a wide range of security standards and can provide varying levels of assurance. Organizations need to properly manage risk from the use of external services.

---

## System and Communications Protection (SC)

*Monitor, control, and protect communications at system boundaries.*

### 03.13.01 - Boundary Protection

**Requirement:** Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems.

**Discussion:** Communications can be monitored, controlled, and protected at boundary components and by restricting or prohibiting interfaces in organizational systems. Boundary components include gateways, routers, firewalls, guards, network-based malicious code analysis, and virtualization systems.

---

### 03.13.02 - Architectural Design

**Requirement:** Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.

**Discussion:** Organizations apply systems security engineering principles to new development systems or systems undergoing major upgrades. For legacy systems, organizations apply systems security engineering principles to system upgrades and modifications to the extent feasible.

---

### 03.13.03 - Security Function Isolation

**Requirement:** Separate user functionality from system management functionality.

**Discussion:** System management functionality includes functions necessary to administer databases, network components, workstations, or servers, and typically requires privileged user access. The separation of user functionality from system management functionality is physical or logical.

---

### 03.13.04 - Shared Resources

**Requirement:** Prevent unauthorized and unintended information transfer via shared system resources.

**Discussion:** This requirement prevents information produced by the actions of prior users or roles or the actions of processes acting on behalf of prior users or roles from being available to current users or roles or processes acting on behalf of current users or roles that obtain access to shared system resources after those resources have been released back to the system.

---

### 03.13.05 - Denial of Service Protection

**Requirement:** Protect against or limit the effects of denial of service attacks.

**Discussion:** Organizations can employ network-based Intrusion Detection Systems (IDSs) and Intrusion Prevention Systems (IPSs) or employ boundary protection devices to block malicious traffic. Organizations can increase the availability of systems and information by defining alternate processing sites and by implementing distributed processing or storage.

---

### 03.13.06 - Network Segmentation

**Requirement:** Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception).

**Discussion:** This requirement applies to inbound and outbound network communications traffic at the system boundary and at identified points within the system. A deny-all, permit-by-exception network communications traffic policy ensures that only authorized traffic is allowed.

---

### 03.13.07 - Split Tunneling

**Requirement:** Prevent remote devices from simultaneously establishing non-remote connections with organizational systems and communicating via some other connection to resources in external networks (i.e., split tunneling).

**Discussion:** Split tunneling might be desirable by remote users to communicate with local system resources such as printers or file servers. However, split tunneling would in effect allow unauthorized external connections, making the system more vulnerable to attack and to exfiltration of organizational information.

---

### 03.13.08 - Data at Rest

**Requirement:** Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.

**Discussion:** This requirement applies to internal and external networks and any system components that can transmit information including servers, notebook computers, desktop computers, mobile devices, printers, copiers, scanners, and facsimile machines.

---

### 03.13.09 - Transmission Confidentiality

**Requirement:** Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity.

**Discussion:** This requirement applies to internal and external networks. Terminating network connections associated with communications sessions includes de-allocating TCP/IP address or port pairs at the operating system level, or de-allocating networking assignments at the application level.

---

### 03.13.10 - Cryptographic Key Management

**Requirement:** Establish and manage cryptographic keys for cryptography employed in organizational systems.

**Discussion:** Cryptographic key management and establishment can be performed using manual procedures or automated mechanisms with supporting manual procedures. Organizations define key management requirements in accordance with applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance.

---

### 03.13.11 - FIPS-Validated Cryptography

**Requirement:** Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.

**Discussion:** Cryptography can be employed to support many security solutions including the protection of CUI, the provision of digital signatures, and the enforcement of information separation when authorized individuals have the necessary clearances for such information but lack the necessary formal access approvals.

---

### 03.13.12 - Collaborative Computing

**Requirement:** Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device.

**Discussion:** Collaborative computing devices include networked white boards, cameras, and microphones. Indication of use includes signals to users when collaborative computing devices are activated.

---

### 03.13.13 - Mobile Code

**Requirement:** Control and monitor the use of mobile code.

**Discussion:** Mobile code technologies include Java, JavaScript, ActiveX, Postscript, PDF, Flash animations, and VBScript. Usage restrictions and implementation guidance apply to both the selection and use of mobile code installed on organizational servers and mobile code downloaded and executed on individual workstations.

---

### 03.13.14 - Voice over IP

**Requirement:** Control and monitor the use of Voice over Internet Protocol (VoIP) technologies.

**Discussion:** VoIP technologies include voice over internet, voice over broadband, IP telephony, and internet telephony. VoIP technologies are often used in combination with centralized enterprise-wide technologies like unified communications and network convergence.

---

### 03.13.15 - Protection of Information at Rest

**Requirement:** Protect the authenticity of communications sessions.

**Discussion:** Authenticity protection includes protecting against man-in-the-middle attacks, session hijacking, and the insertion of false information into communications sessions. This requirement addresses communications protection at the session level, not at the packet level.

---

### 03.13.16 - Data in Transit

**Requirement:** Protect the confidentiality of CUI at rest.

**Discussion:** Information at rest refers to the state of information when it is not in process or in transit and is located on storage devices. The focus of protection at rest is not on the type of storage device or frequency of access but rather on the state of the information.

---

### 03.13.17 - Public-Key Infrastructure

**Requirement:** Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks.

**Discussion:** Subnetworks that are physically or logically separated from internal networks are referred to as demilitarized zones (DMZs). DMZs are typically implemented with boundary control devices and techniques that include routers, gateways, firewalls, virtualization, or cloud-based technologies.

---

### 03.13.18 - Session Authenticity

**Requirement:** Control information flows within systems and between interconnected systems.

**Discussion:** Information flow control restricts information transfers such that only authorized flows are permitted. Organizations may choose to place limiting controls on organizational systems to restrict the flow of CUI to approved sources and destinations.

---

### 03.13.19 - Transmission Integrity

**Requirement:** Protect wireless access using authentication and encryption.

**Discussion:** Wireless networking capabilities can be exploited to eavesdrop on wireless communications, gain unauthorized access, or disrupt normal operations. Organizations employ authentication mechanisms such as IEEE 802.1x and EAP, and employ cryptographic mechanisms such as WPA2 or WPA3.

---

### 03.13.20 - Endpoint Security

**Requirement:** Protect the integrity of transmitted information.

**Discussion:** This requirement applies to internal and external networks and all system components that can transmit information including servers, notebook computers, desktop computers, mobile devices, printers, copiers, scanners, facsimile machines, and radios.

---

## System and Information Integrity (SI)

*Identify, report, and correct system flaws in a timely manner.*

### 03.14.01 - Flaw Remediation

**Requirement:** Identify, report, and correct system flaws in a timely manner.

**Discussion:** Organizations identify systems that are affected by announced software and firmware flaws including potential vulnerabilities resulting from those flaws and report this information to designated organizational personnel with information security responsibilities.

---

### 03.14.02 - Malicious Code Protection

**Requirement:** Provide protection from malicious code at designated locations within organizational systems.

**Discussion:** Designated locations include system entry and exit points which may include firewalls, remote-access servers, workstations, electronic mail servers, web servers, proxy servers, notebook computers, and mobile devices. Malicious code includes viruses, worms, Trojan horses, and spyware.

---

### 03.14.03 - Malicious Code Updates

**Requirement:** Monitor system security alerts and advisories and take action in response.

**Discussion:** Organizations identify and monitor sources of system security alerts and advisories on an ongoing basis. Sources of information include United States Computer Emergency Readiness Team (US-CERT), information sharing and analysis centers, and vendor and information system developer advisories.

---

### 03.14.04 - Security Alerts & Advisories

**Requirement:** Update malicious code protection mechanisms when new releases are available.

**Discussion:** Malicious code protection mechanisms include anti-virus signature definitions, rules, and heuristic signatures. The use of automated mechanisms can help to assure the timeliness of malicious code protection mechanism updates.

---

### 03.14.05 - System & File Scanning

**Requirement:** Perform periodic scans of organizational systems and real-time scans of files from external sources as files are downloaded, opened, or executed.

**Discussion:** Periodic scanning for malicious code includes scanning all media used for system installation or update and scanning on a periodic basis for malicious code on all file servers, notebooks, workstations, and mobile devices when connected to the network.

---

### 03.14.06 - Network Monitoring

**Requirement:** Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks.

**Discussion:** System monitoring includes external and internal monitoring. External monitoring includes the observation of events occurring at the system boundary. Internal monitoring includes the observation of events occurring within the system.

---

### 03.14.07 - Monitoring Tools

**Requirement:** Identify unauthorized use of organizational systems.

**Discussion:** System monitoring includes external and internal monitoring. System monitoring can detect unauthorized use of organizational systems. System monitoring can be provided by audit logging and by security event monitoring tools such as Security Information and Event Management (SIEM) systems.

---

### 03.14.08 - Spam Protection

**Requirement:** Implement spam protection mechanisms at designated system entry and exit points.

**Discussion:** Spam is unsolicited email messages that can contain malicious code, advertisements, pornography, deceptive messages, or other types of unwanted or inappropriate content. Spam protection mechanisms include gateway spam filters and email anti-spam software.

---

### 03.14.09 - Information Input Validation

**Requirement:** Use security functions that verify or validate information.

**Discussion:** Security functions that verify or validate information include hash functions, checksums, and cyclic redundancy checks. Organizations verify the authenticity of software and firmware components obtained from external sources such as vendors.

---

### 03.14.10 - Error Handling

**Requirement:** Handle and retain error messages to support auditing and analysis.

**Discussion:** The intent of this requirement is for the organization to identify error messages that could reveal information about the system that could be exploited by adversaries. Organizations carefully consider the structure and content of error messages.

---

### 03.14.11 - Error Message Information Disclosure

**Requirement:** Reveal error messages only to authorized personnel.

**Discussion:** In some situations, systems need to reveal detailed error messages only to authorized personnel. However, the extent to which systems can identify and handle error conditions is guided and informed by organizational policy and operational requirements.

---

### 03.14.12 - Information System Output Handling

**Requirement:** Protect output from information systems and repositories.

**Discussion:** Outputs from organizational systems include screens, printed pages, or files. Some types of output are obvious while others are not. Organizations implement mechanisms to ensure outputs containing CUI are properly protected.

---

### 03.14.13 - Data Integrity & Validation

**Requirement:** Employ data validation to ensure that input and output of information are correct and complete.

**Discussion:** Data validation, which is a part of information input and output validation, provides organizations with assurance that information is correct and complete before being used, transmitted, or stored. Organizations employ data validation mechanisms at the points where information enters the system.

---

### 03.14.14 - Memory Protection

**Requirement:** Implement security safeguards to protect system memory from unauthorized code execution.

**Discussion:** Security safeguards that can be employed to protect system memory include data execution prevention and address space layout randomization. Data execution prevention safeguards can either be hardware-enforced or software-enforced with hardware providing the greater strength of protection mechanism.

---

### 03.14.15 - Session Lock

**Requirement:** Protect system clocks and clock synchronization mechanisms from unauthorized changes and manipulation.

**Discussion:** System clocks are used to generate time stamps for audit records. Time is commonly expressed in Coordinated Universal Time (UTC), a modern continuation of Greenwich Mean Time (GMT), or local time with an offset from UTC.

---

### 03.14.16 - Software & Information Integrity

**Requirement:** Employ integrity verification tools to detect unauthorized changes to software, firmware, and information.

**Discussion:** Organizations employ integrity verification tools to identify changes and identify unauthorized changes to software, firmware, and information. Integrity verification tools include file integrity monitoring tools, checksum utilities, host-based intrusion detection systems, and cyclic redundancy checks.

---

### 03.14.17 - Least Functionality

**Requirement:** Employ spam protection mechanisms at entry and exit points.

**Discussion:** Spam can be transported by different means including email and web accesses. Spam protection mechanisms include signature definitions.

---

## Quick Reference Table

| ID | Title | Family |
|----|-------|--------|
| 03.01.01 | Authorized Access Control | AC |
| 03.01.02 | Transaction & Function Control | AC |
| 03.01.03 | External Connections | AC |
| 03.01.04 | Separation of Duties | AC |
| 03.01.05 | Least Privilege | AC |
| 03.01.06 | Non-Privileged Account Use | AC |
| 03.01.07 | Privileged Functions | AC |
| 03.01.08 | Unsuccessful Logon Attempts | AC |
| 03.01.09 | Privacy & Security Notices | AC |
| 03.01.10 | Session Lock | AC |
| 03.01.11 | Session Termination | AC |
| 03.01.12 | Control Remote Access | AC |
| 03.01.13 | Remote Access Confidentiality | AC |
| 03.01.14 | Route Remote Access | AC |
| 03.01.15 | Privileged Remote Access | AC |
| 03.01.16 | Wireless Access Authorization | AC |
| 03.01.17 | Wireless Access Protection | AC |
| 03.01.18 | Mobile Device Connection | AC |
| 03.01.19 | Encrypt CUI on Mobile | AC |
| 03.01.20 | External System Use | AC |
| 03.01.21 | Portable Storage Use | AC |
| 03.01.22 | Control Public Information | AC |
| 03.02.01 | Literacy Training & Awareness | AT |
| 03.02.02 | Insider Threat Awareness | AT |
| 03.02.03 | Role-Based Training | AT |
| 03.03.01 | System Audit Records | AU |
| 03.03.02 | User Accountability | AU |
| 03.03.03 | Audit Record Review | AU |
| 03.03.04 | Audit Failure Alerting | AU |
| 03.03.05 | Audit Correlation | AU |
| 03.03.06 | Audit Reduction | AU |
| 03.03.07 | Time Stamps | AU |
| 03.03.08 | Audit Information Protection | AU |
| 03.03.09 | Audit Record Management | AU |
| 03.04.01 | Baseline Configuration | CM |
| 03.04.02 | Configuration Change Control | CM |
| 03.04.03 | Track Changes | CM |
| 03.04.04 | Security Impact Analysis | CM |
| 03.04.05 | Access Restrictions | CM |
| 03.04.06 | Least Functionality | CM |
| 03.04.07 | Nonessential Programs | CM |
| 03.04.08 | User-Installed Software | CM |
| 03.04.09 | Control & Monitor User-Installed Software | CM |
| 03.04.10 | Software Usage Restrictions | CM |
| 03.04.11 | Application Whitelisting | CM |
| 03.05.01 | Identification | IA |
| 03.05.02 | Authentication | IA |
| 03.05.03 | Multi-Factor Authentication | IA |
| 03.05.04 | Replay-Resistant Authentication | IA |
| 03.05.05 | Identifier Management | IA |
| 03.05.06 | Identifier Disabled | IA |
| 03.05.07 | Password Enforcement | IA |
| 03.05.08 | Password Reuse | IA |
| 03.05.09 | Temporary Passwords | IA |
| 03.05.10 | Cryptographic Key Management | IA |
| 03.05.11 | Password Management | IA |
| 03.06.01 | Incident Handling | IR |
| 03.06.02 | Incident Reporting | IR |
| 03.06.03 | Incident Response Testing | IR |
| 03.06.04 | Incident Response Plan | IR |
| 03.06.05 | Incident Response Assistance | IR |
| 03.06.06 | Incident Monitoring | IR |
| 03.07.01 | System Maintenance | MA |
| 03.07.02 | Maintenance Controls | MA |
| 03.07.03 | Timely Maintenance | MA |
| 03.07.04 | Maintenance Tools | MA |
| 03.07.05 | Nonlocal Maintenance | MA |
| 03.07.06 | Maintenance Personnel | MA |
| 03.08.01 | Media Access | MP |
| 03.08.02 | Media Storage | MP |
| 03.08.03 | Media Marking | MP |
| 03.08.04 | Media Accountability | MP |
| 03.08.05 | Media Transport | MP |
| 03.08.06 | Cryptographic Protection | MP |
| 03.08.07 | Media Disposal | MP |
| 03.09.01 | Personnel Screening | PS |
| 03.09.02 | Personnel Termination | PS |
| 03.10.01 | Physical Access Control | PE |
| 03.10.02 | Physical Access Authorization | PE |
| 03.10.03 | Escort Visitors | PE |
| 03.10.04 | Physical Access Logs | PE |
| 03.10.05 | Manage Physical Access | PE |
| 03.10.06 | Alternative Work Sites | PE |
| 03.11.01 | Risk Assessment | RA |
| 03.11.02 | Vulnerability Scanning | RA |
| 03.11.03 | Vulnerability Remediation | RA |
| 03.12.01 | System Development Life Cycle | SA |
| 03.12.02 | Developer Configuration Management | SA |
| 03.12.03 | Developer Security Testing | SA |
| 03.12.04 | Acquisition Process | SA |
| 03.12.05 | External System Services | SA |
| 03.13.01 | Boundary Protection | SC |
| 03.13.02 | Architectural Design | SC |
| 03.13.03 | Security Function Isolation | SC |
| 03.13.04 | Shared Resources | SC |
| 03.13.05 | Denial of Service Protection | SC |
| 03.13.06 | Network Segmentation | SC |
| 03.13.07 | Split Tunneling | SC |
| 03.13.08 | Data at Rest | SC |
| 03.13.09 | Transmission Confidentiality | SC |
| 03.13.10 | Cryptographic Key Management | SC |
| 03.13.11 | FIPS-Validated Cryptography | SC |
| 03.13.12 | Collaborative Computing | SC |
| 03.13.13 | Mobile Code | SC |
| 03.13.14 | Voice over IP | SC |
| 03.13.15 | Protection of Information at Rest | SC |
| 03.13.16 | Data in Transit | SC |
| 03.13.17 | Public-Key Infrastructure | SC |
| 03.13.18 | Session Authenticity | SC |
| 03.13.19 | Transmission Integrity | SC |
| 03.13.20 | Endpoint Security | SC |
| 03.14.01 | Flaw Remediation | SI |
| 03.14.02 | Malicious Code Protection | SI |
| 03.14.03 | Malicious Code Updates | SI |
| 03.14.04 | Security Alerts & Advisories | SI |
| 03.14.05 | System & File Scanning | SI |
| 03.14.06 | Network Monitoring | SI |
| 03.14.07 | Monitoring Tools | SI |
| 03.14.08 | Spam Protection | SI |
| 03.14.09 | Information Input Validation | SI |
| 03.14.10 | Error Handling | SI |
| 03.14.11 | Error Message Information Disclosure | SI |
| 03.14.12 | Information System Output Handling | SI |
| 03.14.13 | Data Integrity & Validation | SI |
| 03.14.14 | Memory Protection | SI |
| 03.14.15 | Session Lock | SI |
| 03.14.16 | Software & Information Integrity | SI |
| 03.14.17 | Least Functionality | SI |

---

*Source: NIST Special Publication 800-171 Revision 3 - Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations*
