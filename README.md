
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

|<img width="250" alt="Spacestagram Photo-card" src="https://user-images.githubusercontent.com/69861203/149709252-cacb27dd-7bcb-442c-9240-4509922cfb02.png"> | 
|:--:| 
| *An Example Photocard* |

## Tech Used

- JavaScript
- HTML
- CSS
- [NASA APOD API](https://api.nasa.gov/)
- Project Structure Organized with [GitHub Project Board](https://github.com/rjur11/Spacestagram/projects/2)

## Installation and Set-Up

To install this project, please see below:

```bash
1. Clone down this Repository using `git clone`
2. Next, `cd` into the cloned repository and type `npm install` to install library dependancies
3. Finally, run `npm start` and open up http://localhost:8081/ in your browser to view the webpage
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

The user will be greeted with an initial group of three randomly populated photocards that can be navigated by scroll wheel on a mouse, or by tabbing through each card. Once the user reaches the end of the first three cards, an animated loader will appear, prompting the user to wait a second or two while more photocards populate.

![Scroll or Tab Through the Site](https://media.giphy.com/media/01wMfH0jVHnMhvgXWy/giphy.gif)

Uh oh! Sometimes images from the API will be broken. Alt text is provided to describe what the missing image conveys.

<img width="300" alt="Spacestagramalt-text" src="https://user-images.githubusercontent.com/69861203/149710540-9a517c11-a33c-43f5-ba02-fccbcad09128.png">

If a user finds a photocard that they really love, they can click the "Like" button associated with the photocard. However, if they change their mind, they can always go back and "unlike" any cards that were previously liked.

![Like Button Functionality](https://media.giphy.com/media/7Cb5JO03rOpZhysmtx/giphy.gif)

## Future Goals

- Ensure that infinite scrolling doesn't populate more cards than expected (three at a time). Sometimes if the mouse is bumped while the loader is active, it will load more than three cards.
- Create an "on page load" screen that lets a user know when API rendering is taking a little longer than expected

## Created By:

- [Rana Jurjus](https://github.com/rjur11)





