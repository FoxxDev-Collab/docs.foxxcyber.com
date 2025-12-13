---
sidebar_position: 6
title: Identification and Authentication (IA)
description: NIST SP 800-171 Rev 3 Identification and Authentication requirements - 11 controls for identity verification.
---

# Identification and Authentication (IA)

**Family Description:** Identify users, processes, and devices before authorizing access.

**Total Requirements:** 11

## Quick Reference

| ID | Title |
|----|-------|
| [03.05.01](#030501---identification) | Identification |
| [03.05.02](#030502---authentication) | Authentication |
| [03.05.03](#030503---multi-factor-authentication) | Multi-Factor Authentication |
| [03.05.04](#030504---replay-resistant-authentication) | Replay-Resistant Authentication |
| [03.05.05](#030505---identifier-management) | Identifier Management |
| [03.05.06](#030506---identifier-disabled) | Identifier Disabled |
| [03.05.07](#030507---password-enforcement) | Password Enforcement |
| [03.05.08](#030508---password-reuse) | Password Reuse |
| [03.05.09](#030509---temporary-passwords) | Temporary Passwords |
| [03.05.10](#030510---cryptographic-key-management) | Cryptographic Key Management |
| [03.05.11](#030511---password-management) | Password Management |

---

## 03.05.01 - Identification

**Requirement:** Identify system users, processes acting on behalf of users, and devices.

:::info Discussion
Common device identifiers include media access control (MAC) addresses, Internet Protocol (IP) addresses, or device-unique token identifiers. Management of individual identifiers is not applicable to shared system accounts. Typically, individual identifiers are the user names of the system accounts assigned to those individuals.
:::

---

## 03.05.02 - Authentication

**Requirement:** Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems.

:::info Discussion
Individual authenticators include passwords, key cards, cryptographic devices, and one-time password devices. Initial authenticator content is the actual content of the authenticator, including the initial password. Organizations can include mutually authenticated cryptographic mechanisms or protocols to provide additional security.
:::

---

## 03.05.03 - Multi-Factor Authentication

**Requirement:** Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.

:::info Discussion
Multifactor authentication requires the use of two or more different factors to achieve authentication. The factors are defined as something you know (e.g., password), something you have (e.g., cryptographic identification device, token), or something you are (e.g., biometric).
:::

---

## 03.05.04 - Replay-Resistant Authentication

**Requirement:** Employ replay-resistant authentication mechanisms for network access to privileged and non-privileged accounts.

:::info Discussion
Authentication processes resist replay attacks if it is impractical to achieve successful authentications by replaying previous authentication messages. Replay-resistant techniques include protocols that use nonces or challenges such as TLS and time synchronous or challenge-response one-time authenticators.
:::

---

## 03.05.05 - Identifier Management

**Requirement:** Prevent reuse of identifiers for a defined period.

:::info Discussion
Identifiers are provided for users, processes acting on behalf of users, or devices. Preventing reuse of identifiers implies preventing the assignment of previously used individual, group, role, or device identifiers to different individuals, groups, roles, or devices.
:::

---

## 03.05.06 - Identifier Disabled

**Requirement:** Disable identifiers after a defined period of inactivity.

:::info Discussion
Inactive identifiers pose a risk to organizational systems because attackers may exploit an inactive identifier to gain undetected access to organizational devices. The owners of the inactive accounts may not notice if unauthorized access to the account has been obtained.
:::

---

## 03.05.07 - Password Enforcement

**Requirement:** Enforce a minimum password complexity and change of characters when new passwords are created.

:::info Discussion
This requirement applies to single-factor authentication of individuals using passwords as individual or group authenticators, and in a similar manner, when passwords are part of multifactor authenticators. The number of changed characters refers to the number of changes required with respect to the total number of positions in the current password.
:::

---

## 03.05.08 - Password Reuse

**Requirement:** Prohibit password reuse for a specified number of generations.

:::info Discussion
Password lifetime restrictions do not apply to temporary passwords.
:::

---

## 03.05.09 - Temporary Passwords

**Requirement:** Allow temporary password use for system logons with an immediate change to a permanent password.

:::info Discussion
Changing temporary passwords to permanent passwords immediately after system logon ensures that the necessary strength of the authentication mechanism is implemented at the earliest opportunity, reducing the susceptibility to authenticator compromises.
:::

---

## 03.05.10 - Cryptographic Key Management

**Requirement:** Store and transmit only cryptographically-protected passwords.

:::info Discussion
Cryptographically-protected passwords use salted one-way cryptographic hashes of passwords. See NIST Cryptographic Standards and Guidelines.
:::

---

## 03.05.11 - Password Management

**Requirement:** Obscure feedback of authentication information.

:::info Discussion
The feedback from systems does not provide information that would allow unauthorized individuals to compromise authentication mechanisms. For example, systems display asterisks when users type passwords into input devices.
:::

---

*Source: NIST Special Publication 800-171 Revision 3*
