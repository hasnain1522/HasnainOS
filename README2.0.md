# HASNAIN.OS — README 2.0

## Purpose
Hasnain.OS is a React/Vite personal portfolio presented as a lightweight personal operating system.

The repository is deliberately modular: content, components, navigation and styling are separated so future edits can be made safely without rewriting the whole portfolio.

## Architecture

```
src/
├── App.jsx
├── main.jsx
├── audio/
│   └── AudioEngine.js
├── components/
│   ├── BootScreen.jsx
│   ├── BootModule.jsx
│   ├── CommandCenter.jsx
│   ├── CommandCenterHome.jsx
│   ├── ErrorBoundary.jsx
│   └── modules/
│       ├── IdentityCore.jsx
│       ├── Projects.jsx
│       ├── TechCore.jsx
│       ├── Experience.jsx
│       ├── AiLab.jsx
│       └── FutureBuilds.jsx
├── data/
│   ├── systemIdentity.js
│   ├── bootData.js
│   ├── commandModules.js
│   ├── identityData.js
│   ├── techCoreData.js
│   ├── experienceData.js
│   ├── aiLabData.js
│   ├── futureBuildsData.js
│   └── projectData.js
└── styles/
    ├── global.css
    ├── boot.css
    ├── command-center.css
    ├── system-module.css
    ├── identity-core.css
    ├── projects.css
    ├── tech-core.css
    ├── experience.css
    ├── ai-lab.css
    └── future-builds.css
```

## Module rule

All six Command Center modules live in one place:

`src/components/modules/`

| Module | Component | Data | CSS |
|---|---|---|---|
| 01 | `modules/IdentityCore.jsx` | `data/identityData.js` + `data/systemIdentity.js` | `styles/identity-core.css` |
| 02 | `modules/Projects.jsx` | `data/projectData.js` | `styles/projects.css` |
| 03 | `modules/TechCore.jsx` | `data/techCoreData.js` | `styles/tech-core.css` + shared module CSS |
| 04 | `modules/Experience.jsx` | `data/experienceData.js` | `styles/experience.css` + shared module CSS |
| 05 | `modules/AiLab.jsx` | `data/aiLabData.js` | `styles/ai-lab.css` + shared module CSS |
| 06 | `modules/FutureBuilds.jsx` | `data/futureBuildsData.js` | `styles/future-builds.css` + shared module CSS |

`system-module.css` contains only reusable layout primitives shared by modules 03–06. The dedicated CSS files contain module-specific styling.

## Connection map

- `main.jsx` → `App.jsx`
- `App.jsx` → `BootScreen.jsx` OR `CommandCenter.jsx`
- `BootScreen.jsx` → `BootModule.jsx` + boot/system data + `AudioEngine.js`
- `CommandCenter.jsx` → `CommandCenterHome.jsx` + six components in `components/modules/`
- `CommandCenterHome.jsx` → `commandModules.js` + `systemIdentity.js`
- `modules/IdentityCore.jsx` → identity data + `identity-core.css`
- `modules/Projects.jsx` → `projectData.js` + `projects.css`
- `modules/TechCore.jsx` → `techCoreData.js` + `tech-core.css` + `system-module.css`
- `modules/Experience.jsx` → `experienceData.js` + `experience.css` + `system-module.css`
- `modules/AiLab.jsx` → `aiLabData.js` + `ai-lab.css` + `system-module.css`
- `modules/FutureBuilds.jsx` → `futureBuildsData.js` + `future-builds.css` + `system-module.css`

## Where to edit

| Want to change | Edit |
|---|---|
| Name / role / version | `src/data/systemIdentity.js` |
| Boot labels / timing | `src/data/bootData.js` |
| Command Center cards | `src/data/commandModules.js` |
| Identity / education / hobbies | `src/data/identityData.js` |
| Tech Core content | `src/data/techCoreData.js` |
| Experience content | `src/data/experienceData.js` |
| AI Lab content | `src/data/aiLabData.js` |
| Future Builds content | `src/data/futureBuildsData.js` |
| Projects + hackathons | `src/data/projectData.js` |
| Boot appearance | `src/styles/boot.css` |
| Command Center appearance | `src/styles/command-center.css` |
| Identity appearance | `src/styles/identity-core.css` |
| Projects appearance | `src/styles/projects.css` |
| Tech Core appearance | `src/styles/tech-core.css` |
| Experience appearance | `src/styles/experience.css` |
| AI Lab appearance | `src/styles/ai-lab.css` |
| Future Builds appearance | `src/styles/future-builds.css` |
| Shared module layout | `src/styles/system-module.css` |
| Navigation/state | `src/components/CommandCenter.jsx` |

## Safe editing rule

**Content change:** edit `src/data/*`.

**Visual change:** edit the CSS file belonging to that module.

**Navigation change:** edit `src/components/CommandCenter.jsx`.

**UI structure change:** edit only the relevant component in `src/components/modules/`.

Avoid putting large content arrays directly inside JSX components.

## Navigation

Command Center remains mounted while a module is open. The home view is hidden, while the selected module is rendered inside the same Command Center shell. The module's `onBack` callback returns to the home view without a full page navigation.

## Error handling

`ErrorBoundary.jsx` is mounted at the application level so a React runtime error can be shown as a readable diagnostic screen instead of becoming a silent blank page.

## Deployment

GitHub `main` is the source of truth. Render builds the Vite application with the configured build command and publishes `dist`.
