# Get Started with Custom Web Gazer

### NOTE

Still very early in development

# Description

This project tracks where users are looking on the screen and transform those raw coordinates into useful data for research and development

# This Project Uses the Following Technologies

- **Webgazer.js** (https://github.com/brownhci/WebGazer) to detect where users are lookin on the screen and provides coordinates in pixels and the time it happened<br>
- **Flask** as a lightweight backend to receive POST request from the frontend every _10 seconds_. Process the data and return useful information including fixation points and their corresponding times of occurences, distances, midpoints, and velocities

# To Get Started

## 1. Start the React App

`yarn start` or `npm start`

## 2. Create Python Virtual Environment

`python -m venv ~/.virtualenvs/web-gazer`

NOTE: In the above command I specified to store environment information in _~/.virtualenvs_

## 3. Start the Flask Server Endpoints

- `cd server`
- `export FLASK_APP=server`
- `flask run`

## 4. Done

The frontend and the backend should now be running. The frontend will utilize **Webgazer.js** to gather coordinates and send them back every 10 seconds

# Basic Create React App commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
