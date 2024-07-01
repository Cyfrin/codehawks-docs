# How to Write a PoC

A Proof of Concept (PoC) demonstrates a concept's feasibility. In the context of smart contract auditing, a PoC demonstrates a vulnerability or flaw in a smart contract. A well-crafted PoC can help developers understand the vulnerability and its implications, making it easier to address the issue.

By following this guide and template, auditors can ensure that their PoCs are clear, concise, and effective in communicating vulnerabilities to judges.

### **Key elements of a good PoC**

<details>

<summary>1. Working test case</summary>

This is the most direct way to demonstrate a vulnerability. It should be executable and should clearly show the flaw in action.

</details>

<details>

<summary>2. Line-by-line comments</summary>

Each line of the test case should be accompanied by comments explaining what that specific line is meant to do. This helps understanding the flow and logic of the PoC.

</details>

<details>

<summary>3. Clear separation of actors</summary>

Clearly define and separate the roles involved in the PoC. Common roles include:

* Attacker: The entity exploiting the vulnerability.
* Victim: The entity affected by the exploit.
* Protocol: The system or platform in which the smart contract operates.

</details>

<details>

<summary>4. Detailed exploit scenario</summary>

If writing a PoC in the form of a test case is challenging or too straightforward, then a detailed step-by-step exploit scenario can be provided. This should explain:

* **Initial State**: Describe the initial state of the system.
* **Step 1**: Describe the first action taken by the attacker.
* **Step 2**: Describe the subsequent action and so on.
* **Outcome**: Describe the result of the exploit.
* **Implications**: Discuss potential consequences or implications of the exploit.

</details>

#### Recommendations:

1. Provide suggestions or fixes to address the vulnerability.
2. Link to the vulnerable smart contract, code, or any other relevant links or resources.

### **Proof of concept (PoC) template**

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

