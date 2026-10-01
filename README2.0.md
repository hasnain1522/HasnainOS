# HASNAIN.OS — README 2.0

## Purpose
Hasnain.OS is a React/Vite personal portfolio presented as a lightweight personal operating system.

The repository is intentionally split into small files so future edits can be made without touching the entire portfolio.

## Architecture

```
src/
├── App.jsx                         # Entry state: boot or system
├── main.jsx                        # React mount + global styles
├── audio/
│   └── AudioEngine.js              # Portfolio audio control
├── components/
│   ├── BootScreen.jsx              # Boot sequence UI + orchestration
│   ├── BootModule.jsx              # One boot progress row
│   ├── CommandCenter.jsx           # Navigation/state only
│   ├── CommandCenterHome.jsx       # Command Center visual UI
│   ├── ErrorBoundary.jsx           # Prevents silent blank screens
│   ├── Projects.jsx                # Project database UI
│   ├── TechCore.jsx                # Tech Core module
│   ├── Experience.jsx              # Experience module
│   ├── AiLab.jsx                   # AI Lab module
│   ├── FutureBuilds.jsx            # Future Builds module
│   └── modules/
│       └── IdentityCore.jsx        # Identity module
├── data/
│   ├── systemIdentity.js           # Name, role, version
│   ├── bootData.js                 # Boot modules/timing
│   ├── commandModules.js           # Command Center module cards
│   ├── identityData.js             # Identity content
│   ├── techCoreData.js             # Tech content
│   ├── experienceData.js           # Experience content
│   ├── aiLabData.js                # AI Lab content
│   ├── futureBuildsData.js         # Roadmap content
│   └── projectData.js              # Projects + hackathons
└── styles/
    ├── global.css                  # Global base
    ├── boot.css                    # Boot screen
    ├── command-center.css          # Command Center
    ├── system-module.css           # Shared module layout
    ├── identity-core.css           # Identity styling
    └── projects.css                # Project database styling
```

## Connection map

- `main.jsx` → `App.jsx`
- `App.jsx` → `BootScreen.jsx` OR `CommandCenter.jsx`
- `BootScreen.jsx` → `BootModule.jsx` + `bootData.js` + `systemIdentity.js` + `AudioEngine.js`
- `CommandCenter.jsx` → `CommandCenterHome.jsx` + all six module components
- `CommandCenterHome.jsx` → `commandModules.js` + `systemIdentity.js`
- `Projects.jsx` → `projectData.js` + `Projects.css`
- `IdentityCore.jsx` → `identityData.js` + `systemIdentity.js` + `identity-core.css`
- `TechCore.jsx` → `techCoreData.js` + `system-module.css`
- `Experience.jsx` → `experienceData.js` + `system-module.css`
- `AiLab.jsx` → `aiLabData.js` + `system-module.css`
- `FutureBuilds.jsx` → `futureBuildsData.js` + `system-module.css`

## Where to edit

| Want to change | Edit this file |
|---|---|
| Name / role / version | `src/data/systemIdentity.js` |
| Boot module names / timings | `src/data/bootData.js` |
| Command Center cards | `src/data/commandModules.js` |
| Identity / education / hobbies | `src/data/identityData.js` |
| Tech Core | `src/data/techCoreData.js` |
| Experience | `src/data/experienceData.js` |
| AI Lab | `src/data/aiLabData.js` |
| Future Builds | `src/data/futureBuildsData.js` |
| Normal projects + hackathons | `src/data/projectData.js` |
| Boot appearance | `src/styles/boot.css` |
| Command Center appearance | `src/styles/command-center.css` |
| Identity appearance | `src/styles/identity-core.css` |
| Project database appearance | `src/components/Projects.css` |
| Shared module appearance | `src/styles/system-module.css` |
| Navigation logic | `src/components/CommandCenter.jsx` |
| Command Center content/layout | `src/components/CommandCenterHome.jsx` |

## Navigation rule

Command Center stays mounted while a module is open. The home view is hidden visually rather than destroyed. Returning uses one navigation state change. This keeps the navigation tree stable and avoids the previous blank-screen transition.

An ErrorBoundary is mounted at the application level so a future runtime exception is shown as a readable diagnostic screen instead of a silent blank page.

## Editing rule

For content changes, edit `src/data/*` first.  
For visual changes, edit the relevant CSS file.  
For navigation changes, edit `CommandCenter.jsx`.  
Avoid putting large content arrays directly inside JSX components.

## Deployment

GitHub `main` is the source of truth. Render builds the Vite app with the repository's configured build command and publishes the generated `dist` folder.
