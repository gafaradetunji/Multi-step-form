# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- React
- Typescript
- Tailwind
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

#### React

- I learnt how to make Tabs in react and navigate through each components without any conflict

#### TypeScript

- I improved in my typesetting and learnt a few more ways to make my code better

#### Tailwind

- Styling a webpage without writing Pure CSS at all has never been more fun

#### Coding Patterns

- I also learnt how to separate component Logic From the UI logic
- I also learnt how to build Reusable components and using them in different parts of the project
  Example of the Reusable component i made is for Button and Input

```Button component
const CustomButton: React.FC<CustomButtonProps> = ({ children, className, type, onClick }) => {
    return (
        <button className={`px-3 py-2 ${className}`} type={type} onClick={onClick}>{children}</button>
    );
}
```

```Input Component
const TextInput: React.FC<TextInputProps> = ({ label, error, field, form, ...inputProps }) => {
  const { name } = field;
  const { touched, errors } = form;


  return (
    <div>
      <label className='block text-marine-blue text-[14px] mb-2'>{label}</label>
      <input {...inputProps}
        {...field}
        className='border-[1px] border-marine-blue h-[40px] w-full outline-none rounded-md mb-3 pl-4 placeholder:text-[14px]'/>
      {touched[name] && errors[name] && <p className="text-red-500">{String(errors[name])}</p>}
    </div>
  );
};
```

### Useful resources

- [Tabs in React](https://youtu.be/WkREeDy2WQ4) - This helped me Understand How Tabs in React Works.

## Author

- Website - [Gafar Adetunji](https://www.mjobi.com)
- Frontend Mentor - [@gafaradetunji](https://www.frontendmentor.io/profile/gafaradetunji)
- Twitter - [@gafar_adetunji](https://www.twitter.com/gafar_adetunji)

## Acknowledgments

A special Gratitude is due to [Imran Abdul Malik](https://www.linkedin.com/in/isoteriksoftware/) for better insights in Understanding some concepts

I will also like to thank [Marvellous Adesanya](https://github.com/marvellousadesanya)
