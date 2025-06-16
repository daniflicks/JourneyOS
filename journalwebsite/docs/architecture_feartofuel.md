# Fear to Fuel: Architecture and Logic

## Overview

The Fear to Fuel section is an interactive journaling experience designed to help users transform fear into productive energy. It guides users through a 30-day journey, organized into distinct phases that assist in self-discovery, fear management, and personal growth. This document outlines the architecture, structure, and core logic behind the Fear to Fuel module.

## Project Structure

The Fear to Fuel section is organized into multiple directories and files to ensure a modular and scalable architecture:

- **/src/app/feartofuel/**
  - Contains main application code and routing logic specifically for the Fear to Fuel journey.
  - Includes components like `ExerciseLayout` which wrap each exercise step with common UI elements such as headers (progress bar) and footers (navigation).

- **/src/content/feartofuel/**
  - Holds day-specific content components (e.g., exercises for fear collection, project vision, reflection, etc.).
  - Each file corresponds to a particular step in a day's journey and is dynamically imported based on the URL parameters (day and pageId).

- **/src/app/feartofuel/constants/**
  - Contains configuration files such as `journeyConfig.js` which defines content for each day (e.g., focus areas, descriptions).

- **/src/app/feartofuel/styles/**
  - Includes CSS module files (e.g., `fear_to_fuel.module.css`) that style the Fear to Fuel UI elements, from progress bars and buttons to fear cards and text inputs.

## Component Hierarchy and Routing

- **Dynamic Routing:**
  - The Fear to Fuel journey leverages Next.js dynamic routing. Routes follow the pattern `/feartofuel/[day]/[pageId]`, with dynamic imports in the page component (`[pageId]/page.js`) that load the corresponding content component from the content directory.

- **ExerciseLayout Component:**
  - This component is a central wrapper used across various steps. It receives props such as `children`, `showHeader`, and `showFooter` to consistently render the page's progress, header, and navigation footer.

- **Content Components:**
  - Located in `/src/content/feartofuel/dayX/`, these React functional components represent individual exercises. They handle user input, such as collecting fears or capturing reflections, and manage their own state.

## State Management and Navigation

- **React Hooks:**
  - Components use React's `useState` and `useEffect` hooks to manage local state (e.g., user inputs like project vision, motivations, fears).
  - Some components also interact with `localStorage` to persist key pieces of data between steps.

- **Custom Hooks:**
  - The `useExerciseFlow` hook from `/src/hooks/journeyHooks.js` orchestrates the flow of a single exercise step. It handles:
    - Retrieving current answers from a central store
    - Saving user inputs
    - Marking pages and sections as complete
    - Navigating to the subsequent step using Next.js's router.

- **Journey Store:**
  - Integrated with custom hooks, the journey store tracks overall progress, ensuring each day's module keeps accurate progress metrics (e.g., progress percentages for the day).

## UI Logic and Interactivity

- **Progress Indicators:**
  - The progress bar in the header dynamically computes completion percentages using data from the journey store. This feedback loop enhances user engagement.

- **User Input Management:**
  - In exercises like fear collection, the UI dynamically handles multiple input fields:
    - New inputs are added when the user presses Enter if the current entry is not empty.
    - Users can remove an input, ensuring that at least one input remains visible.
    - Conditional rendering is used to display analysis sections or additional prompts based on state (e.g., revealing pattern analysis for fear inputs).

- **Navigation:**
  - On completion of a step, functions (e.g., `handleNext` in various components) trigger a navigation event via `router.push`, guiding users to the next sequential exercise.

## Styling and External Libraries

- **CSS Modules:**
  - Styles for the Fear to Fuel section are compartmentalized in CSS module files. These styles cover a wide range of elements including headers, footers, progress bars, input fields, and dynamically generated cards (for fear categories and analysis).

- **Iconography:**
  - The design leverages the `lucide-react` library for icons, which are used in buttons, headers, and other UI elements to improve the visual cues within the journey.
### Progress Tracking Logic

1. **Saving User Inputs:** All user answers are saved as they interact with the journey.
2. **markSectionComplete:** Marks sections complete upon actions:
   - **Check-In:** Marked complete when the user chooses either "skip to main exercise" or "do breathing exercise."
   - **Main Exercise:** Marked complete when the "continue to reflection" button is pressed.
   - **Reflection:** Marked complete when the "complete day" button is pressed.
3. **markPageComplete:** Tracks progress within a section, enabling partial progress saving.
4. **markDayComplete:** Marks a day as complete when the "complete day" button is clicked.

### Dashboard & Journey Overview

- **Dashboard**
  - Displays current day title, subtitle, and completion status (e.g., Day X/30).
  - Indicates the completion status of each section.
  - Provides a "continue journey" button to resume progress.

- **Journey Overview**
  - Highlights the current day.
  - Shows overall progress metrics such as:
    - Percentage of journey completed.
    - Streak (consecutive days completed without break).
    - Current program phase.

## Program Phases

The journey phases are defined as follows:

- Identify Your Fear (Day 1 - 6)
- Reframing (Day 7 - 10)
- New Future/Vision (Day 11 - 16)
- Growth (Day 17 - 21)
- Prepping (Day 22 - 28)
- Stepping into Action (Day 29 - 30)


## Fear to Fuel File Structure

The following tree diagram provides an overview of the file structure for the Fear to Fuel module:

src
├── app
│   ├── calendar
│   │   ├── components
│   │   │   ├── Calendar.js
│   │   │   └── …  
│   │   ├── page.js
│   │   └── styles
│   │       └── calendar.module.css
│   │
│   ├── chat
│   │   ├── components
│   │   │   ├── ChatContainer.js
│   │   ├ │   └── …
│   │   ├── page.js
│   │   └── styles
│   │       └── chat.module.css
│   │
│   ├── entries
│   │   ├── components
│   │   │   ├── EntryEditor.js
│   │   │   └── RecentEntries.js
│   │   ├── page.js
│   │   └── styles
│   │       └── entries.module.css
│   │
│   ├── dashboard
│   │   ├── components
│   │   │   └── FearJournalCard.js
│   │   ├── page.js
│   │   └── styles
│   │       └── dashboard.module.css
│   │
│   ├── journeyoverview
│   │   ├── components
│   │   │   ├── DailyTask.js
│   │   │   └── ProgressMetrics.js
│   │   ├── page.js
│   │   └── styles
│   │       └── journeyoverview.module.css
│   │
│   ── layout.js                    ← global wrapper (e.g. sidebar)
│   │
│   └── feartofuel                   ← your 30‑day program routes
│       ├── [day]                    ← dynamic segment for Day 1, Day 2, … Day 30
│       |   ├── layout.js            ← ← ExerciseLayout + flow hook provider
│       |   │
│       |   ├── complete             ← single “Complete Day X” screen
│       |   │   └── page.js
│       |   │
│       |   └── [pageId]             ← dynamic for each step slug
│       |       └── page.js          ← one template that does:
│       |                              |  • useExerciseFlow()
│       └── components                 |  • <ExerciseLayout> … <StepUI />
│           └── CheckInList.js         |  • dynamic import from content/
│
│
├── content                          ← all of your 300+ “step UI” modules
│   └── feartofuel
│       ├── day1
│       │   ├── 1-checkin-1.js       ← pure UI, takes {answers,onChange,onContinue}
│       │   ├── 1-main-1.js
│       │   ├── 1-reflection-1.js
│       │   └── complete.js          ← bespoke “Day 1 complete” cards/text
│       │
│       └── day2
│           ├── 2-checkin-1.js
│           ├── 2-main-1.js
│           ├── 2-reflection-1.js
│           └── complete.js
│
├── hooks
│   └── journeyHooks.js              ← useExerciseFlow (state + store + routing)
│
├── store
│   └── journeyStore.js   ← Zustand store: saveUserInput, markPage/Section/Day, selectors
│
├── config
│   └── pageMap.js                   ← {1: ['1-checkin-1','1-main-1',…], 2: […], …}
│
├── constants
│   └── journeyConstants.js          ← SECTION_TYPES, TOTAL_DAYS, etc.
│
└── styles
    └── globals.css                  ← any truly global styles
```

## Summary

The architecture of the Fear to Fuel section is designed for clarity, modularity, and scalability. By combining dynamic routing, modular content components, and a robust state management strategy, the system delivers a seamless and interactive journaling experience. This approach not only supports the core journey of transforming fear into actionable energy but also provides a flexible foundation for future enhancements and additional features. 