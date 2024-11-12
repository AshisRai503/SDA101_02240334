a) Documentation
Main Concepts Applied

In this project, I focused on client-side form validation and styling using CSS to create a user-friendly registration form.

    Form Validation: I implemented real-time validation for fields such as:
        Username: Checking for a minimum length of 3 characters.
        Email: Ensuring the email is in a valid format using regular expressions.
        Password: Enforcing a password policy that requires at least one uppercase letter, one lowercase letter, one digit, and one special character.
        Confirm Password: Verifying that the password and confirmation fields match.

    CSS Styling: I used CSS to make the form visually appealing by:
        Creating a responsive layout using flexbox.
        Styling form elements such as input fields and buttons to be interactive.
        Adding focus and hover effects to improve the user experience.
        Implementing error messages with appropriate styles (red for errors, green for valid input).

New Skills and Knowledge Acquired

    Real-time Form Validation: I learned how to validate form fields as users type, providing immediate feedback.
    CSS Focus and Hover Effects: I explored how to use CSS to make elements respond interactively, improving the usability of the form.
    Mobile-First Design: I gained experience in making the form responsive, ensuring it looks good on both mobile and desktop devices by using media queries and flexible layouts.

b) Reflection
What I Learned

Through this project, I deepened my understanding of both form validation and styling. I realized how important real-time feedback is for user experience, as it helps users correct errors immediately rather than waiting until form submission. I also learned how simple CSS changes can drastically improve the look and feel of a form, making it more intuitive and professional.
Challenges and Solutions

    Form Validation Logic:
        Challenge: Ensuring all validation checks, especially for passwords and confirmation, worked correctly.
        Solution: I used event listeners on each input field to trigger validation as the user types, and I ensured each validation rule was properly tested and displayed errors dynamically.

    Responsive Layout:
        Challenge: Making sure the form looked good on both mobile and desktop devices.
        Solution: I used media queries to adjust padding, font sizes, and button sizes for smaller screens, ensuring the form remained accessible and easy to use on mobile devices.

    Button Disable/Enable Logic:
        Challenge: The submit button should only be enabled when all validations pass, but the logic for enabling/disabling it dynamically seemed tricky at first.
        Solution: I wrote a validateForm() function that checked all inputs and updated the button’s state, ensuring it was only enabled when everything was correct