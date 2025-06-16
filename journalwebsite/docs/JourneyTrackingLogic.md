# Journey Progress Tracking Logic

1. Saving User Inputs
- save users input of all his/hers answers

2. Have a markSectionComplete function to mark 3 sections (CHECK IN, MAIN EXERCISE, REFLECTION) complete as the user completes them
- First section will always be check in, and it will give an option of two buttons to either "skip to main exersize", or "do breathing exersize". whichever path the user chooses to go, it will ultimatley take them to the start of the main exersize. The check-in should be marked complete on whichever button they click. 
- the main exersize will be marked complete when the user clicks the "continue to reflection" button on the last page of the main exersize. 
- the reflection should be marked complete when the user clicks the "complete day" button on the last page of the reflection section. 

3. Have a markDayComplete to mark a day complete when finished
- the complete page should have a big button at the bottom that says “complete day x “ (dynamic text to what day it is, in our case Day 1) On click, it will mark day complete.

4. Have a markPageComplete
- there will be a tracker on each page to track progress where the user left off on page level (in case he closes phone or gets distracted). This tracker will also be used to calculate the percent of the exersize the user has completetd from the day(such as 20% if there is 10 pages and he just ONBOARDED page 3). This progress will be used in the progress bar in the exersizelayout.js. 

Dashboard logic:
1. The dashboard card will show the current day title that the user is currently working on, subtitle, and status: day x/30. 
2. Then the 3 sections (power-up, main exersize, and reflection) checked off as each is completed on that day. 3. The button continue journey should take user to where they left off, what page exactly. 


Journeyoverview:
1. highlight the day the user is on from the list, 
2. In progressmetrics.js show: the percent of the entire journey completion (if u completed 5 days of 30 for example, its 16%), the streak (how many days in a row completed nonstop), and the current phase they are on 

This is the hirearchy: 30 day journey > day > section > page