# How to Write and Submit a Finding

## **How to Write and Submit a Finding with CodeHawks**

At CodeHawks, ensuring a streamlined and standardized process for reporting vulnerabilities is of utmost importance. This ensures your submissions are explained with clarity, facilitates fair judging, and results in a safer blockchain ecosystem.

All finding submissions are handled directly through the [CodeHawks](https://www.codehawks.com) web platform to ensure a simple and streamlined process.

### **How to format your finding report**

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

### **Report Format for different findings severity**

Once you've determined the [severity of your finding](how-to-evaluate-a-finding-severity.md) follow the following report format:

* **Medium or High Severity Findings**: Submit individually.
* **Low Findings (Low risk or Non-critical)**: Compile into a single report per auditor or team.

For an in-depth understanding on assessing risk, refer to our [how to evaluate a finding severity](how-to-evaluate-a-finding-severity.md) guide

### **Burden of Proof**

The responsibility to validate the findings rests with the auditors. A detailed explanation and justification of the potential impact are crucial for a top-quality submission. The depth of the proof required correlates with the potential value of the submission.

An insufficient proof is when a judge needs to invest additional time in research or coding to verify the claims made in the submission. It's highly recommended to provide a coded proof of concept (POC) for your findings. This aids the judges immensely in verifying your claims swiftly and accurately.

_Submissions deemed to lack sufficient evidence may risk invalidation._

Refer to our [How to create a PoC guide](how-to-create-and-submit-a-poc.md) to learn how to get the most our of your reports.

