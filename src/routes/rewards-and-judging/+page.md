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
- Medium
  - It might happen (ex: A specific weird ERC20 is used on a platform)
- Low
  - Unlikely to happen. (ex: If a difficult to change variable is set to a certain value on a very specific singular block)

Keep in mind, there are some events where the likelihood is considered "computational infeasible" and do not count as low. An example would be:

"An attack could guess the users private key".

In such cases, it's on the finding audthor to prove that their finding is computational feasible. 

## Subjectivity 

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

For every competition, we will have a 2 day appeals/escalation process, where you can appeal the judges decisions. 

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
