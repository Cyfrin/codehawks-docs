# What is a finding? 

A finding represents a vulnerability in the codebase, they are separeted into 3 categories that is calculated through their "impact", and "likelihood" parameters. There are also two different finding categories that are not associated with any calculations. Main classification done as follows:
## Risk Classification
- Impact
  - High - This level implies a substantial risk, where there's a possibility of losing more than 10% of the assets in the system, or causing a major negative impact on most users. This is a critical level that could lead to serious consequences if not addressed properly.
  - Medium - This level suggests a less severe risk, where global losses are less than 10%, or the losses only affect a portion of users. Even though these losses are not as severe as those categorized as 'High', they are still not tolerable and need to be addressed.
  - Low - This is the least severe level, typically associated with manageable losses. It includes issues such as minor attacks that can be easily fixed, or inefficiencies. Even though these issues are of lower severity, they can still negatively affect user experience and should not be ignored.
- Likelihood
  - High - This level implies that the occurrence of the hack is almost guaranteed. It could be due to the ease of the hack happening, or even if it's not easy, there are strong incentives driving it.
  - Medium - This level signifies that the hack can happen under specific conditions (attack path is harder to find) or incentives and is fairly likely to occur.
  - Low - This level indicates that the hack happening would require a perfect set of circumstances (attack path is complicated) or there's little to no incentive for it to occur (attacker won't gain value or lose value). This means it's not very likely to happen.

### Final Severity

| Severity Level      | Impact: High | Impact: Medium | Impact: Low |
| :-------------------| :------:     | :-:            |:----:       |
| Likelihood: High    |     High     |      High      |    Medium   |
|  Likelihood: Medium |     High     |     Medium     |     Low     |
|  Likelihood: Low    |     Medium   |      Low       |     Low     |

### Additional Categories
  - Gas: Gas optimizations
  - Informational: Code style, maturity, smells, comment correctness, etc

There is some subjectivity when it comes to these categories, and it's up to the judges discretion to determine the category.

If the protocol specifically states some different criteria, then that is what should be followed. 

At the start of each competition, the [4naly3er](https://github.com/Picodes/4naly3er) tool will be run, and all findings associated with this tool are inelligible for rewards.

As CodeHawks evolves, this basis for findings will likely change.


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

As of August 18th, 2023, CodeHawks no longer accepts gas/qa/informational findings.

## Selected Finding

When there are duplicate findings, for the final report, the judges will choose the "best" report (subjective) based on how well it articulates the issue, mitigation, and impact. 

The selected written report will be awarded 1.4x their number of shares on that finding. 

# Who judges?

As of V0.1, the [Cyfrin](https://www.cyfrin.io/) team exclusively judges the audits. We are working on a decentralized judging model to prevent bias. The Cyfrin team is not allowed to participate in audit competitions due to this. 

At the moment, there is no escalation period. We will be iterating on this process as the protocol grows. 


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
