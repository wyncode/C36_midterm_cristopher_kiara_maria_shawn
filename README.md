<h1 align="center">A simplified taco search form built with React, React Router and Material UI</h1>

<div align="center">Auto formatted with Prettier</div>

<h3 align="center">
  <a href="https://api.edamam.com/search?q=${req.params.query}s&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&health=${healthLabel">View API</a>
</h3>

## What is this and who is it for 🤷‍♀️
Anyone who's interested in Taco Recipes.


## Status
Full functionality built in. Basic CSS/Styles have been incorporated - next phase would be to add additional layers of CSS and styling to enhance UX.


## Features

- Proven, scalable, and easy to understand project structure
- Written in React, only functional components with hooks
- Simple local Express Server
- Client written in Babel powered JavaScript
- API data pulled using Axios
- Data rendered from API displays list of Taco Recipes for the given category input by user.
      Simple search form on home page allows user to input taco category query.
      Taco recipes displayed on homepage via cards and grid layout.
      Upon selection of specific recipe user is taken to new page with full recipe displayed.
      Recipe page displays image, description, ingredient list, and cooking instructions.
      About page includes developer's profile picture and Github link.
      Home page icon built into sticky nav bar allows user to return to home page view for additional searches.     


## Setting up development environment 🛠

- git clone this repo
- cd into it
- run "yarn" in terminal. This will install the packages required for the App and initialize local server.
- cd into client folder and run "yarn" command in terminal. This will install the packages required for the App.
- Create .env file and follow the .env.sample at the roots.

//To run your Express.JS and React developer environment locally
Make sure you are in your project's dicrectory, and then run the following command in terminal:
- "yarn dev"
//Open http://localhost:8080 to view in the browser.


### Proper authentication system 🔐

The API Website:
https://api.edamam.com/search?q=${req.params.query}s&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&health=${healthLabel

- Sign up with your email.
- Get your API Key.
- Place API Key in the .env file.


## Authors:

- Christopher Guerro
- Maria Beckles
- Shawn Marcotte