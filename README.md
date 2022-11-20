<p align="center"><img src="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/logo.jpg" width=40% height=30%><p/>
<div align="center">
    <a href="https://server-dmw7.onrender.com/">Render Link</a>
</div>
<br/>
Demo Video Link: <a href="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/demovid.mov">National Parks USA Webpage Demo Recording</a>

## Contents
- [Overview](#overview)
- [Techstack](#techstack)
- - [Libraries & Frameworks](#libraries-and-frameworks)
- - [Languages](#languages)
- [Wireframes and User Flows](#wireframes-and-user-flows)
- [Data Model](#data-model)
- [APIs](#apis)
- [Style Guide](#style-guide)
- [Tools](#tools)
- [Installation](#installation)
- [Difficulties or Unsolved Problems](#difficulties-or-unsolved-problems)
- [Future Development](#future-development)

## Overview
National Parks USA is a webpage that let users explore new territories and open the door to new discoveries in nature and themselves. Users can save their favorite parks too. The website responds to the needs of the users and the devices they're using.
![Computer and mobile Device Responsive Layout](https://raw.githubusercontent.com/HarneetKaur04/National_Parks_Project/main/client/public/DeviceView.png)

## Techstack

### Libraries and Frameworks
<p align="center"><img src="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/Screen%20Shot%202022-11-17%20at%203.42.56%20PM.png" width=60% height=40%><p/>

### Languages
<p align="center"><img src="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/Screen%20Shot%202022-11-17%20at%203.43.03%20PM.png" width=60% height=40%><p/>

## Wireframes and User Flows
<p align="center"><img src="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/Screen%20Shot%202022-11-17%20at%2012.37.36%20PM.png" width=80% height=50%><p/>

## Data Model
<p align="center"><img src="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/Screen%20Shot%202022-11-17%20at%2012.37.58%20PM.png" width=80% height=50%><p/>

## APIs
<p align="center"><img src="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/Screen%20Shot%202022-11-17%20at%204.10.15%20PM.png" width=60% height=40%><p/>

## Style Guide
<p align="center"><img src="https://github.com/HarneetKaur04/National_Parks_Project/blob/main/client/public/Screen%20Shot%202022-11-17%20at%201.29.03%20PM.png" width=60% height=40%><p/>

## Tools
-  Chrome Developer Tools
-  VS Code
-  Auth0
-  TDD (Jest & RTL)
-  Terminal
-  Git
-  GitHub
 
## Installation
- Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/React-Express-PairProgramming.git NAMENEWDIRECTORY`
- To clean your folder from the owner git, run the command `rm -rf .git`
- Run the command `git init` to start your git repository 

### To install, set up and work in the server side
- Go to the server folder in the project (`cd server`) and run the command `npm install`
- Inside your server folder, create an .env file with `touch .env`
- Inside your server folder, open the file `.env.example` and copy the file to .env with your own credentials and keys. 
- BACK TO THE TERMINAL - To restore the DB dump file that the project already contain, just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask you for your password.  If you had configured your postgres without password just run the command `psql -f db.sql`
- At this point you can run the command `npm start` to run your server

### Now, back to the terminal to work on your frontend
- Go to the cliente folder (`cd .. and cd client`) and run the command `npm install`
- Both server should run now with `npm start`

## Difficulties or Unsolved Problems
- A user record is not stored in session when the user refreshes the page, although it shows on navbar the user is signed in
- Deploying on render, if user refreshes, request is sent to backend and not front-end and hence page errors out
- USA Map React package lags when the user hovers over the state on the homepage to display the state name before clicking

## Future Development
- Users could add a photo for their profile
- Weather forecast when details of single park is shown to user
- Pagination since there are so many National Parks. Having feature to go to next page to get more National Parks Cards and activities
- More testing unit and integration
- Go to top button on page



