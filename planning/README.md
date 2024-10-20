1. User Registration (It is empty just to show we can have something like that on the website)
2. User can create multiple decision process
3. User can re-use/have access to privious decision sessions that they created.
4. (Maybe a strech) User can click a button that randomly selects an option for them to chose from. User can choose from common decision templates about the subject
5. User can be able to save their frequently made decisions so they can use them later if they want. 
6. User can view their history of my previous decisions

# user stories
- as a **user**, i want to create **polls** with multiple **choices** because i want to share them with other **users** to make collective **decisions**
- as a **user**, i want to access **polls** that have been shared with me, because i want to make my **choices** and rank them
- as a **creator**, i want **choices** to have a **title** and optional **descriptions** because that is how i will communicate **information** to other **users**
- as a **user**, i want to enter my **name** because that is how other users will see what **choices** i've made and how i've ranked them
- as a **user**, i want to enter my **email** because i want to receive **links**, **polls**, and poll **results**
- as a **creator**, i want a **link** that gives me administrative **access** to a **poll** because i want to keep track of **responses** and **results**
- as a **creator**, i want a **link** that i can share because i want other **users** to answer my **poll(s)**
- as a **user**, i want to drag and drop my **choices** to rank them because that is easy and fun
- as a **creator**, i want to have **access** to previous **polls** i've created because i might need them again
- as a **user**, i want to save my **choices** because i might use them again in future **polls**
- as a **user**, i want to see a **history** of previous **polls** because i want to remember previous **results**

# routes
## /users
- Browse: GET /users => get all users
- Read: GET /users:id => see single user
- ~~Edit: POST /users:id~~ => probably stretch
- ~~Add: POST /users~~ => probably stretch
- ~~Delete: POST /users:id/delete~~ => probably stretch

## /polls
- Browse: GET /polls => get all polls
- Read: GET /polls:id => see a single poll
- Edit: POST /polls:id => useful if poll creator made a mistake or needs to add a new option
- Add: POST /polls => create new poll
- ~~Delete: POST /polls:id/delete~~ => no need for demo

## /poll_creators
- Browse: GET /poll_creators => get all data of how users have interacted with polls
- Read: GET /poll_creators:id => useful to check if a user is a poll creator or not
- ~~Edit: POST /poll_creators:id~~ => probably not needed?
- Add: POST /poll_creators => not sure if needed
- ~~Delete: POST /poll_creators:id/delete~~ => probably not needed

## choices
- Browse: GET /choices => get all choices
- Read: GET /choices:id => get a single choice
- Edit: POST /choices:id => useful if creator needs to edit a choice or user changes their mind? possibly stretch
- Add: POST /choices => add a new choice to a poll
- Delete: POST /choices:id/delete => delete a choice from a poll

## responses
- Browse: GET /responses => get all responses
- Read: GET /responses:id => get a single response
- Edit: POST /responses:id => useful if user changes their mind? possibly stretch
- Add: POST /responses => user submits a response
- ~~Delete: POST /responses:id/delete~~ => probably stretch
