a) Documentation

Main Concepts Applied:

    Web Components: I created a custom element using the Web Components API, which allows the development of reusable and encapsulated UI components. This component was designed to display a card with customizable content.
    Shadow DOM: The component uses the Shadow DOM to encapsulate styles and ensure that the card's styling does not affect the rest of the page and vice versa. This was crucial for maintaining clean, modular code.
    Slots: I applied the use of slots in the Web Component to allow different content to be dynamically inserted into the card. There are three slots: header, content, and footer, each designed to accept different types of content like text, images, and other HTML elements.
    CSS Custom Properties (Variables): I used CSS custom properties (e.g., --bg-color, --border-color) to allow for easy customization of the component's styling via external CSS.
    Tailwind CSS: To ensure the card was visually appealing and responsive, I leveraged Tailwind CSS utility classes for layout and design, making it easy to apply consistent styling and quickly modify the card's appearance.

New Skills or Knowledge Acquired:

    I gained hands-on experience with the Web Components API, especially the use of custom elements and shadow DOM for style encapsulation.
    I also learned how to use slots effectively to allow different types of content to be inserted into a Web Component, improving its reusability.
    Tailwind CSS was helpful in building a clean and flexible design without needing to write custom CSS for common styles like spacing, alignment, and typography.

b) Reflection

What I Learned:

    The process of building a reusable Web Component was both informative and practical. I learned how Web Components help in creating modular, self-contained components that can be reused across different projects or pages.
    The shadow DOM feature provided isolation, which allowed the styles inside the component to remain independent from the global styles, ensuring no conflicts.
    The use of slots provided flexibility in terms of dynamically adding content, which made the component more adaptable.
    The power of Tailwind CSS in quickly creating responsive, aesthetically pleasing designs helped me improve the overall look of the card without needing to write complex CSS rules.

Challenges Faced:

    Challenge 1: Understanding the concept of the shadow DOM was initially challenging. At first, I didn’t fully grasp how styles inside the shadow DOM would not affect the rest of the page and vice versa. Once I experimented and tested, it became clearer that the shadow DOM allows for encapsulation, which prevents styles from leaking out or being overridden.
        Solution: I referred to the official documentation on shadow DOM and tested the code in smaller steps to verify that the component’s styles were isolated.
    Challenge 2: Ensuring that the custom card was easily customizable through attributes and CSS variables was tricky. There were moments when changes to the custom properties didn't reflect correctly on the component.
        Solution: I had to ensure that the style element was correctly added to the shadow DOM, and that CSS custom properties were correctly assigned. Testing with simple changes to the attributes helped me troubleshoot and get the desired results.