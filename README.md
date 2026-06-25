# calculator-application
 
## Calculator
 
Browser-based calculator built as a practice project using vanilla HTML, CSS, and JavaScript.
 
## Features
 
- Basic mathematical operations.
- Decimal support.
- Clear button.
## Skills Used
 
- HTML5.
- CSS3 (grid layout).
- JavaScript.
## What I Would Change
 
This was my first project without any guidance or tutorial, made using the skills I have gained through the first 3 courses of my Coursera certification. Because I had no guidance, I was forced to solve problems as they appeared, and so the code ended up with some redundancies and inefficient ways to solve problems. Here is how I would avoid these if I redid the project.
 
- **State management:** As I added features, I tracked state using a variety of variables. In future projects, I would track state using one variable where possible. As it pertains to this specific project, I could have used one single "counter" variable.
- **Repeated if-statements:** While it does function, the use of multiple nested if statements is a clear marker of inefficiency. In the future, I will condense this into one condition.
- **No keyboard input:** While I may add this feature in the future, the calculator currently only receives input when the user clicks a button.
## What I Learned
 
- First introduction to the end-to-end process of building something, particularly debugging and searching for the break in my code.
- CSS grid, since this was my first time using it. It proved to be the most effective way to organize the buttons and display.
- Planning the architecture before diving in is necessary. If I had spent even 5 minutes planning out all the features I needed to create, the state could have easily been consolidated. In the future, this knowledge will help me avoid retroactively adding features and making the code more redundant.
## Running it Locally
 
No build step or dependencies required.
 
1. Clone the repo.
2. Open `index.html` in any browser.
