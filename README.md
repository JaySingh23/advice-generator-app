# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![./design/desktop-design.jpg](./design/desktop-design.jpg)

### Links

- Solution URL: [https://github.com/JaySingh23/advice-generator-app]
- Live Site URL: [https://frolicking-bubblegum-daa08f.netlify.app]

## My process

First, I decided to create a container and within that put the hero section which is the content. Then I styled both of these sections using styled-components. And for the css part, I mostly created functions which I don't know is a good practice or not. But I used it because it was convenient. And for the random advices, I used an api to fetch the data and using {data.id} and {data.text} I was able to show randomly generated quotes. And that's it. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

This was the first project I created using React.js. It was fun doing this project. I got to work with useState and useEffect hooks in this project which was fascinating. I also used this project to understand about styled components. As a beginner, it was confusing at start but it was worth it. I am proud of this code snippet :

To see how you can add code snippets, see below:

```js
const [text, setText] = useState([]);

    const fetchAdvice = async() => {
        const res = await fetch ("https://api.adviceslip.com/advice")
        const data = await res.json()

        console.log(data)

        setText(data.slip)
    }

    useEffect(() => {
        fetchAdvice()
    }, [])
```

## Author

- Frontend Mentor - [@JaySingh23](https://www.frontendmentor.io/profile/JaySingh23)
- Twitter - [@jimpusingh](https://www.twitter.com/jimpusingh)
