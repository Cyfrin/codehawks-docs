# What is a finding? 

A finding represents a vulnerability in the codebase, they are separeted *loosely* into 3 categories of `High`, `Medium`, and `Low`. 

To determine a finding's severity, you can look at the impact vs likelihood matrix. 

|            |        | Impact |        |     |
| ---------- | ------ | ------ | ------ | --- |
|            |        | High   | Medium | Low |
|            | High   | H      | H/M    | M   |
| Likelihood | Medium | H/M    | M      | M/L |
|            | Low    | M      | M/L    | L   |

## Impact

The impact to users. Impact can be "high", "medium", or "low".

Examples:
- High
  - Funds are directly or nearly directly at risk
  - Severe disruption of protocol functionality or availability
- Medium
  - Funds are indirectly at risk
  - Disruption of protocol functionality or availability
- Low 
  - Funds are not at risk, but a function is incorrect, state not handled appropriately, etc.


## Likelihood

Likelihood is the probability of the impact occuring. Likelihood can be "high", "medium", or "low".

- High
  - Highly likely to happen. (ex: A hacker can call a function directly and get money)
  - Anyone can execute the attack (ex: does not require a trusted / privileged actor)
- Medium
  - It might happen (ex: A specific weird ERC20 is used on a platform)
  - May involve a trusted / privileged actor (ex: owner is trusted & can perform an action that the code attempts to restrict them from doing)
- Low
  - Unlikely to happen. (ex: If a difficult to change variable is set to a certain value on a very specific singular block)

Keep in mind, there are some events where the likelihood is considered "computationally infeasible" and do not count as low. An example would be:

"An attack could guess the users private key".

In such cases, it's on the finding author to prove that their finding is computationally feasible. 

## Duplicates

An issue is considered a duplicate if they have the same `root cause`. For example, the following two issues are duplicates:

- `No zero address check results in loss of funds: high`
- `Users can lose precision when it doesn't check for address(0): low`

These both have the same `root cause` even though they are submitted as different severity, and are considered duplicates.

The following are not considered duplicates:

- `Users can lose precision when it doesn't check for address(0): low`
- `Multiply before divide loses precision: low`

Since they have different root causes (checking the zero address vs dividing before multiplying), they are not considered duplicates. The same root cause may yield multiple interesting & creative attack paths which can damage a protocol in different ways; in such cases judges may choose to award each attack path separately.

## Subjectivity 

There is some subjectivity when it comes to these categories, and it's up to the judges discretion to determine the category.

If the protocol specifically states some different criteria, then that is what should be followed. 

