# Audits

Both private and competitive audits work similarly, here is the basic process.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aOqhQvWhUG0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="What is a smart contract audit"></iframe>

## CodeHawks

To get a CodeHawks audit, simply go to [CodeHawks](https://codehawks.com/) and hit the big "request an audit" button, or just [click the link here]().

We will get back to you within 2 business days to start the process.

## 1. Price & Timeline
   
A protocol can reach out before or after their code is finished. Ideally, they reach out some time before so the auditor can have enough time to schedule them. 

Once they reach out, the teams will discuss how long the audit will take based on the scope and code complexity.

How long the audit will take depends on how many lines of code.
A very rough approximation of how long an audit takes depending on how many source lines of code you have can be found here:

![Duration](/lines-of-code-duration.png)

Typical time it takes to audit a project based on number of lines of code.
The duration sets the price, and at the time of recording, prices can range widely based on the different auditors.


## 2. Commit Hash, Down payment, Start Date
Auditors need to know exactly what code they are auditing and use the commit hash of your repo to do so. 
Once you have a commit hash, you can reach a start date and finalize the price.

## 3. Audit Begins
Then the audit starts! Your auditors will use every tool in their arsenal to find vulnerabilities in your code.

### Competitive Audit

For a competitive audit, this is when hundreds of auditors will start looking at your codebase and submit findings. They will be competiting to find as many vulnerabilties as possible. 

### Private Audit 

This is where the specific auditors on your project will start working on securing your codebase. 

## 4. Initial Report
After the period ends, the auditors will give you an initial report that looks like [this](https://github.com/Cyfrin/cyfrin-audit-reports/blob/main/reports/2023-03-13-beanstalk_wells_v0.1.pdf). 

All their findings are listed by severity, usually in formatted into:

- High
- Medium
- Low
- Informational / Non-critical / Gas

High, medium, and low represent the severity of the impact and likelihood of each vulnerability.
Informational, Gas, and Non-Critical are findings to improve the efficiency of your code, code structure, and best practice improvement suggestions are not vulnerabilities but ways to improve your code.

## 5. Mitigation Begins

*This is for private audits only. Competitive audits can opt into a competitive mitigation competition.*

The protocol's team will then have an agreed-upon time to fix the vulnerabilities found in the initial audit report. Sometimes, depending on the severity of the findings, this may be long but is often much shorter than the audit itself.

## 6. Final Report

*This is for private audits only. Competitive audits would just have another audit report after mitigation contest.*

After the protocol makes the changes, the audit team will do a final audit report exclusively on the fixes made to address the issues brought up in the initial report.

And then, hopefully, the auditors and protocols have had a great experience and will work together to stay secure in the future!

To learn more about how the competitive audit works from an auditor perspective, check out [auditors](/auditors/).