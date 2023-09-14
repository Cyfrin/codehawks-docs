# Payouts

This resource intends to provide transparency into how reward payouts are calculated as well as provide example scenarios as guides. For more information on findings and their validity, please see [What Is A Finding?](how-to-determine-a-finding-validity.md) and [How To Write And Submit A Finding](how-to-write-and-submit-a-finding.md).

_Rewards are currently paid out in **USDC on Arbitrum One.**_

Payouts for auditors consist in shares of the prize pool calculated based on the [severity](how-to-evaluate-a-finding-severity.md) and [number of findings](how-to-write-and-submit-a-finding.md) an auditor submits during a smart contract auditing competition.

### High / Medium Findings

#### Current Payout Calculation:

For competitive audits, the payouts are currently determined as:

* **Medium Risk Shares**: `1 * (0.9^(findingCount - 1)) / findingCount`
* **High Risk Shares**: `5 * (0.9^(findingCount - 1)) / findingCount`

This calculation is subject to future adjustments to align with auditors needs.

#### Example:

Given a **H/M Prize Pot** of **$30,000** and a **Final report** with **3 Highs** and **2 Mediums**:

* **Auditor A** submitted: High A, B, Medium A
* **Auditor B** submitted: High A, C, Medium A, B
* **Auditor C** submitted: High A, Medium A, B, C

The shares per finding would be:

* **Medium A** (3 findings): `1 * (0.9^(3 - 1)) / 3 = 0.27`
* **Medium B** (2 findings): `1 * (0.9^(2 - 1)) / 2 = 0.45`
* **Medium C** (1 finding): `1 * (0.9^(1 - 1)) / 1 = 1`
* **High A** (3 findings): `5 * (0.9^(3 - 1)) / 3 = 1.35`
* **High B** (1 finding): `5 * (0.9^(1 - 1)) / 1 = 5`
* **High C** (1 finding): `5 * (0.9^(1 - 1)) / 1 = 5`

Total shares:

* **Auditor A**: `1.35 + 5 + 0.27 = 6.62` shares
* **Auditor B**: `1.35 + 5 + 0.27 + 0.45 = 7.07` shares
* **Auditor C**: `1.35 + 0.27 + 0.45 + 1 = 3.07` shares

The prize distribution would be:

* **Auditor A**: `6.62 / 16.76 = 39.5%` of the prize pot = $11,850
* **Auditor B**: `7.07 / 16.76 = 42.2%` of the prize pot = $12,660
* **Auditor C**: `3.07 / 16.76 = 18.3%` of the prize pot = $5,490

### Low Findings

For this tier, the prize pool is considerably smaller. The current calculation for low risk shares is:

* **Low Risk Shares**: `1 * (0.9^(findingCount - 1)) / findingCount`

Given the smaller prize pool and the potential volume of findings in this tier, auditors should note that low effort submissions may be disqualified at the discretion of the judges.

### QA / Gas / Informational

As of August 18th, 2023, CodeHawks has stopped accepting findings related to gas optimizations, quality assurance issues, and informational insights.

***

### Duplicates

An issue is considered a duplicate if they have the same **root cause**. For example, the following two issues are duplicates:

* **No zero address check results in loss of funds: high**
* **Users can lose precision when it doesn't check for address(0): low**

These both have the same **root cause** even though they are submitted as different severity, and are considered duplicates.

The following are not considered duplicates:

* **Users can lose precision when it doesn't check for address(0): low**
* **Multiply before divide loses precision: low**

Since they have different root causes (checking the zero address vs dividing before multiplying), they are not considered duplicates.
