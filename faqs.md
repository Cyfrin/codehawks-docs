# ⁉ FAQs

### **Judging**

***

#### **Who are the CodeHawks judges?**

Judging is conducted by a dedicated panel consisting of members from the Cyfrin team and engineers from the sponsoring protocol. This approach ensures impartiality, minimizing potential bias and conflicts of interest.

#### **How long does judging take?**

The duration for judging varies based on the size of the codebase and the number of submissions received. Specific timelines for each contest will be announced on our [**Twitter page**](https://twitter.com/CodeHawks) and within the appropriate contest channel on our [Discord](https://discord.gg/cyfrin).

#### **Can I help Judge?**

Currently, we do not have a community judges initiative in place. However, it's on our roadmap for future implementation. Our primary concern is to ensure that any system we introduce maintains the highest standards of impartiality and transparency. We've observed conflicts of interest arising on other competitive platforms when community members were involved in judging. Our goal is to create a judging process that everyone can trust and feel comfortable with.

#### **I don’t agree with the judgment, what can I do?**

The judging period of every contest is immediately followed by a 48 hour Appeals Period. This period allows auditors an opportunity to raise objections and voice concerns they have with the preliminary judgements. The Appeals Period will be clearly announced via [Twitter](https://twitter.com/CodeHawks) and [Discord](https://discord.gg/cyfrin)

See the [Appeals](judging/appeals.md) page for more information.

#### **What is a finding?**

A finding represents a vulnerability in the codebase. Findings are categorized into different levels of severity:

1. **High:** This category indicates that funds are directly or nearly directly at risk.
2. **Medium:** In this category, funds are indirectly at risk, or there's a disruption of protocol functionality or availability.
3. **Low, Gas, Informational:**
   * **Low:** Funds are not at risk, but a function might be incorrect, state might not be handled appropriately, etc.
   * **Gas:** Refers to gas optimizations.
   * **Informational:** Pertains to code style, maturity, code smells, comment correctness, and similar aspects.

It's important to note that there is some subjectivity involved in these categories, and the final determination of a finding's category is at the discretion of the judges. If a protocol has its own specific criteria, then that should be followed.

Additionally, at the beginning of each competition, the "[4naly3er](https://github.com/Picodes/4naly3er)" tool will be run, and any findings associated with this tool are ineligible for rewards. The basis for findings may evolve as CodeHawks progresses.

For more information related to findings and how to evaluate their severity, consult the [how-to-evaluate-a-finding-severity.md](hawks-auditors/how-to-evaluate-a-finding-severity.md "mention")guide.

### 📃 **Submissions**

***

#### **Is X a valid submission?**

To determine if "X" is a valid submission, it must be evaluated against the criteria provided by CodeHawks. A valid submission typically represents a vulnerability in the codebase. The submission should fall into one of the categories: High, Medium, Low, Gas, or Informational. However, it's essential to note that if more than 85% of your findings are not valid, you will be disqualified from the competition. For instance, if you submit 1 valid finding and 6 invalid ones, only 14.3% of your submissions are valid, leading to disqualification.

Additionally, any findings associated with the "[4naly3er](https://github.com/Picodes/4naly3er)" tool, run at the start of each competition, are ineligible for rewards. The submission format should also align with the latest format provided on the website.

The guidelines used to evaluate the findings' validity can be found in the  [how-to-determine-a-finding-validity.md](hawks-auditors/how-to-determine-a-finding-validity.md "mention")documentation.

#### **What happens if one of my submissions is invalid?**

If "Y" is an invalid finding and you have a high percentage of invalid findings, it can count against you. Specifically, if more than 85% of your findings are not valid, you will be disqualified from the competition. This system is designed to allow some leeway for invalid submissions but aims to prevent participants from spamming the system with numerous invalid findings.

Refer to the [how-to-determine-a-finding-validity.md](hawks-auditors/how-to-determine-a-finding-validity.md "mention") to make sure your findings respect our validity guidelines.

#### **I’m unsure of the severity of my submission, what should I do?**

If you're unsure of the severity of your submission, consider the following steps based on the information provided by CodeHawks:

1. **Review the Categories:** Revisit the definitions of the severity categories provided by CodeHawks:
   * **High:** Funds are directly or nearly directly at risk.
   * **Medium:** Funds are indirectly at risk or there's a disruption of protocol functionality or availability.
   * **Low, Gas, Informational:**
     * **Low:** Funds are not at risk, but a function might be incorrect, or state might not be handled appropriately.
     * **Gas:** Refers to gas optimizations.
     * **Informational:** Pertains to code style, maturity, code smells, comment correctness, etc.
2. **Judge's Discretion:** Remember that there is some subjectivity involved in determining the severity. The final categorization is up to the judges' discretion. If the protocol you're auditing has its own specific criteria, then that should be followed.
3. **Seek Feedback:** Before finalizing your submission, consider discussing it with peers or mentors on our [Discord](https://discord.gg/cyfrin) server who have experience in the field. They might provide insights that can help you gauge the severity of your findings.
4. **Provide Detailed Information:** When submitting, ensure you provide comprehensive details about the vulnerability. This includes a summary, vulnerability details, potential impact, tools used, and recommended mitigation. The more information you provide, the easier it will be for the judges to assess the severity accurately.
5. **Stay Updated:** As CodeHawks evolves, the basis for findings and their categorizations might change. Always refer to the latest guidelines on the CodeHawks website to ensure you're up-to-date with their criteria.

Lastly, even if you're unsure, it's better to submit your findings. The judges will review it and assign the appropriate severity based on their assessment.

For more information consult [how-to-evaluate-a-finding-severity.md](hawks-auditors/how-to-evaluate-a-finding-severity.md "mention").

#### **What happens if I choose the wrong severity?**

The severity of findings has an element of subjectivity. The judges will review your submission and may re-categorize it based on their assessment.

There isn't a direct penalty mentioned for misclassifying the severity. However, consistently misclassifying or misrepresenting findings could impact your credibility in the competition.

For more information consult [how-to-evaluate-a-finding-severity.md](hawks-auditors/how-to-evaluate-a-finding-severity.md "mention").

### Competitive Audits

#### Do we have to wait until the start date to see the code?

Yes, codebases are made public only once the contest has started. You can find the starting date and time for every contest in the related contest page on [codehawks.com](https://codehawks.com)

#### How is nSLOC calculated?

nSLOC stands for 'Normalized Source Code', which is a custom measurement used (among others) when evaluating the complexity of a codebase.

To get the NSLOC count of a file:

1. For all functions, reduce any multiline function declarations to a single line.
2. Remove all comments
3. Remove all empty lines
4. Count the remaining lines

#### What is 'Complexity' and how is it calculated?

Complexity is determined by using the Solidity Metric's tool. Addition details available&#x20;

[**here**](https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-metrics\&ssr=false#overview)**.**
