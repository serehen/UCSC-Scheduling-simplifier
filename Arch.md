# Goal:
- Facilitate scheduling
    - How? What does this mean?
- Provide least possible friction as possible for user
    - avoid unecessary menus, simplify wherever possible, etc
    - essentially maximize efficiency
- incorporate some rmp/reddit/general web analyzing to recommend professors for classes
    - use ai wrapper **search up what would be good (later addition)**
- implement user preference system for scheduling constraints (morning/afternoon preference, days off, etc.)
- possibly recommend a schedule based on classes provided/gen-ed needed
- isolate process to a single website, and make it user friendly
    - list rmp ratings, provide link to teacher’s site (if applicable) (also maybe just provide entire rmp comment section if possible)
    - reduce unnecessary actions to search for classes given conditions
    - integrate slugtistics for grade averages
- (hopefully) integrate shopping cart system? not sure if possible, but would at least facilitate schedule-shaping process
- AI chatbot to recommend classes/schedule based on transcript/required or taken classes

# To Do:
- **General List of things to do, further know what to do when I start working immediately**
- ~~Look into SSO~~
- Look at what backend stuff Supabase has to offer
    - mostly regarding its authorization and sign in tools
    - ~~whether its worth using over SSO or not~~
        - ~~probably not, figure SSO is realistically more user friendly especially if allows for google login but will decide later~~
- Finish sketch for website outline
    - ~70% done with visualization sketch
- Decide on what to start on first, likely frontend
- Look at some other websites for inspiration regarding further design and research
- Choice looks like either SSO or Google Auth
    - SSO requires own setup, Supabase has integrated google authentication + tons of other options
    
# Thoughts:
- Later, but need to research how to restrict what a chatbot could pull from
- Want to integrate some way to look at/for GEs in other CCCs
    - Not sure how feasable, would need to pull from every CCC with publically available course catalogue, alot of data
    - Would extremely facilitate arduous process
    - Also requires scraping of Assist with specific requests checking at each CCC
- Start with basic MVP then build on goal of efficiency and user-friendliness

# Front End Components:
## Log in/Sign up
- ~~ONLY NECESSARY IF INTEGRATABLE WITH TANGIBLE SCHEDULE IN SOME WAY OR TRANSCRIPT~~
- prompt user to log in, use duo if possible
- store user data in database
- check for a unique username input
- ~~FIGURE OUT WHAT TO USE~~ 

## UI/Features
- display all courses on UCSC Catalogue, separated into own sections 
- possibly group some together if amount of classes is small and are related
- when viewing a class display:
    - *rmp rating* (w/ comments)
    - *%A average* (from slugtistics)
        - also display the slugtistics grade graph on the page for the class
    - class prerequisites
    - what the class "unlocks"
    - *GE Credit*
    - *small indicator of additional class components(lab/section)*
    - *units*
    - **most of above visible upon hovering class (italicized)**
- allow searching/filtering through one or multiple filters
    - rmp rating, ge-credit, professor, etc

## Use JS/TS
- runs on all browsers
- widely used
- various frameworks for simplicity

# Frontend Frameworks
- **Final decision below**
## React/Vite
- ### Pros
    - popular, high demand
    - large library suppport
    - compatability with supabase
    - scales well
    - large amount of resources
- ### Cons
    - more setup
    - large app size

## Vue
- ### Pros
    - simplest to begin
    - rapid deployment
- ### Cons
    - simplicity brings poor depth
    - poor felxibility

## Svelte
- ### Pros
    - simplest code
    - better for solo work and full control
- ### Cons
    - poor for bigger or dynamic apps
    - poor server rendering

# Backend Components:
## Course fetching:
- ~~fetch courses based on user input (similar to already available class search)~~
- ~~scrape website to grab available options like department/major~~
- set up database to hold all data in a centralized location
    - updates and stores data on a daily basis
    - only need to pull once a day to update
        - consider more frequent pulls for close to real-time status updates when enrollment happens(30 min pulls if possible to align with scheduling)

## Scheduling Logic:
- needs to handle conflicts, user-input conditions/limitations
- for saved schedules, handle notification for when class fills
- check if scheduling a class with no occupancy, or wait-listable
- if sufficient information provided, check if user meets pre-requisites
    - else notify user of pre-requisites before adding

## User Handling/Authentication:
- verify user-input information
- pull info from front-end
- encrypt some information
    - **need to check out process for a later date**
- database to store all info
    - ~~usage of a database for multiple different things? probably a better way; research later~~
- verify login using email verify
- setup device/user recognition to simplify logins
- ~~need to research and decide on authentication processes/std security stuff~~

# Backend framework:
## Node.js/Express
- ### Pros
    - complements React, Supabase
    - popular
    - handles complex logic/apis better
    - better scalability
    - websockets for real-time updates
- ### Cons
    - complex
    - requires server
    - more setup

## Next.js
- ### Pros
    - better for smaller apps
    - integration for React and Supabase
    - more flexibility
    - simpler experience
- ### Cons
    - no native websockets
    - can fall behind with more complex projects

## Flask
- ### Pros
    - python
    - lightweight
    - heavy integration for AI/ML tools
- ### Cons
    - manual setup
    - separate frontend
    - no direct compatability with DB/FE

# Information Storage
- need to store:
    - individual user information (login info)
    - user's created schedules
    - class info
- requires database, seems to be
- **Final decision below**

## PostgreSQL
- ### Pros
    - JOINS for simplifying  and connecting related data
    - applicable rules that enforce data validity
    - allows transactions - all or nothing actions for easier updates
    - covers complex filters and searches
    - clean data
- ### Cons
    - requires backend manual backend setup
    - poor random data or rapid high volume data

## Firebase
- ### Pros
    - higher scalability
    - handles authorization innately
    - handles analytics, push notifications, websocketing, some other stuff
        - mostly irrelevant unless want to move to mobile application
    - minimalizes back-end work
    - real-time sync
- ### Cons
    - complex, relational data
    - large writes to DB

## MongoDB
- ### Pros
    - Rapid MVP/prototype deployment
    - native nested data support
- ### Cons
    - no JOIN
    - poor complexity
    - requires own back-end

# Tech Stack:
## Next.js:
- React based full-stack framework
- Integrated support for TS
- Great compatability with Supabase
- Simple integration APIs, API routing
    - allows ease of use for OpenAI API for later chatbot integration
- Extensive list of documentation and guides to facilitate finding information

## SupaBase:
- PostgreSQL based, includes own authentication system and login through various platforms (Google, Github, Email. etc.)
- Smaller end of scalability, but realistically sufficient
- Simpler user experience 
- Faster deployment

## Tailwind CSS
- Pre-defined classes to simplify UI Design
- Allows styling directly with React, no need for subsidiary css styling 
