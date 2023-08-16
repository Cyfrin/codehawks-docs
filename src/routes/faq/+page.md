# FAQ

Here are some frequently asked questions.

## 🦅 Competitive Audits

### Do we have to wait till the start date to see the code?

Yes

### What is nSLOC?

This stands for "number of source lines of code". It represents how many lines of *source* code a project has, meaning not including comments, blank lines, etc. 

### What is 'Complexity' and how is it calculated?

Complexity is determined by using the Solidity Metric's tool. Addition details available **[here](https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-metrics&ssr=false#overview).**

## 👩‍⚖️ **Judging**
---
###  **Who’s judging?**

Judging is conducted by a dedicated panel consisting of members from the Cyfrin team and engineers from the sponsoring protocol. This approach ensures impartiality, minimizing potential bias and conflicts of interest.

### **How long does judging take?**

The duration for judging varies based on the size of the codebase and the number of submissions received. Specific timelines for each contest will be announced on our **[Twitter page](https://twitter.com/CodeHawks)** and within the appropriate contest channel on our Discord.

### **Can I help Judge?**

Currently, we do not have a community judges initiative in place. However, it's on our roadmap for future implementation. Our primary concern is to ensure that any system we introduce maintains the highest standards of impartiality and transparency. We've observed conflicts of interest arising on other competitive platforms when community members were involved in judging. Our goal is to create a judging process that everyone can trust and feel comfortable with.

### **I don’t agree with the judgment, what can I do?**

We understand that disagreements may arise. At present, we don't have an official dispute resolution process in place. However, if you have concerns about the judging results, we encourage you to reach out to our team directly either on our Discord server or through the support email provided on our website. Addressing and resolving disputes promptly is a top priority for us. Rest assured, we are actively working on implementing an official dispute resolution mechanism in the near future.

### **What is a finding?**

A finding represents a vulnerability in the codebase. Findings are categorized into different levels of severity:

1. **High:** This category indicates that funds are directly or nearly directly at risk.
2. **Medium:** In this category, funds are indirectly at risk, or there's a disruption of protocol functionality or availability.
3. **Low, Gas, Informational:**
    - **Low:** Funds are not at risk, but a function might be incorrect, state might not be handled appropriately, etc.
    - **Gas:** Refers to gas optimizations.
    - **Informational:** Pertains to code style, maturity, code smells, comment correctness, and similar aspects.

It's important to note that there is some subjectivity involved in these categories, and the final determination of a finding's category is at the discretion of the judges. If a protocol has its own specific criteria, then that should be followed.

Additionally, at the beginning of each competition, the "4naly3er" tool will be run, and any findings associated with this tool are ineligible for rewards. The basis for findings may evolve as CodeHawks progresses.

## 📃 **Submissions**
---
### **Is X a valid submission?**

To determine if "X" is a valid submission, it must be evaluated against the criteria provided by CodeHawks. A valid submission typically represents a vulnerability in the codebase. The submission should fall into one of the categories: High, Medium, Low, Gas, or Informational. However, it's essential to note that if more than 85% of your findings are not valid, you will be disqualified from the competition. For instance, if you submit 1 valid finding and 6 invalid ones, only 14.3% of your submissions are valid, leading to disqualification.

Additionally, any findings associated with the "4naly3er" tool, run at the start of each competition, are ineligible for rewards. The submission format should also align with the latest format provided on the website.

### **Will Y, if submitted, count against me?**

If "Y" is an invalid finding and you have a high percentage of invalid findings, it can count against you. Specifically, if more than 85% of your findings are not valid, you will be disqualified from the competition. This system is designed to allow some leeway for invalid submissions but aims to prevent participants from spamming the system with numerous invalid findings.

### **I’m unsure of the severity of my submission, what should I do?**
If you're unsure of the severity of your submission, consider the following steps based on the information provided by CodeHawks:

1. **Review the Categories:** Revisit the definitions of the severity categories provided by CodeHawks:
    - **High:** Funds are directly or nearly directly at risk.
    - **Medium:** Funds are indirectly at risk or there's a disruption of protocol functionality or availability.
    - **Low, Gas, Informational:**
        - **Low:** Funds are not at risk, but a function might be incorrect, or state might not be handled appropriately.
        - **Gas:** Refers to gas optimizations.
        - **Informational:** Pertains to code style, maturity, code smells, comment correctness, etc.

2. **Judge's Discretion:** Remember that there is some subjectivity involved in determining the severity. The final categorization is up to the judges' discretion. If the protocol you're auditing has its own specific criteria, then that should be followed.

3. **Seek Feedback:** Before finalizing your submission, consider discussing it with peers or mentors who have experience in the field. They might provide insights that can help you gauge the severity of your finding.

4. **Provide Detailed Information:** When submitting, ensure you provide comprehensive details about the vulnerability. This includes a summary, vulnerability details, potential impact, tools used, and recommended mitigation. The more information you provide, the easier it will be for the judges to assess the severity accurately.

5. **Stay Updated:** As CodeHawks evolves, the basis for findings and their categorizations might change. Always refer to the latest guidelines on the CodeHawks website to ensure you're up-to-date with their criteria.

Lastly, even if you're unsure, it's better to submit your finding. The judges will review it and assign the appropriate severity based on their assessment.

### **What happens if I choose the wrong severity?**

The severity of findings has an element of subjectivity. The judges will review your submission and may re-categorize it based on their assessment.

There isn't a direct penalty mentioned for misclassifying the severity. However, consistently misclassifying or misrepresenting findings could impact your credibility in the competition.

## ❕ **Escalations**
---
### **When will the preliminary results be released?**

The preliminary results will be unveiled as soon as our judging process concludes.

### **Will there be a chance to discuss or challenge these preliminary results?**

Yes! We've set an escalation period of exactly 2 days immediately after the results are announced. This will be your opportunity to raise concerns or provide additional insights.

### **How will I know when the escalation period starts?**

Keep a close watch on our communication channels (Twitter, Discord, Email etc)! We'll notify you as soon as the judging phase ends and the escalation window opens.

### **Why is this process new?**

This is our very first set of competitive audits. The overwhelming enthusiasm from the community has resulted in a record-breaking number of submissions. We're learning and improving every step of the way!

### **How do I raise an escalation?**

Please make a comment on your judged submission, in GitHub, detailing your concerns. State why you believe your issue is valid or challenge other entries if you find discrepancies.

### **What happens if my escalation lacks substantial evidence or reasoning?**

We appreciate thoroughness. Any escalation that appears hastily made or lacks clear evidence will be closed promptly. Quality over quantity!

### **I've raised multiple issues. Will they all be considered?**

While we encourage valid concerns, it's crucial to be discerning. If we find that a participant frequently raises issues with little merit, we might close their subsequent escalations, regardless of validity. The term "too many issues" is subjective for this competition. We urge you to be thoughtful.

### **Will future competitions have clearer guidelines?**

Absolutely! We aim to continually refine and enhance our judging parameters and escalation processes in subsequent editions based on feedback and learnings.

**Feedback Form:** https://app.deform.cc/form/992e3c6a-b817-49f5-8075-1e50fb2e2d0f/
