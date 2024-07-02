---
description: Find answers to the most frequently asked questions on CodeHawks.
---

# ⁉️ FAQs

### **⚙️ General**&#x20;

***

<details>

<summary>What is Cyfrin CodeHawks?</summary>

Codehawks is a smart contract competitive audits platform helping protect some of the world’s largest protocols, thousands of users, and billions of TVL through crowdsourced security pre and post-deployment security solutions.

</details>

<details>

<summary>What is a competitive audit?</summary>

Protocols and organizations host competitions to find vulnerabilities in their smart contracts. Auditors uncover vulnerabilities and bugs in a project’s codebase to earn a reward.

Competitions incentivize security auditors to conduct more comprehensive audits by offering rewards based on the severity of the bugs they discover.

</details>

<details>

<summary>How can I host a competition on CodeHawks?</summary>

Fill out [this form](https://cyfrin.io/get-an-audit) to contact us. One of our experts will contact you within 48 hours to walk you through every step of the process and find the right security solution for your protocol or organization's needs.

</details>

<details>

<summary>How is a contest prize pool determined?</summary>

The total prize pool of a contest is calculated based on the number of lines of code in the codebase's scope, without counting comments and empty lines.

</details>

<details>

<summary>How do I get rewarded?</summary>

Rewards are paid out in USDC through the ZKsync chain. Once a judge deems a submission valid, a reward will be assigned and credited to the zkSync wallet address indicated by the user on their profile once the competition ends.

**Note**: crediting the reward won't be possible without a ZKsync wallet connected to the user profile.

</details>

<details>

<summary>Where can I find invoice information for my winnings?</summary>

**Address:**

9066 CASCADA WAY #102\
NAPLES, FL. 34114\
UNITED STATES\
\
**Tax ID:**\
92-1600150\
\
**Company Name:**\
Cyfrin Inc.

</details>

<details>

<summary>How do I KYC to receive a reward?</summary>

Specific competitions will need auditors to KYC to receive their rewards. Once the contest ends, if you're not KYC'd yet, you'll receive an in-platform notification and an email with all the steps you'll need to take to complete the KYC process and unlock your rewards.

</details>

### 🤝 Competitive Audits

***

<details>

<summary>What is a first flight?</summary>

CodeHawks First Flights is a Cyfrin flagship initiative. Smart contract auditing contests written to simulate real-world protocols, designed to introduce the next generation of developers to security audits.

</details>

<details>

<summary>Do we have to wait until the start date to see the code?</summary>

Yes, codebases are made public only once the contest has started. You can find the starting date and time for every contest in the related contest page on [codehawks.com](https://codehawks.com)

#### How is nSLOC calculated?

nSLOC stands for 'Normalized Source Code', which is a custom measurement used (among others) when evaluating the complexity of a codebase.

To get the NSLOC count of a file:

1. For all functions, reduce any multiline function declarations to a single line.
2. Remove all comments
3. Remove all empty lines
4. Count the remaining lines

</details>

### 📃 **Submissions**

***

<details>

<summary>Is "X" a valid submission?</summary>

To determine if "X" is a valid submission, it must be evaluated against the criteria provided by CodeHawks. A valid submission typically represents a vulnerability in the codebase. The submission should fall into one of the categories: High, Medium, Low, Gas, or Informational. However, it's essential to note that if more than 85% of your findings are invalid, you will be disqualified from the competition. For instance, if you submit one valid finding and six invalid ones, only 14.3% of your submissions are valid, leading to disqualification.

Additionally, any findings associated with the "[4naly3er](https://github.com/Picodes/4naly3er)" tool, run at the start of each competition, are ineligible for rewards. The submission format should also align with the latest format provided on the website.

The guidelines used to evaluate the findings' validity can be found in the  [how-to-determine-a-finding-validity.md](hawks-auditors/how-to-determine-a-finding-validity.md "mention")documentation.

</details>

<details>

<summary>I’m unsure of the severity of my submission, what should I do?</summary>

If you're unsure of the severity of your submission, consider the following steps based on the information provided by CodeHawks:

1. **Review the Categories:** Revisit the definitions of the severity categories provided by CodeHawks:
   * **High:** Funds are directly or nearly directly at risk.
   * **Medium:** Funds are indirectly at risk, or protocol functionality or availability is disrupted.
   * **Low, Gas, Informational:**
     * **Low:** Funds are not at risk, but a function might be incorrect, or the state might not be handled appropriately.
     * **Gas:** Refers to gas optimizations.
     * **Informational:** Pertains to code style, maturity, code smells, comment correctness, etc.
2. **Judge's Discretion:** Remember that determining the severity involves some subjectivity. The final categorization is up to the judges' discretion. If the protocol you're auditing has specific criteria that should be followed.
3. **Seek Feedback:** Before finalizing your submission, consider discussing it with peers or mentors on our [Discord](https://discord.gg/cyfrin) server who have experience in the field. They might provide insights that can help you gauge the severity of your findings.
4. **Provide Detailed Information:** When submitting, provide comprehensive details about the vulnerability. This includes a summary, vulnerability details, potential impact, tools used, and recommended mitigation. The more information you provide, the easier for the judges to assess the severity accurately.
5. **Stay Updated:** As CodeHawks evolves, the basis for findings and their categorizations might change. Always refer to the latest guidelines on the CodeHawks website to ensure you're up-to-date with their criteria.

Lastly, even if you're unsure, submitting your findings is better. The judges will review it and assign the appropriate severity based on their assessment.

For more information consult [how-to-evaluate-a-finding-severity.md](hawks-auditors/how-to-evaluate-a-finding-severity.md "mention").

#### **What happens if I choose the wrong severity?**

The severity of findings has an element of subjectivity. The judges will review your submission and may re-categorize it based on their assessment.

There isn't a direct penalty mentioned for misclassifying the severity. However, consistently misclassifying or misrepresenting findings could impact your credibility in the competition.

For more information consult [how-to-evaluate-a-finding-severity.md](hawks-auditors/how-to-evaluate-a-finding-severity.md "mention").

</details>

<details>

<summary>What happens if one of my submissions is invalid?</summary>

If "Y" is an invalid finding and you have many invalid findings, it can count against you. Specifically, if more than 85% of your findings are invalid, you will be disqualified from the competition. This system is designed to allow some leeway for invalid submissions but aims to prevent participants from spamming the system with numerous invalid findings.

Refer to the [how-to-determine-a-finding-validity.md](hawks-auditors/how-to-determine-a-finding-validity.md "mention") to make sure your findings respect our validity guidelines.

</details>

### **👩‍⚖️ Judging**&#x20;

***

<details>

<summary>Who are the CodeHawks judges?</summary>

Judging is conducted by a dedicated panel of members from the Cyfrin team and engineers from the sponsoring protocol. This approach ensures impartiality and minimizes potential bias and conflicts of interest.

</details>

<details>

<summary>What is community judging?</summary>

Community judging allows eligible CodeHawks auditors to earn rewards for judging other users' submissions. This drastically speeds up triage and turnaround times while giving auditors another chance to climb the leaderboard and showcase their skills.

</details>

<details>

<summary>How long does judging take?</summary>

The duration for judging varies based on the size of the codebase and the number of submissions received. Specific timelines for each contest will be announced on our [**Twitter page**](https://twitter.com/CodeHawks) and within the appropriate contest channel on our [Discord](https://discord.gg/cyfrin).

</details>

<details>

<summary>Can I help Judge?</summary>

Currently, we do not have a community judges initiative in place. However, it's on our roadmap for future implementation. Our primary concern is to ensure that any system we introduce maintains the highest standards of impartiality and transparency. We've observed conflicts of interest arising on other competitive platforms when community members were involved in judging.&#x20;

We aim to create a judging process everyone can trust and feel comfortable with.

</details>

<details>

<summary>I don’t agree with the judgment, what can I do?</summary>

The judging period of every contest is immediately followed by a 48-hour Appeals Period. This period allows auditors an opportunity to raise objections and voice concerns they have with the preliminary judgments. The Appeals Period will be clearly announced via [Twitter](https://twitter.com/CodeHawks) and [Discord](https://discord.gg/cyfrin)

See the [Appeals](hawks-auditors/appeals.md) page for more information.

</details>

<details>

<summary>What is a finding?</summary>

A finding represents a vulnerability in the codebase. Findings are categorized into different levels of severity:

1. **High:** This category indicates that funds are directly or nearly at risk.
2. **Medium:** In this category, funds are indirectly at risk, or protocol functionality or availability is disrupted.
3. **Low, Gas, Informational:**
   * **Low:** Funds are not at risk, but a function might be incorrect, state might not be handled appropriately, etc.
   * **Gas:** Refers to gas optimizations.
   * **Informational:** Pertains to code style, maturity, code smells, comment correctness, and similar aspects.

It's important to note that these categories involve some subjectivity, and the judges determine a finding's category. If a protocol has specific criteria, then that should be followed.

Additionally, at the beginning of each competition, the "[4naly3er](https://github.com/Picodes/4naly3er)" tool will be run, and any findings associated with this tool are ineligible for rewards. The basis for findings may evolve as CodeHawks progresses.

For more information on findings and how to evaluate their severity, consult the [how-to-evaluate-a-finding-severity.md](hawks-auditors/how-to-evaluate-a-finding-severity.md "mention")guide.

</details>

