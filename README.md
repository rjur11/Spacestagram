
# Spacestagram

*Shopify Front End Developer Intern Challenge - Summer 2022*

- Click [HERE](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#) to view the project spec
- Click [HERE](https://rjur11.github.io/Spacestagram/) to view the deployed site

## Table of Contents
- [Abstract](#abstract)
- [Tech Used](#tech-used)
- [Installation and Set-Up](#installation-and-set-up)
- [Features](#features)
- [See the Site in Action](#see-the-site-in-action)
- [Future Goals](#future-goals)
- [Created By](#created-by)

## Abstract

This website takes data from the NASA Astronomy Photo of the Day API, and formats it into fun and informative photocards. Each photocard includes an image or video clip, title, date of posting, a description, and a "Like" button. 

| <img width="250" alt="Screen Shot 2022-01-19 at 4 52 42 PM" src="https://user-images.githubusercontent.com/69861203/150219929-5ad7b1e6-3863-4b41-aceb-fb4e89493ec4.png">| 
|:--:| 
| *An Example Photocard* |

## Tech Used

- JavaScript
- HTML
- CSS
- Mocha Testing Framework, Chai Assertion Library, and JSDOM Library for Test Driven Development 
- [NASA APOD API](https://api.nasa.gov/)
- Project Structure Organized with [GitHub Project Board](https://github.com/rjur11/Spacestagram/projects/2)

## Installation and Set-Up

To install this project, please see below:

```bash
1. Clone down this Repository using `git clone`
2. Next, `cd` into the cloned repository and `npm install` to install library dependancies
3. Finally, run `npm start` and open up localhost at the port indicated to view the webpage
```
Alternatively, you can access the deployed site here: https://rjur11.github.io/Spacestagram/
    
## Features

- Each photocard is populated from NASA's APOD API and includes an image or short video clip, title and date, description, and a "Like" button
- A user can like/unlike their favorite photocards
- 100% Lighthouse Accessibility Audit Score
  - Fully tabbable
  - Semantic HTML

- __Stretch Feature__: Infinite Scrolling functionality with a space-themed animated loader


## See the Site in Action! 
<img width="300" alt="Screen Shot 2022-01-18 at 1 35 12 PM" src="https://user-images.githubusercontent.com/69861203/149998030-297f520d-a2dd-4665-a50d-59822aff5e14.png">



The user will be greeted with an initial group of three randomly populated photocards that can be navigated by scroll wheel on a mouse, or by tabbing through each card. Once the user reaches the end of the first three cards, an animated loader will appear, prompting the user to wait a second or two while more photocards populate.

![Scroll or Tab Through the Site](https://media.giphy.com/media/rYjXUG4AHAPQJptqfz/giphy.gif)

Uh oh! Sometimes images from the API will be broken. Alt text is provided to describe what the missing image conveys.

<img width="300" alt="Screen Shot 2022-01-19 at 11 26 43 AM" src="https://user-images.githubusercontent.com/69861203/150173106-c33a1385-1fc6-4d5b-bfca-e5998b6d6787.png">


If a user finds a photocard that they really love, they can click the "Like" button associated with the photocard. However, if they change their mind, they can always go back and "Unlike" any cards that were previously liked.

![Like Button Functionality](https://media.giphy.com/media/D2tS0a2VJAmVOyzzwN/giphy.gif)

## Future Goals

- Create an "on page load" screen that lets a user know when API rendering is taking a little longer than expected

## Created By:

- [Rana Jurjus](https://github.com/rjur11)





