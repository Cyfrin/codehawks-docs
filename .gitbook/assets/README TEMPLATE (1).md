# Protocol Name 

<!-- <br/>
<p align="center">
<img src="./logo.png" width="500" alt="Ditto">
</p>
<br/> --> 


## Contest Details **THESE WILL BE PREPENDED TO THE SUBMITTED README BY THE CYFRIN TEAM**

- Total Prize Pool: 
  - HM Awards: 
  - Low Awards: 
  - GAS, Informational, or QAs Awards:
- Starts 
- Ends 

## Stats **THESE WILL BE PREPENDED TO THE SUBMITTED README BY THE CYFRIN TEAM**
- nSLOC:
- Complexity Score:
- Dollars per Complexity:
- Dollars per nSLOC:

## About the Project

This section should give auditors a feeling for what the protocol does, it's primary functions and the goals it hopes to achieve. Can include links to project websites or docs

Example:

```
About

This project is meant to enable smart contract auditors (sellers) and smart contract protocols
looking for audits (buyers) to connect using a credibly neutral option, with optional arbitration.

[Documentation](www.docs.com)
[Website](www.protocolwebsite.com)
[Twitter](www.twitter.com/handle)
[GitHub](www.GitHub.com/account)
```

## Actors

Detail which roles are included within your protocol, for example 'owner', 'borrower', 'organizer' etc. Draw clear links and outline the powers each actor should have and expected limitations to those powers. Please clearly detail your expected centralization risks.

Example:

```
Actors:
    Buyer: The purchaser of services, in this scenario, a project purchasing an audit.
    Seller: The seller of services, in this scenario, an auditor willing to audit a project.
    Arbiter: An impartial, trusted actor who can resolve disputes between the Buyer and Seller.
    The Arbiter is only compensated the arbiterFee amount if a dispute occurs.
```

## Scope (contracts)

This section should give auditors a clear understanding of what files and directories are included within the scope of the contest. You can itemize every applicable file, or list particular folders or directories, but please be specific and thorough. This will server as an auditors ultimate reference point for what to focus on. Please include a commit hash

Example:
```
All Contracts in `src` are in scope.
```
```js
src/
├── Beedle.sol
├── Fees.sol
├── Lender.sol
├── Staking.sol
├── interfaces
│   ├── IERC20.sol
│   └── ISwapRouter.sol
└── utils
    ├── Errors.sol
    ├── Ownable.sol
    └── Structs.sol

```

## Compatibilities

Please outline specific compatibilities of the protocol ie. blockchains (All EVM Compatible, specific chains). Please also include specific tokens, referencing standard contracts/interfaces when necessary, that are expected to function with the protocol. Include all whitelisted, or blacklisted tokens which are or are not supported. If the protocol is expected to function with **any** chain compatible tokens, please specify this.

Example:

```
Compatibilities:
  Blockchains:
      - Ethereum/Any EVM
  Tokens:
      - ETH
      - WETH
      - Matic
      - [ERC720](www.tokenstandard.com)
      - [ERC721](www.tokenstandard.com)
```

## Setup

Please outline specific steps/processes to be followed in order for an auditor to run the project off a local clone of the contest repo. Please again be detailed and thorough, including specific markdowned CLI commands and necessary .env adjustments.

Please also include steps needed to run appropriate tests included in scope.

Example:

Build:
```bash
forge init

forge install OpenZeppelin/openzeppelin-contracts

forge install vectorized/solady

forge build
```

Tests:
```bash
Forge test
```

## Known Issues

Please clearly detail **all** currently recognized issues or vulnerabilities within the scope submitted. Please be thorough and precise, following the end of the 48-hour Kick-Off period, these Known Issues will be immutable for the duration of the contest.

Example:

`Known Issues:
- Addresses other than the zero address (for example 0xdead) could prevent disputes from being resolved -
Before the buyer deploys a new Escrow, the buyer and seller should  agree to the terms for the Escrow. If the
buyer accidentally or maliciously deploys an Escrow with incorrect arbiter details, then the seller could refuse
to provide their services. Given that the buyer is the actor deploying the new Escrow and locking the funds, it's
in their best interest to deploy this correctly.

- Large arbiter fee results in little/no seller payment - In this scenario, the seller can decide to not perform
the audit. If this is the case, the only way the buyer can receive any of their funds back is by initiating the dispute
process, in which the buyer loses a large portion of their deposited funds to the arbiter. Therefore, the buyer is
disincentivized to deploy a new Escrow in such a way.

- Tokens with callbacks allow malicious sellers to DOS dispute resolutions - Each supported token will be vetted
to be supported. ERC777 should be discouraged.

- Buyer never calls confirmReceipt - The terms of the Escrow are agreed upon by the buyer and seller before deploying
it. The onus is on the seller to perform due diligence on the buyer and their off-chain identity/reputation before deciding
to supply the buyer with their services.

- Salt input when creating an Escrow can be front-run

- arbiter is a trusted role

- User error such as buyer calling confirmReceipt too soon

- Non-tokenAddress funds locked`
