---
sidebar_position: 4
title: Audit and Accountability (AU)
description: NIST SP 800-171 Rev 3 Audit and Accountability requirements - 9 controls for audit logging and monitoring.
---

# Audit and Accountability (AU)

**Family Description:** Create, protect, and retain system audit records to enable monitoring and analysis.

**Total Requirements:** 9

## Quick Reference

| ID | Title |
|----|-------|
| [03.03.01](#030301---system-audit-records) | System Audit Records |
| [03.03.02](#030302---user-accountability) | User Accountability |
| [03.03.03](#030303---audit-record-review) | Audit Record Review |
| [03.03.04](#030304---audit-failure-alerting) | Audit Failure Alerting |
| [03.03.05](#030305---audit-correlation) | Audit Correlation |
| [03.03.06](#030306---audit-reduction) | Audit Reduction |
| [03.03.07](#030307---time-stamps) | Time Stamps |
| [03.03.08](#030308---audit-information-protection) | Audit Information Protection |
| [03.03.09](#030309---audit-record-management) | Audit Record Management |

---

## 03.03.01 - System Audit Records

**Requirement:** Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.

:::info Discussion
An event is an observable occurrence in a system. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of organizational systems and the environments in which those systems operate. Event types can include password changes, failed logons, failed accesses, system shutdowns or restarts, and administrative privilege usage.
:::

---

## 03.03.02 - User Accountability

**Requirement:** Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions.

:::info Discussion
This requirement ensures that the contents of the audit record include the information needed to link the audit event to the actions of an individual. Organizations consider logging for traceability including results from monitoring of account usage, remote access, wireless connectivity, mobile device connection, communications at system boundaries, and other actions.
:::

---

## 03.03.03 - Audit Record Review

**Requirement:** Review and update logged events.

:::info Discussion
The intent of this requirement is to periodically review and update the set of logged events to include events that are relevant and exclude events that are not relevant. Changes in the threat environment or security objectives can influence the events that organizations need to log. The review and update of logged events also facilitates the generation of audit records that are better aligned with the information needs of organizations.
:::

---

## 03.03.04 - Audit Failure Alerting

**Requirement:** Alert in the event of an audit logging process failure.

:::info Discussion
Audit logging process failures include software and hardware errors, failures in audit log capturing mechanisms, and reaching or exceeding audit log storage capacity. Organizations may choose to define additional events for which alerts are generated.
:::

---

## 03.03.05 - Audit Correlation

**Requirement:** Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity.

:::info Discussion
Correlating audit record information from nontechnical sources can provide context for audit records and can help to identify types of activity that may not be immediately apparent from the audit records themselves.
:::

---

## 03.03.06 - Audit Reduction

**Requirement:** Provide audit record reduction and report generation to support on-demand analysis and reporting.

:::info Discussion
Audit record reduction is a process that manipulates collected audit information and organizes such information in a summary format that is more meaningful to analysts. Audit record reduction and report generation capabilities do not always emanate from the same system or organizational entities conducting auditing activities.
:::

---

## 03.03.07 - Time Stamps

**Requirement:** Provide a system capability that compares and synchronizes internal system clocks with an authoritative source to generate time stamps for audit records.

:::info Discussion
Internal system clocks are generally used to generate time stamps for audit log entries. Time is commonly expressed in Coordinated Universal Time (UTC), a modern continuation of Greenwich Mean Time (GMT), or local time with an offset from UTC.
:::

---

## 03.03.08 - Audit Information Protection

**Requirement:** Protect audit information and audit logging tools from unauthorized access, modification, and deletion.

:::info Discussion
Audit information includes all information needed to successfully audit system activity, such as audit records, audit log settings, audit reports, and personally identifiable information. Audit logging tools are those programs and devices used to conduct system audit and logging activities.
:::

---

## 03.03.09 - Audit Record Management

**Requirement:** Limit management of audit logging functionality to a subset of privileged users.

:::info Discussion
Individuals with privileged access to a system and who are also the subject of an audit by that system may affect the reliability of the audit information by inhibiting audit activities or modifying audit records. Limiting privileged access to the management of audit logging functionality helps to preserve the objectivity and integrity of the audit trail.
:::

---

*Source: NIST Special Publication 800-171 Revision 3*
