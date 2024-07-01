# How to Present Your Findings

At Cyfrin CodeHawks, ensuring a streamlined and standardized process for reporting vulnerabilities is paramount. This ensures your submissions are explained clearly, facilitates fair judging, and gives you better chances to submit a valid finding and earn rewards.

All finding submissions are handled directly through the CodeHawks web platform to ensure a simple and streamlined process.

### **Choosing between submitting single or multiple reports**

Once you've determined the [severity of your finding](how-to-evaluate-a-finding-severity.md) and its [validity](how-to-determine-a-finding-validity.md), refer to the following report format:

* **Medium or High Severity Findings**: Submit individually.
* **Low Findings (Low risk or Non-critical)**: Compile into a single report per auditor or team

### **How to adequately explain and prove your findings**&#x20;

The auditors are responsible for validating the findings. A detailed explanation and justification of the potential impact are crucial for a top-quality submission. The depth of the proof required correlates with the potential value of the submission.

Insufficient proof is when a judge needs to invest additional time in research or coding to verify the claims made in the submission. Providing a coded [proof of concept (POC)](how-to-create-and-submit-a-poc.md) for your findings is highly recommended. This aids the judges immensely in swiftly and accurately verifying your claims.

_Submissions deemed to lack sufficient evidence may risk_ [_invalidation_](../judging/disqualification-criteria.md)_._

### **How to format your report**

When documenting a finding, adhere to the following structure:

```markdown
## Summary

(Provide a brief overview of the vulnerability.)

## Vulnerability Details

(Delve deep and elaborate on the identified issue, including where it exists in the codebase.)

## Impact

(Describe the potential consequences of this vulnerability. How could it harm the protocol or users?)

## Tools Used 

(List any tools or software that aided in the identification of the vulnerability.)

## Recommended Mitigation

(Suggest ways to resolve or mitigate the identified vulnerability.)
```

