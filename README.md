# HopeuniCamp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5. 

A web platform to hopefully ease the communication between campers and the camp committee. With features for users to view and retrieve important information/announcement about the camp or their personal information regarding the camp (i.e. games group or workshop details), and also features for camp committees to easily update and diseminate important informations. 

I'm by no means a pro in web development or anything, but I am willing to teach and guide anyone who has interest in this. All I'm looking for is people who want to use their talents to serve God in some ways but have never been able to find a channel to really live out their talents. This is by no means graded nor are we looking at developing a ground breaking application, so come and hopefully we can create a space where people can find ways to serve God with their talents.

## Installation

Hey there! So if you're brand new and am not sure how to set it up, or what to do, feel free to ask! I am more than willing to help, but generally this should be the few steps you need to take to set up this project 

1) Fork it - by clicking that fork button on top
2) Clone your fork
```bash
mkdir forked && cd forked
git clone <my forked repo>
```

3) Set up remote upstream
```bash
git remote add upstream https://github.com/jeremiah-ang/hopeuni-camp
```

4) run `npm install`
5) create a new branch
```bash
git checkout -b feature/newFeature
```
6) Make your changes
7) push to origin
```bash
git push -u origin feature/newFeature
```
8) create pull request by pressing the button on top
9) Once merged, checkout to master
```bash
git checkout master
```
10) pull from upstream
```bash
git pull upstream master
```
11) push to origin
```bash
git push -u origin master
```
12) delete branches
```bash
git branch -d feature/newFeature && git push --delete origin feature/newFeature
```

## Creating components/services

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Demo Website 

We are working on it to give the camp committee a solid preview of how they can work with the system, but right now all I can provide is a detailed list of the features.

- Camper's View - `https://jeremiah-ang.github.io/hopeuni/`
- Camp Committee's View - `(WIP)`

## Features
- Announcements + Countdown + Schedule
	- One-stop location to get all important announcement/information regarding the camp as a whole (i.e. `change in plans`, `emergency contacts`) or individual component of a camp (i.e. `games attire`, `door opening time`)
	- Integrated platform for all camp committee to update informations/announcements
- Camper's info 
	- For campers to retrieve their information such as their `games group`, `room number`, `workshop number` or other important information.  
- Feedback/Testimonies/Thanks Giving
	- Similarly a one-stop location for anyone who wants to give thanks or to be encouraged by other fellow campers.

## How to contribute? 

We are no experts in this, but if you think you see potential in how this can contribute to the camp and really want to contribute to the application just let us know :) Below is a few ways I think you can contribute in. 

- Web designer
	- Task: You will design and develop the `look and feel` and also the `user experience` of the webpage, the design should align with the camp's design.
	- Skillset: HTML + CSS + Javascript + Design, we're using angular but we're all pretty new to angular, lets just learn together, if you're a pro in angular, do come and contribute too :)
  
I have created some issues that we have that needs to be fixed, maybe you can start by looking at what you think you can do? :) Once you have done something and you want me to check it out, just make a pull request and I will review it :)
	
## Tech Stack

- Angular 6
- Hosted on github pages, so all 'backend' process (i.e. validations) will be on client side (LOL) 
- We'll use google sheet as database
- Angular Material Design (https://material.angular.io/guide/getting-started)

## Link to sheet (view-only)

`https://docs.google.com/spreadsheets/d/1CaSxTF0GTyjppwlmiuCN36dYt_tjw31E8zYfLJh4grM/edit?usp=sharing`

testing 123 hello