At the start of each competition, the [4naly3er](https://github.com/Picodes/4naly3er) tool will be run, and all findings associated with this tool are inelligible for rewards.

As CodeHawks evolves, this basis for findings will likely change.

## Contest-Specific Issue Validity Guidelines

There are two ultimate standards for determining whether an issue is valid within the context of a specific contest: the official written contest specification on CodeHawks and the code under audit in the contest.

After a contest has launched, Sponsors have 48 hours to clarify ambiguities which may be raised by auditors in discord. Once this 48 hour window has elapsed, the official written contest specification on CodeHawks will be updated with answers from the Sponsor and this updated specification will form the ultimate standard for determining whether an issue is valid or not within the context of the specific contest. After the 48hr window has elapsed, Sponsors are strictly forbidden from using the ["Moving The Goalposts" logical fallacy](https://youtu.be/KeswYJgf5mM?feature=shared&t=19) to invalidate submissions.

Judges & Sponsors may only invalidate a submission if it is invalid according to:
- the official written contest specification on CodeHawks (ex: the contest spec explicitly rules out an attack because it says an actor is trusted)
- the code under audit in the contest (ex: the attack doesn't work as the auditor claims)
- the general CodeHawks Validity guidelines (ex: this document)

Unless explicitly stated in the official written contest specification, Judges & Sponsors may not invalidate an issue by appealing to off-chain components or processes which are not under audit by claiming that these would have stopped an attack which is allowed by the code under audit. Usage of the ["Ad Hoc Rescue" logical fallacy](https://www.youtube.com/watch?v=XGeR9aQWipo) to invalidate submissions is strictly forbidden and a valid reason which satisfies these guidelines must always be given for judging a submission as invalid.

## Vague Generalities

Vague generalities are always judged as invalid submissions. Examples include:
- "this function may have re-entrancy, add re-entrancy guard"
- "this hash function may have hash collision, do the hashing a different way"

If an auditor believes that a function has a vulnerability, it is their duty to weaponize that vulnerability into a proof of concept exploit that will cause significant damage to the system or permanent grief/denial of service. Even if the vague generality is proven true by another auditor submitting an actual exploit with PoC, only that other auditor will receive a reward - the vague generality submission will be marked as invalid. 

## Human Error

Findings that involve human error where users call functions with incorrect inputs will in most cases be judged as invalid submissions. Examples include:
- "user sends tokens to the contract address by mistake, their tokens are stuck, implement a rescue function"
- "owner calls function with incorrect parameter, something bad happens"

Similarly off-chain human issues will in most cases also be judged as invalid submissions, for example:
- "user dies and their private keys are lost, funds are stuck forever"
- "owner in a coma, owner-specific functions can't be called, need a backup owner"

## Format

The format of a finding will look as such:

```
## Summary

## Vulnerability Details

## Impact

## Tools Used 

## Recommend Mitigation
```

With your findings in [markdown](https://www.markdownguide.org/). However, please refer to the website when submitting for the latest format. 

## Disqualification

### Issue validity

If more than 85% of your findings are not valid findings, you will be disqualified from the competition and recieving payout. This is meant to give you enough leeway to submit some invalid submissions, but not spam the system. 

For example:
- 1 valid, 6 invalids = 14.3% valid -> disqualified
- 2 valid, 6 invalids = 25% valid -> qualified

### Timely

You must submit within the competition window. Any submissions outside the window will not count. 

### ChatGPT & AI generated findings

ChatGPT & AI are great tools to help you find bugs, but automatically making submissions based solely or mainly on an AIs response has proven to create mostly poor reports. If you are suspected of doing so you will be disqualified. 

# Payouts

## High / Medium Findings
For competitive audits, right now the payouts are calculated as such.

```
Med Risk Shares: 1 * (0.9 ^ (findingCount - 1)) / findingCount
High Risk Shares: 5 * (0.9 ^ (findingCount - 1)) / findingCount
```

A `share` represents your cut of the prize pool. If you get 5 shares, and there are a total of 10 shares in a $10,000 pool, you get $5,000.

Your final payout will be rounded down to 2 decimal places. So if your payout is $0.003, you will get $0.00.

*This is likely to change in the future.*

## Example

In this example, we look at how a competition payout would be calculated.

- H/M Prize Pot: $30,000
- Final report: 3 Highs, 2 Mediums
- Auditor A: High A, B, Medium A
- Auditor B: High A, C, Medium A, B
- Auditor C: High A, Medium A, B, C

Shares per finding:
- Medium A (3 findings): 1 * (0.9 ^ (3 - 1)) / 3 = 0.27
- Medium B (2 findings): 1 * (0.9 ^ (2 - 1)) / 2 = 0.45
- Medium C (1 findings): 1 * (0.9 ^ (1 - 1)) / 1 = 1
- High A   (3 findings): 5 * (0.9 ^ (3 - 1)) / 3 = 1.35
- High B   (1 findings): 5 * (0.9 ^ (1 - 1)) / 1 = 5
- High C   (1 findings): 5 * (0.9 ^ (1 - 1)) / 1 = 5

Auditor A: 1.35 + 5 + 0.27 = 6.62 shares
Auditor B: 1.35 + 5 + 0.27 + 0.45 = 7.07 shares
Auditor C: 1.35 + 0.27 + 0.45 + 1 = 3.07 shares

Auditor A = 6.62 / 16.76 = 39.5% of the prize pot = $11,850
Auditor B = 7.07 / 16.76 = 42.2% of the prize pot = $12,660
Auditor C = 3.07 / 16.76 = 18.3% of the prize pot = $5,490

## Low findings

As of today, this tier competes for a much smaller set of the prize pool. At the moment, the awards are calucated as such:

```
Low Risk Shares: 1 * (0.9 ^ (findingCount - 1)) / findingCount
```

Obviously, their is a much smaller prize pool for this tier, and it can be a lot of work to run through all the findings in such a tier. Submissions that show low effort will be disqualified, as discretion by the judges.  

## QA / Gas / Informational

As of August 18th, 2023, CodeHawks no longer accepts gas/qa/informational findings. We are workshoping a new model for gas competitions. Stay tuned! 

## Selected Finding

When there are duplicate findings, for the final report, the judges will choose the "best" report (subjective) based on how well it articulates the issue, mitigation, and impact. 

The selected written report will be awarded 1.4x their number of shares on that finding. 

# Payouts

We use [wentokens](https://www.wentokens.xyz/) to pay out rewards. It is a gas efficient airdrop platform. 

# Who judges?

As of V0.1, the [Cyfrin](https://www.cyfrin.io/) team and an invited judge, judges the audits. We are working on a community based judging model to prevent bias moving forward. 

# Preliminary Results 

After the competition, the judges will release preliminary results. This is to give the auditors a chance to appeal the judges decisions.

# Appeals 

For every competition, we will have a 2 day appeals process, where you can appeal the judges decisions. 

For appeals, you will have 1 shot to post a message about why your finding's severity, grouping, or selected tag should be changed.

# Severity Examples

## High

Classic reentrancy, the protocol is supposed to keep funds safe, but they are at risk of being stolen here due to a reentrancy attack. 

```javascript
contract EtherStore {
    mapping(address => uint) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        uint bal = balances[msg.sender];
        require(bal > 0);

        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent, "Failed to send Ether");

        balances[msg.sender] = 0;
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
```

## Medium

Chainlink price feeds can go stale, so there should be check to make sure they are not stale.

If the Chainlink feed goes stale, and the protocl is relying on it, then the protocol could be at risk. This means the funds are indirectly at risk. The attack path is very difficult. 

```javascript
function getPriceOfRewardToken() external view returns (uint256) {
    (,int256 price,,,) = priceFeed.latestRoundData();//@audit chainlink price feed - stale price check is missing
    return (uint256(price) * Constants.PINT) / PRICE_FEED_PRECISION;
}
```

## Low

The helper `getState` function should return the `state` and not `STARTING_STATE`. The rest of the protocol does not use this function, so the severity of this is low. 

```javascript
uint256 public state;
uint256 public constant STARTING_STATE = 1;


// Helper function
// Returns the state of the contract
function getState() external view returns (uint256) {
    return STARTING_STATE;
}
```

## Informational

The comment is wrong, the function returns the native token balance of the contract. 

```javascript
// This gets the erc20 balance of the contract
function getBalance() public view returns (uint) {
    return address(this).balance;
}
```

## Gas 

The `permanentValue` is only set once, and therefore should be `immutable` instead of a storage variable.

```javascript
uint256 public permanentValue;

constructor() {
    permanentValue = 0;
}
```
