# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Filter job listings based on the categories

### Links

-  Solution URL: [Add solution URL here](https://github.com/PiojoPringlense/job-listing)
-  Live Site URL: [Add live site URL here](https://piojopringlense.github.io/job-listing)

## My process

### Built with

-  CSS custom properties
-  Flexbox
-  Mobile-first workflow
-  [React](https://reactjs.org/) - JS library

### What I learned

I used React to build this page. I'm specially proud of the filter method used on the App.js file:

```{jobs.map((job) => {
					if (filterTags.length < 0)
						return <Card key={job.id} job={job} addFilterTag={addFilterTag} />;
					if (
						filterTags.every((tag) =>
							[job.role, job.level, ...job.languages, ...job.tools].includes(tag)
						)
					)
						return <Card key={job.id} job={job} addFilterTag={addFilterTag} />;
				})}
```

## Author

-  Frontend Mentor - [@PiojoPringlense](https://www.frontendmentor.io/profile/PiojoPringlense)
