## Goal:
- Facilitate scheduling
    - How? What does this mean?
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

## Front End Components:
# Log in/Sign up
- ~~ONLY NECESSARY IF INTEGRATABLE WITH TANGIBLE SCHEDULE IN SOME WAY OR TRANSCRIPT~~
- prompt user to log in, use duo if possible
- store user data in database
- check for a unique username input
- ~~FIGURE OUT WHAT TO USE~~ 

# UI/Features
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

# Use JS/TS
- runs on all browsers
- widely used
- various frameworks for simplicity

## Frontend Frameworks
- **Final decision below**
# React
- **Pros**
    - popular, high demand
    - large library suppport
    - compatability with supabase
    - scales well
    - large amount of resources
- **Cons**
    - more setup
    - large app size

# Vue
- **Pros**
    - simplest to begin
    - rapid deployment
- **Cons**
    - simplicity brings poor depth
    - poor felxibility

# Svelte
- **Pros**
    - simplest code
    - better for solo work and full control
- **Cons**
    - poor for bigger or dynamic apps
    - poor server rendering

## Backend Components:
# Course fetching:
- ~~fetch courses based on user input (similar to already available class search)~~
- ~~scrape website to grab available options like department/major~~
- set up database to hold all data in a centralized location
    - updates and stores data on a daily basis
    - only need to pull once a day to update
        - consider more frequent pulls for close to real-time status updates when enrollment happens(30 min pulls if possible to align with scheduling)

# Scheduling Logic:
- needs to handle conflicts, user-input conditions/limitations
- for saved schedules, handle notification for when class fills
- check if scheduling a class with no occupancy, or wait-listable
- if sufficient information provided, check if user meets pre-requisites
    - else notify user of pre-requisites before adding

# User Handling/Authentication:
- verify user-input information
- pull info from front-end
- encrypt some information
    - **need to check out process for a later date**
- database to store all info
    - ~~usage of a database for multiple different things? probably a better way; research later~~
- verify login using email verify
- setup device/user recognition to simplify logins
- ~~need to research and decide on authentication processes/std security stuff~~

## Backend framework:
# Node.js/Express
- **Pros**
    - complements React, Supabase
    - popular
    - handles complex logic/apis better
    - better scalability
    - websockets for real-time updates
- **Cons**
    - complex
    - requires server
    - more setup

# Next.js
- **Pros**
    - better for smaller apps
    - integration for React and Supabase
    - more flexibility
    - simpler experience
- **Cons**
    - no native websockets
    - can fall behind with more complex projects

# Flask
- **Pros**
    - python
    - lightweight
    - heavy integration for AI/ML tools
- **Cons**
    - manual setup
    - separate frontend
    - no direct compatability with DB/FE

## Information Storage
- need to store:
    - individual user information (login info)
    - user's created schedules
    - class info
- requires database, seems to be
- **Final decision below**

# PostgreSQL
- **Pros**
    - JOINS for simplifying  and connecting related data
    - applicable rules that enforce data validity
    - allows transactions - all or nothing actions for easier updates
    - covers complex filters and searches
    - clean data
- **Cons**
    - requires backend manual backend setup
    - poor random data or rapid high volume data

# Firebase
- **Pros**
    - higher scalability
    - handles authorization innately
    - handles analytics, push notifications, websocketing, some other stuff
        - mostly irrelevant unless want to move to mobile application
    - minimalizes back-end work
    - real-time sync
- **Cons**
    - complex, relational data
    - large writes to DB

# MongoDB
- **Pros**
    - Rapid MVP/prototype deployment
    - native nested data support
- **Cons**
    - no JOIN
    - poor complexity
    - requires own back-end

## Tech Stack:
# React:
- Most value in learning, used in industry
- Large library/tools and support base
- Compatability with SupaBase

# Next.js:
- Great compatability with React and Supabase
- Same language as react for more simplicity
- Simple integration for OpenAI for later chatbot integration
- Logic 

# SupaBase:
- PostgreSQL based, includes own authentication system and login heavy simplification
- Smaller end of scalability, but realistically sufficient
- Simpler user experience 
- Faster deployment
- Front-end SDK, further simplicity
