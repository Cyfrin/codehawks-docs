# CodeHawks Docs

## Introduction
CodeHawks is a platform that offers smart contract auditing services for blockchain protocols. You can request a private or a competitive audit from our network of experienced and skilled auditors, who will review your codebase and report any vulnerabilities or issues they find. You can also join our platform as an auditor and compete for rewards by finding bugs in other projects' code.

## How it works
If you are a protocol developer, you can request an audit by filling out a form on our website. We will get back to you within 2 business days to start the process. You will need to provide us with the following information:

- The commit hash of your repo, which represents the exact code you want us to audit.
- The scope and complexity of your code, which determines the duration and price of the audit.
- The type of audit you want: private or competitive.

### Private Audit
A private audit is where you hire one or more auditors directly through our platform. You can invite specific auditors to your project or let us choose the best ones for you. A private audit consists of two phases: an initial report and a final report. In the initial report, the auditors will list all the findings they discover in your code, categorized by severity: high, medium, low, or informational. In the final report, the auditors will review the changes you made to fix the issues and confirm that they are resolved.

### Competitive Audit
A competitive audit is where you post your project on our platform and let hundreds of auditors compete to find vulnerabilities in your code. You will set a prize pool for the audit, which will be distributed among the winners based on the quality and quantity of their findings. A competitive audit consists of one phase: an audit report. In the audit report, we will compile all the findings submitted by the auditors and rank them by severity and relevance. You will then be able to review the report and fix the issues in your code.

### For Auditors
If you are an auditor, you can register on our platform and start submitting findings on any active audits. You will need to provide us with the following information:

- Your wallet address, which we will use to pay you for your work.
- Your skills and experience, which we will use to match you with suitable projects.

You can browse the latest audits on our website and choose the ones that interest you. You can submit your findings through our website, following our guidelines and format. You will be competing with other auditors to find as many vulnerabilities as possible in each project. We will judge your findings based on their impact, likelihood, and accuracy. If you win a prize, we will pay you in crypto through Arbitrum L2.

## Why CodeHawks?
CodeHawks is more than just an auditing platform. We are a community of passionate and talented auditors who want to make Web3 a safer and better place. We value transparency, quality, and education. Here are some of the benefits of using CodeHawks:

- Audit Marketplace: We offer a variety of options for audits, from private to competitive, from direct hire to anonymous submissions. You can choose the best option for your project and budget.
- No Token: We do not have a token or a DAO, which means we are not influenced by any external factors or incentives. We are focused on delivering the best service possible for our clients and auditors.
- Educational Content: We provide learning resources and tutorials for auditors who want to improve their skills and knowledge. We also share best practices and tips for protocol developers who want to write secure and efficient code.
- Decentralized Judging: We are working on a system that will allow our community to participate in judging the findings submitted by auditors. This way, we can ensure fairness and accuracy in our reports.

## Roadmap
We are constantly working on improving our platform and adding new features. Here is our approximate roadmap:

- July 11: Launch v0.1 of CodeHawks
- July 24: First competition goes live
- (?) Private Audit Marketplace goes live
- (?) Security & Auditing Curriculum
- (?) Decentralized Judging
- (?) DACify (potentially a DAC over a DAO).

## FAQ
If you have any questions about CodeHawks, please check out our FAQ page where we answer some frequently asked questions.

## Contact Us
We appreciate your interest and support for CodeHawks. If you have any feedback or suggestions, please feel free to contact us or join our Discord server.

This repo contains the source code for the CodeHawks docs site.

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [pnpm](https://pnpm.io/)
  - You'll know you did it right if you can run `pnpm --version` and you see a response like `x.x.x`

## Quickstart

1. Clone repo and install dependencies
```bash
git clone https://github.com/Cyfrin/codehawks-docs
cd codehawks-docs
pnpm install
```

2. Start local server

```bash
pnpm dev
```

# Thank you!
We are always open to contributions, feel free to make a PR to improve the docs!
