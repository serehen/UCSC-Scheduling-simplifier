# UCSC Scheduling

This project is a one-stop solution to the headache that enrollment at UC Santa Cruz currently causes thousands of students every quarter. Having to cross-reference RateMyProfessor ratings with the MyScheduler website and the Enrollment Shopping Cart adds unnecessary stress to an enrollment process that dictates whether students can graduate on time or not. Having seen the impacts of these inconveniences and the desire for a streamlined solution, I decided to create the USCS Scheduling Simplifier, an interface that scrapes data from RateMyProfessor.com and provides information regarding prerequisites, average difficulty of the course and other crucial information to alleviate the difficulties of enrollment as much as possible.

I plan to work on this project over the course of Summer 2025, and will document my progress in this repository. Feel free to make pull requests and raise issues as desired, because feedback is essential and always welcome throughout this process.

## Setup
 
1. Install [node.js](https://nodejs.org/en/download)

2. Clone Repository
```
git clone https://github.com/serehen/UCSC-Scheduling-simplifier
```

3. cd into UCSC-Scheduling-simplifier/frontend

4. Install dependencies (access repo first)
```
npm install
```
5. Rename **".env.public"** to **".env.local"**

6. Run locally on supported browsers (Chrome, Edge, Firefox, etc)
```
npm run dev
```
