# How to Evaluate a Finding Severity

When identifying vulnerabilities in a codebase, it's crucial to assess the potential impact and risk associated with them. Findings, or vulnerabilities, are separated into three categories:&#x20;

* **High**
* **Medium**
* **Low severity**

These severities help stakeholders prioritize and address the issues appropriately. For auditors, finding higher-severity findings will increase their ranking in the contest leaderboard and [payout](payouts.md).

### How to evaluate a finding severity

The severity of a finding can be categorized as **High**, **Medium**, or **Low** and is determined based on several factors:

1. **Impact on the protocol:** How severe would the potential damage be if the vulnerability were exploited
2. **Likelihood of exploitation:** How probable would an attacker exploit this vulnerability?
3. **Degree of judge/protocol subjectivity**

<table><thead><tr><th width="132"> </th><th> </th><th>Impact</th><th> </th><th> </th></tr></thead><tbody><tr><td></td><td></td><td>High</td><td>Medium</td><td>Low</td></tr><tr><td></td><td>High</td><td>H</td><td>H/M</td><td>M</td></tr><tr><td><strong>Likelihood</strong></td><td>Medium</td><td>H/M</td><td>M</td><td>M/L</td></tr><tr><td></td><td>Low</td><td>M</td><td>M/L</td><td>L</td></tr></tbody></table>

{% hint style="warning" %}
**Subjectivity in Classification**

While the Impact vs Likelihood matrix provides a structured approach, there remains a degree of subjectivity in classifying findings. The judge's discretion is pivotal in determining a finding's category.

If the protocol under audit stipulates particular criteria, then those guidelines should be the benchmark for classifying findings.
{% endhint %}

#### How to evaluate the impact of a finding

Impact refers to the potential harm or consequence to the users or the protocol due to the vulnerability.

* **High Impact**:
  * Funds are directly or nearly directly at risk.
  * There's a severe disruption of protocol functionality or availability.
* **Medium Impact**:
  * Funds are indirectly at risk.
  * There's some level of disruption to the protocol's functionality or availability.
* **Low Impact**:
  * Funds are not at risk.
  * However, a function might be incorrect, the state might not be handled appropriately, etc.

#### How to evaluate the l**ikelihood of exploitation of a finding**

Likelihood represents the probability of the impact occurring due to the vulnerability.

<details>

<summary>High likelihood</summary>

It's highly probable to happen. For instance, a hacker can call a function directly and extract money.

</details>

<details>

<summary>Medium likelihood</summary>

It might occur under specific conditions. For example, a peculiar ERC20 token is used on the platform.

</details>

<details>

<summary>Low likelihood</summary>

It is unlikely to occur. An example might be if a hard-to-change variable is set to a unique value on a specific block.

</details>

{% hint style="info" %}
**Note**\
There are instances where the likelihood is deemed "computationally infeasible". For example, "An attacker could guess the user's private key".&#x20;

The author must demonstrate that their finding is computationally feasible in such scenarios.
{% endhint %}

### Examples of High, Medium, and Low severity findings

#### High Severity Findings

**Properties:**

* Direct impact on the funds or the main functionality of the protocol.
* The attack path is straightforward.
* The vulnerability is easily exploitable, leading to significant damage.

**Example:**\
[See Detailed High Severity Finding](https://solodit.xyz/issues/boostsetlockstatus-should-update-the-callers-rewards-first-hans-none-meta-markdown\_)

For more examples of High severity findings, visit [Solodit](https://solodit.xyz/).

#### Medium Severity Findings

**Properties:**

* Indirect impact on the funds or the protocol's functionality.
* The attack path isn't straightforward and needs specific conditions to be met.
* Though the vulnerability might cause harm, exploiting it is challenging.

**Example:**\
[See Detailed Medium Severity Finding](https://solodit.xyz/issues/the-off-chain-mechanism-must-be-ensured-to-work-in-a-correct-order-strictly-cyfrin-none-cyfrin-stake-link-markdown)

For more examples of findings on medium severity, visit [Solodit](https://solodit.xyz/).

#### Low Severity Findings

**Properties:**

* Minimal impact on the funds or the protocol's main functionality.
* The vulnerability doesn't lead to tangible real-world damage.
* The path to exploit is either non-existent or highly improbable.

**Example:**\
[See Detailed Low Severity Finding](https://solodit.xyz/issues/l-06-erc1155action-returns-false-on-supportsinterface-with-the-real-erc1155-interface-code4rena-notional-notional-contest-git)

For more severe findings, visit [Solodit](https://solodit.xyz/).

{% hint style="warning" %}
**Non-Acceptable Severity**

As of August 18th, 2023, CodeHawks no longer accepts submissions with a severity of Gas, QA, or Informational. Ensure that the vulnerabilities you are submitting directly or indirectly impact the protocol and are not merely gas optimizations, quality assurance issues, or informational insights.
{% endhint %}

***

For more information on how to write and submit findings, refer to the [How to write and submit a finding](how-to-write-and-submit-a-finding.md) guide.
