# How to Write a PoC

A Proof of Concept (PoC) is a demonstration that showcases the feasibility of a concept or idea. In the context of smart contract auditing, a PoC is used to demonstrate a vulnerability or flaw in a smart contract. A well-crafted PoC can help developers understand the vulnerability and its implications, making it easier for them to address the issue.

**Key Elements of a Good PoC:**

1. **Working Test Case**: This is the most direct way to demonstrate a vulnerability. It should be executable and should clearly show the flaw in action.
2. **Line-by-Line Comments**: Each line of the test case should be accompanied by comments explaining what that specific line is meant to do. This helps in understanding the flow and logic of the PoC.
3. **Clear Separation of Actors**: Clearly define and separate the roles involved in the PoC. Common roles include:
   * Attacker: The entity exploiting the vulnerability.
   * Victim: The entity affected by the exploit.
   * Protocol: The system or platform in which the smart contract operates.
4. **Detailed Exploit Scenario**: If it's challenging or too straightforward to write a PoC in the form of a test case, then a detailed step-by-step exploit scenario can be provided. This should explain:
   * The initial state of the system.
   * The steps taken by the attacker.
   * The outcome or result of the exploit.
   * Potential implications of the exploit.

**Template for a PoC:**

````markdown
markdownCopy code## Proof of Concept for [Vulnerability Name]

### Overview:
Briefly describe the vulnerability.

### Actors:
- **Attacker**: Description of the attacker's role.
- **Victim**: Description of the victim's role.
- **Protocol**: Description of the protocol's role.

### Working Test Case (if applicable):
```solidity
// Solidity code or test case demonstrating the vulnerability
// Line 1: Explanation of line 1
// Line 2: Explanation of line 2
// ...
````

#### Exploit Scenario (if a test case isn't provided):

1. **Initial State**: Describe the initial state of the system.
2. **Step 1**: Describe the first action taken by the attacker.
3. **Step 2**: Describe the subsequent action, and so on.
4. **Outcome**: Describe the result of the exploit.
5. **Implications**: Discuss potential consequences or implications of the exploit.

#### Recommendations:

Provide suggestions or fixes to address the vulnerability.

#### References:

* Link to the vulnerable smart contract or code.
* Any other relevant links or resources.

By following this guide and template, auditors can ensure that their PoCs are clear, concise, and effective in communicating vulnerabilities to judges.
