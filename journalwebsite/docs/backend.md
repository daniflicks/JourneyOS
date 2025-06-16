Dependencies:
text-embedding-005
Vertex ai
SQL on google cloud
 "next": "15.2.4"

Architecture:

src/
├─ controllers/
│   ├─ journal.js
│   └─ user.js
├─ services/
│   ├─ firestore.js
│   └─ embedding.js
└─ pages/
    └─ api/
        ├─ journal/
        │   ├─ index.js       ← GET list, POST create
        │   └─ [id].js         ← GET one, PUT update, DELETE remove
        └─ user/
            ├─ index.js
            └─ [id].js



API PLAN

Api/User
Api/Journal
Api/Exercises
Api/Chat
Api/Calendar
Api/Setting
Api/Subscription
Api/Progress

Entity Name	Description
User	The person using the app (email, password, username, DOB.)
Journal	Text entry
Exersizes	User input n AI response to exersize prompts
Chat	A message in the open-ended chat (user and AI)
Calendar	Reminders or scheduled tasks (like “Day 5 starts tomorrow”)
Setting	Preferences like AI model, notification toggles, theme
Subscription	Paid plan info, status, dates
Progress	CurrentDay, CurrentPage, CurrentPhase, Streak, PercentJourneyComplete, PercrentDayComplete, SectionComplete, PageComplete, DayComplete



1. /api/journal:
Action	HTTP Method	URL Example	What it does
Create a new entry	POST	/api/journal	Save a freeform journal entry
Get all entries	GET	/api/journal	Get all entries for current user
Get entries by tag (filter)	GET	/api/journal?tag=healing	Get only entries with a specific tag
Get one entry by ID	GET	/api/journal/entry123	Fetch a single entry
Update an entry	PATCH	/api/journal/entry123	Change content or tags for one entry
Delete an entry	DELETE	/api/journal/entry123	Remove it from the database

2. /api/chat - later AI will decide what to pull form memory 
Add Message & Save Memory	POST	/api/chat	Call Type: On-demand	1. Save to ChatMessage (role, content, embedding).2. Call memory service to persist this node.
Get Chat History	GET	/api/chat		Fetch all messages (or by topic).
Filter Chat by Topic	GET	/api/chat?topic=xyz		Optional—filter by your topic field.

Step 1: Generate the vector embedding.
Step 2: Save your message in ChatMessage.
Step 3: Call your memory service (POST /api/memory/save) under the hood to store this chat node for Tier 3 recall.

3. Api/calendar
Action	HTTP Verb	Endpoint	Description
Create Event	POST	/api/calendar	Create a new event (title, start/end, all_day, etc.)
List Events	GET	/api/calendar?start=2025-06-01&end=2025-06-30	Fetch all events for a user between two dates
Get Single Event	GET	/api/calendar/{event_id}	Retrieve one event’s details by its ID
Update Event	PATCH	/api/calendar/{event_id}	Modify title, time, status, etc., of an existing event
Delete Event	DELETE	/api/calendar/{event_id}	Remove an event permanently


4. /api/exercises
Save or Update Exercise	POST	/api/exercises	{ day, section, inputKey, userText, aiText }	Create or overwrite one user-AI pair for a given step.
Fetch All for a Day	GET	/api/exercises?day=1	(none)	Get every { id, day, section, inputKey, userText, aiText, createdAt } for Day 1.
Fetch Single Entry	GET	/api/exercises/{id}	(none)	Get one exercise entry by its id.
Delete an Entry	DELETE	/api/exercises/{id}	(none)	Remove that step’s input+AI pair.

Save Memory Node	POST	/api/memory/save	{ type, content, embedding }	Persist any “memory” (journal excerpt, AI feedback, summary) with its vector embedding.
Recall Semantic Memories	POST	/api/memory/search	{ embedding, topK }	Return the top-K most similar memory nodes (for Tier 3 retrieval by your AI agent).

5. /api/progress
Mark Page Complete	POST	/api/progress/page-complete	{ pageId }	Flag one page as done (used to compute page-level % complete).
Mark Section Complete	POST	/api/progress/section-complete	{ day, section }	Mark CHECK_IN, MAIN_EXERCISE, or REFLECTION as complete for that day.
Mark Day Complete	POST	/api/progress/day-complete	{ day }	Mark the entire day finished (advances streak & completed count).
Get Dashboard Data	GET	/api/progress/dashboard	(none)	{ currentDay, resumePage, sectionsStatus, phaseTitle } for the user’s next action.
Get Progress Metrics	GET	/api/progress/metrics	(none)	{ journeyPercent, streak, currentPhase } across all days.
Get Journey Overview	GET	/api/progress/overview	(none)	{ daysList: [1…30], currentDay } for your 30-day map.

6. /api/user
Register	POST	/api/user	{ email, password, username, dob }	Create a new user account
Login	POST	/api/user/login	{ email, password }	Authenticate and establish a session (return JWT or cookie)
Get Current Profile	GET	/api/user	(none)	Return the logged-in user’s profile (email, username, dob)
Update Profile	PATCH	/api/user	{ username?, dob?, address? }	Change profile fields (e.g. username, date of birth, address)
Change Password	PATCH	/api/user/password	{ currentPassword, newPassword }	Securely update user’s password
Delete Account	DELETE	/api/user	(none)	Permanently remove the user and all their data
Logout (optional)	POST	/api/user/logout	(none)	Invalidate session or JWT on the server side


7. Api/settings
Get Settings	GET	/api/settings	(none)	Returns { aiModel, notificationsOn, theme } (and any other prefs you expose).
Update Settings	PATCH	/api/settings	{ aiModel?, notificationsOn?, theme? }	Change any subset of the user’s preferences.

8. /api/subscription
Create Checkout Session	POST	/api/subscription/create	{ priceId }	Returns a Stripe Checkout URL for the user to subscribe.
Get Subscription Status	GET	/api/subscription	(none)	Returns { status, currentPeriodEnd, priceId } for the logged-in user.
Cancel Subscription	POST	/api/subscription/cancel	(none)	Cancels at period end (or immediately)—updates status.
Webhook Handler	POST	/api/subscription/webhook	Stripe-signed event payload	Receives Stripe webhooks (e.g. invoice.paid, customer.subscription.deleted) and updates your DB.
