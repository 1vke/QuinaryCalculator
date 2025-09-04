# Quinary Calculator - Project for CS495

Team Members:
Lucas Lowe, Owen Johnson, Alec Burch-DeWitt, Kareline Jones, Benjamin Britton

<img width="532" height="615" alt="image" src="https://github.com/user-attachments/assets/2b84e235-5508-402f-911f-70415f7f5ab9" />

## Manual
- The calculator starts in base 5 by default, as can be seen by the button labeled QUI
	- When toggled, this button changes to DEC to denote the switch to base 10
- To clear the display at any time, press the C button.
- Math with two operands (addition, subtraction, multiplication, and division):
	- Enter the first operand, then the operation, then the second operand
	- Press the = button to see result
- Math with a single operand (square and square root):
	- Enter the operand, and then press the operation to perform
## Project Details
### Task Distribution
- Lucas Lowe - initial project setup
- Lucas Lowe - add display
- Lucas Lowe - add minimally required UI buttons 
- Lucas Lowe - connecting view and model
- Owen Johnson - UI overhaul, calculator look
- Owen Johnson - Base toggle button improvement
- Alec Burch-DeWitt - square and square root operations
- Alec Burch-DeWitt - converting between quinary and decimal (and vice versa)
- Alec Burch-DeWitt - README
- Kareline Jones - handle integer only values (not implemented)
- Kareline Jones - show negative integers (not implemented)
- Benjamin Britton - show negative integers (not implemented)


### Meetings
Meeting Notes Taken by Lucas Lowe

29.Aug.25 - 6pm
- Attendees: Lucas, Owen, Benjamin, Kareline
- Ended up choosing a "website" as our project
    - Website is in quotes because it is just a simple .HTML file that runs a couple functions from a script
    - Easy to make a simple UI without a lot of effort
    - Easy for everyone to run, aka we don't have to setup a whole bunch of IDE, python ver, Java JDK ver, etc.)
- Got the initial project setup
    - Basically like the devops assignment we did, except it has HTML and CSS goodies
    - Our code should be in index.js, so that we can import it into the UI and it is testable
    - Still need to add main branch protection. Right now, it isn't that big of a deal as we are still getting things setup. Will setup this up on monday.
- Tasks
    - Once we get a good base for the project, we should start making tasks
    - Right now, we can start making the "backend" of things, or rather, the code that does the Quinary stuffs
    - While that is going on, we will be making the UI, then eventually hooking the UI up to the code.
