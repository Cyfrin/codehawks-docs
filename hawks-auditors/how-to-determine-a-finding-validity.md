# How to Determine a Finding Validity

For findings to be considered valid, they need to check all the properties listed below:

* Submissions must be made during the official duration of the contest.
* Valid submissions should identify legitimate vulnerabilities within the codebase.
* Issues that fall under Gas/QA or Informational severity will not be eligible for rewards, even if they are accurate or correct.
* Submissions should include sufficient details and proof to support the findings. For instance, while ChatGPT and AI can assist in bug finding, relying solely or primarily on AI responses often leads to poor reports. Reports suspected of this approach will likely be deemed invalid.

### Contest-specific validity guidelines

There are two criteria to determine the validity of a finding within the context of a specific contest:

* The official contest specification on the [CodeHawks](https://www.codehawks.com) contest's page
* The code within the scope

After a contest launch, Sponsors have a 48-hour [kick-off period](the-kick-off-period.md) to address any ambiguities raised by auditors in Discord regarding the contest-specific validity guidelines. Once this window has passed, the official contest specification on Cyfrin CodeHawks will be updated with answers from the Sponsor, becoming the ultimate standard for determining the validity of an issue within the contest**.**

{% hint style="warning" %}
Sponsors are strictly prohibited from employing the "[Moving The Goalposts](https://youtu.be/KeswYJgf5mM?feature=shared\&t=19)" logical fallacy to invalidate submissions after these 48 hours.&#x20;
{% endhint %}

Judges and Sponsors may only invalidate a submission if it fails to meet the contest's predefined criteria.

### Vague generalities

Vague generalities are always judged as invalid submissions. Examples include:

* "This function may have re-entrance; add re-entrance guard."
* "This hash function may have a hash collision; do the hashing differently."

Suppose an auditor identifies a vulnerability in a function. In that case, they are responsible for demonstrating its impact by creating a [proof of concept](how-to-create-and-submit-a-poc.md) (PoC) exploit that can cause significant damage to the system or result in permanent grief or denial of service.

However, if another auditor submits an actual exploit with a PoC that proves the vague generality to be accurate, only that auditor will be rewarded.\
\
Please refer to the dedicated guide for detailed instructions on what to include and how to [submit a finding](how-to-write-and-submit-a-finding.md).

To determine the validity of a finding, we provide several issue categories as a guideline. Please note that final determinations will always be at the discretion of the Judge.

### Findings that may be invalid

The following is a high-level list of issues which are usually not considered valid.

{% hint style="info" %}
The following table is a rough guide and **does not represent concrete policy**. Each issue's validity **may vary**, pending conditions and circumstances. Final determinations are at the judge/protocol's discretion.
{% endhint %}

| Issue                                      | Description                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Gas optimizations                          | Users/protocols may pay extra gas due to this issue.                                                             |
| **Zero address checks**                    | Ensure input values are not zero addresses.                                                                      |
| **Admin Input/call validation**            | Issues related to incorrect input by admins, call order mistakes, and assumptions breaking due to admin actions. |
| **Front-running initializers**             | If there's no irreversible damage or fund loss & the protocol can redeploy and initialize again.                 |
| **User experience and design improvement** | Minor inconveniences or design opinions with no clear loss of funds indication.                                  |
| **User Blacklist**                         | A user being blacklisted causing harm only to themselves.                                                        |
| **EIP compliance with no integrations**    | If no external integrations exist and no adverse effects arise due to non-compliance with an EIP.                |
| **Users sending ETH/native tokens**        | If contracts allow users to send tokens accidentally.                                                            |
| **Loss of rewards**                        | Losing airdrops, liquidity fees, or other rewards not in the protocol design.                                    |
| **Incorrect values in View functions**     | Considered low by default, unless used in a larger function resulting in fund loss.                              |
| **Mock contracts issues**                  | Any issues found in mock contracts.                                                                              |
| **Slippage**                               | Issues showing definite fund loss with a detailed explanation.                                                   |
| **EIP Compliance**                         | Issues regarding EIP compliance with essential external integrations.                                            |
| **Out of Gas**                             | Issues leading to Out of Gas errors due to malicious users or specific call flows.                               |

\
