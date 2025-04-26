Overview

This project is a React-based UI that creates an engaging welcome experience with interactive and animated visuals. The main interface is built using modular components and styled using custom CSS for a modern, animated look.

Components Overview

Underline: Renders a subtle horizontal line to enhance visual hierarchy.
Hero: Displays a central circular "WELCOME!!" badge with bold text.
Shadow: Sits behind the hero badge with a blurred animation (spin) for a glowing, dynamic effect.
HeroWrapper: Combines the Hero and Shadow components in a bordered circular container with a radial gradient background.
BtnContainer: Holds two interactive buttons (Browse Test Data and Connect Domain) with hover animations, and displays a disclaimer for free-tier users.
OuterBox: The main layout container styled with shadows, padding, and responsive alignment. It wraps the entire content and gives the app a centered, clean layout.

Styling Highlights

Animation: A custom @keyframes spin animation gives the shadow around the welcome badge a floating, orbit-like motion.
Responsive Flexbox Layouts: Most containers use flex for clean and adaptive alignment.
Hover Effects: Buttons scale up smoothly on hover, enhancing interactivity.
Visual Hierarchy: Typography and spacing are used to guide the user's attention — starting with a bold heading, then to the welcome badge, and finally to the action buttons


Dependencies & Setup
To run this project locally, make sure you have the following set up:-

Prerequisites
Node.js (v14 or higher recommended)
npm 

Installation Steps
Clone the repository:
     git clone <your-repo-url>
     cd <your-project-folder>
Install dependencies:
     npm install
Start the development server:
     npm run dev

This app assumes you're using a tool like Vite, Create React App, or another React-compatible bundler. Be sure your project is configured accordingly.

Implementation Summary

This project was implemented using React functional components and plain CSS to create a clean and interactive welcome screen. Each part of the UI was broken down into modular components (Hero, Shadow, BtnContainer, etc.) to keep the structure maintainable and readable.
The layout relies heavily on flexbox, absolute positioning, and CSS animations to achieve a visually appealing effect. Special attention was given to the HeroWrapper, which combines both motion and hierarchy to grab user attention.

Challenges Faced

Positioning & Layering: Coordinating the absolute positioning of the Hero and Shadow inside a centered wrapper required careful use of z-index, position: relative, and sizing to maintain visual balance.
Blurred Animation: The shadow element’s blur combined with motion had to be tuned to avoid looking too sharp or too fuzzy — achieving a soft, glowing effect while keeping it performant.
Responsive Design Considerations: Getting the layout to look balanced on various screen sizes was tricky without using a responsive framework. Manual tweaking of margins, padding, and container widths was needed.
CSS Specificity & Mistakes: Small CSS issues like a missing px in font-size: 20p or a malformed border property (border: 2px solid ,rgba(...)) caused rendering bugs that were caught and fixed during testing.
