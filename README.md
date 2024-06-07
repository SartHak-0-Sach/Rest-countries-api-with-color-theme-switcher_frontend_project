# Rest Countries API with Color Theme Switcher

## Welcome! 👋

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Got Feedback for Me?](#got-feedback-for-me)

## Overview

### The Challenge

Explore countries around the world with detailed information and a smooth, responsive design. Toggle between light and dark modes for a personalized experience.

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode (optional)

### Screenshot

![Design Preview](./design/desktop-design-home-dark.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/SartHak-0-Sach/Rest-countries-api-with-color-theme-switcher_frontend_project)
- Live Site URL: [Live Site](https://rest-country-api-frontend.netlify.app/)

## My Process

### Built With

- HTML5
- CSS3
- JavaScript
- [Rest Countries API](https://restcountries.com/)
- [React](https://reactjs.org/)

You will find all the required assets in the `/design` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### What I Learned

- Fetching and displaying data from an API
- Implementing a responsive design with CSS Grid and Flexbox
- Creating a theme switcher to toggle between light and dark modes
- Enhancing user experience with search and filter functionality

Following code snippet helped me understand the significance of :focus in CSS, here is the link to it in case you want to learn it along with the code snippet showcasing its application-

[Documentation link to focus property of CSS](https://www.w3schools.com/cssref/sel_focus.php)

```css
.input-form select {
    margin-right: 3em;
    margin-top: 3em;
    padding: 1em;
    border: 0px;
    box-shadow: 10px 10px 10px -5px var(--shadowColor);
    color: var(--textColor);
    background-color: var(--headerColor);
    font-family: 'Nunito Sans', sans-serif;
}

.input-form select:focus,
.input-form input:focus {
    outline: none;
}
```

### Continued development

The continuously learning journey of a programmer never ends. This project made me realize that there are many concepts that I need to work upon including fundamentals like flex-box and its properties, to more complex concepts like working with fetch and async await in javascript. These areas are some that I think I need to work more upon in the upcoming future as they highlight some of the most significant regions of web development that are important for every developer to know of. 

These key points mentioned here will help me grow accountable and consistent towards improving at writing good quality code and be a successful full stack developer one day.

Following are some of the points I think I can improve on-

- Adding more filters for searching countries
- Improving performance and optimization for faster load times
- Implementing additional features like saving favorite countries

### Useful resources

- [Harkirat Singh course notes](https://github.com/SartHak-0-Sach/harkirat-singh-course_code_and_notes) - I have added notes of all lectures along with code and lecture insights of all weeks along with bonus lectures to help you all as much as I can.
- [My development code and notes](https://github.com/SartHak-0-Sach/cwh-web-dev-playlist_code_and_notes) - These are my notes that I made while working on my development skills in initial days and did these courses. Make sure to star the repository if you like it.✨💫
- [MDN documentation hover state for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - This is an amazing article which helped me finally understand hover states. I'd recommend it to anyone still learning this concept.
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive documentation for web development technologies
- [CSS-Tricks](https://css-tricks.com/) - Helpful tips and tricks for CSS and web design
- [React Documentation](https://reactjs.org/docs/getting-started.html) - In-depth tutorials and resources for learning React

## Author

<b><strong>Sarthak Sachdev</strong></b>
- Website - [Sarthak Sachdev](https://itsmesarthak.netlify.app/)
- LeetCode - [@sarthak_sachdev](https://leetcode.com/u/sarthak_sachdev/)
- Twitter - [@sarthak_sach69](https://www.twitter.com/sarthak_sach69)

## Acknowledgments

I feel like the solutions provided on the website and the continuous doubt solving by industry experts on discord for free is something that is unmatched by anyone else and need to be acknowledged for their efforts in improving me as a developer by suggesting the best practices in your respective tech stack.

## Got feedback for me?

I love receiving feedback! I am always looking to improve my code and take up new innovative ideas to work upon. So if you have anything you'd like to mention, please email 'hi' at saarsaach30[at]gmail[dot]com.

If you liked this project make sure to spread the word and share it with all your friends.

**Happy coding!** ☺️🚀
