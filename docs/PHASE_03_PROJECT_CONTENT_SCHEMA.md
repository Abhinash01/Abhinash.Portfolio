# PHASE 03 — PROJECT CONTENT SCHEMA & VERIFICATION AUDIT
**Project:** ABHINASH GUPTA — Ultimate 3D Developer Portfolio  
**Phase:** 03 (Information Architecture & Sitemap)  
**Deliverable:** 04 of 05  
**File Location:** `docs/PHASE_03_PROJECT_CONTENT_SCHEMA.md`  

---

## 1. Standard Case Study Schema Definition

Every project case study in the portfolio adheres to an identical **15-field standardized schema**. This structured schema guarantees consistency across `/projects/:slug` deep-dive pages, eliminates promotional ambiguity, and provides engineering evaluators with predictable technical depth.

### Standard Case Study Schema (16 Fields):
1. **`projectTitle`:** Formal display title of the application.
2. **`projectSlug`:** URL-safe kebab-case route identifier under `/projects/:slug`.
3. **`shortDescription`:** 1–2 sentence executive summary of utility and purpose.
4. **`problemStatement`:** The specific operational, user, or workflow friction addressed.
5. **`projectObjective`:** Concrete qualitative and technical benchmarks set before building.
6. **`myRole`:** Specific engineering responsibilities (e.g., Full-Stack Developer, UI Architect).
7. **`technologyStack`:** Categorized breakdown (Frontend, Backend, Database, APIs, Tooling), explicitly distinguishing verified technologies from those requiring confirmation.
8. **`architectureOverview`:** Data flow and component relationship narrative.
9. **`implementedFeatures`:** Explicit list of working, delivered, and verifiable functionality.
10. **`technicalChallenges`:** Documented engineering hurdles encountered during development.
11. **`solutions`:** Applied technical solutions, design patterns, or algorithms (stated as engineering choices, avoiding invented empirical metrics).
12. **`screenshotsAndMedia`:** Required mockups, device bezels, and diagram specifications.
13. **`githubRepositoryUrl`:** Verified GitHub repository link or explicit confirmation placeholder.
14. **`liveDemoUrl`:** Verified production deployment link or explicit confirmation placeholder.
15. **`futureImprovements`:** Realistic roadmap items planned for subsequent iterations.
16. **`projectStatus`:** Lifecycle classification (`[REQUIRES USER CONFIRMATION: e.g., Completed / Active Development / Client Delivered]`).

---

## 2. Project Candidate Schemas & Verification Audit

*(Note: Four portfolio project candidates — pending individual verification. Hospital Appointment Management System has been completely removed per user confirmation that it is not Abhinash's project. No fifth project is assumed until explicitly confirmed).*

---

### Candidate 01: WeatherSentinel

```json
{
  "projectTitle": "WeatherSentinel",
  "projectSlug": "weathersentinel",
  "shortDescription": "A responsive atmospheric intelligence dashboard providing real-time meteorological observations, multi-day temperature forecasts, and air quality indices with instant search debouncing.",
  "problemStatement": "Mainstream consumer weather applications are excessively cluttered with commercial advertisements, slow-loading media, and fragmented layouts that obscure primary temperature, wind, and precipitation metrics.",
  "projectObjective": "Build a lightweight, clean meteorological dashboard with fast city search, rate-limited third-party API consumption, and an accessible high-contrast light interface.",
  "myRole": "Full-Stack Developer & UI Architect",
  "technologyStack": {
    "frontend": ["React", "JavaScript [TypeScript: REQUIRES USER CONFIRMATION]", "Tailwind CSS", "Recharts / Charting library", "Lucide Icons"],
    "backend": ["Node.js", "Express [REQUIRES USER CONFIRMATION: Proxy server vs direct client fetch]"],
    "apis": ["OpenWeather Current Weather & 5-Day Forecast API", "OpenWeather Air Pollution API"],
    "tooling": ["Vite", "Git"]
  },
  "architectureOverview": "Client-side React application interfacing with meteorological endpoints, normalizing incoming JSON payloads, and managing recent query responses in memory to mitigate redundant network requests.",
  "implementedFeatures": [
    "Real-time temperature, humidity, atmospheric pressure, and wind speed readouts.",
    "5-day / 3-hour forecast trends visualized with responsive trend charts.",
    "Air Quality Index (AQI) metric display with health hazard classification tiers.",
    "Search input with 350ms debouncing to minimize redundant keystroke API calls.",
    "In-memory client-side response caching for previously queried cities.",
    "Light-mode visual layout with dynamic weather condition icon mapping."
  ],
  "technicalChallenges": "Third-party weather API rate limits can be exhausted during rapid user keystrokes in the search bar, risking 429 Too Many Requests errors.",
  "solutions": "Implemented a custom debouncing pattern coupled with an in-memory Map cache keyed by normalized city names to curb unnecessary API requests during active search sessions.",
  "screenshotsAndMedia": [
    "Desktop widescreen view of main dashboard telemetry.",
    "Mobile responsive view of 5-day forecast cards.",
    "Interactive temperature trend chart view."
  ],
  "githubRepositoryUrl": "[REQUIRES USER CONFIRMATION: e.g., https://github.com/Abhinash01/WeatherSentinel]",
  "liveDemoUrl": "[REQUIRES USER CONFIRMATION: Specify live deployment URL (e.g., Vercel) or local showcase]",
  "futureImprovements": [
    "Interactive precipitation radar tile overlay using Leaflet / Mapbox GL.",
    "Geolocation-based automated weather detection on initial load.",
    "Unit toggle between Metric (°C) and Imperial (°F) persisted via localStorage."
  ],
  "projectStatus": "[REQUIRES USER CONFIRMATION: e.g., Completed / Active Development / Local Showcase]"
}
```

---

### Candidate 02: CareerTrack

```json
{
  "projectTitle": "CareerTrack",
  "projectSlug": "careertrack",
  "shortDescription": "A centralized full-stack job application tracker enabling candidates to manage recruitment pipelines, interview schedules, notes, and salary offers through a structured multi-stage workflow.",
  "problemStatement": "Job seekers frequently manage dozens of simultaneous applications across disparate job boards, leading to lost recruiter communications, missed follow-up deadlines, and fragmented tracking.",
  "projectObjective": "Develop a secure web application providing structured pipeline tracking, full CRUD capability for job entries, and token-based user authentication.",
  "myRole": "Full-Stack Developer & Database Modeler",
  "technologyStack": {
    "frontend": ["React", "JavaScript [TypeScript: REQUIRES USER CONFIRMATION]", "Tailwind CSS", "Lucide Icons"],
    "backend": ["Node.js", "Express", "RESTful API Architecture"],
    "database": ["[REQUIRES USER CONFIRMATION: Verify database engine — PostgreSQL vs MongoDB]"],
    "auth": ["[REQUIRES USER CONFIRMATION: Verify auth implementation — JWT / Sessions / bcrypt]"],
    "tooling": ["Vite", "Git"]
  },
  "architectureOverview": "React frontend communicates with an Express REST API authenticated via session/token headers. Backend routes process queries against an application database linking user IDs to their private application logs.",
  "implementedFeatures": [
    "Multi-column application pipeline stages (Applied, Screening, Interviewing, Offer, Rejected).",
    "User registration and login interface with credential verification.",
    "Full CRUD modal interfaces for creating, updating, and archiving job records.",
    "Client-side search and filtering by company name, job role, and application status.",
    "Protected API routes validating active user sessions."
  ],
  "technicalChallenges": "Maintaining state synchronization between the client-side pipeline UI and backend database updates without unnecessary full-page reloads.",
  "solutions": "Implemented an optimistic UI update pattern using React state, applying immediate local transitions with rollback handling and error notification if the backend request fails.",
  "screenshotsAndMedia": [
    "Pipeline stage overview board.",
    "Job detail modal with interview notes and status history.",
    "Authentication login screen with validation states."
  ],
  "githubRepositoryUrl": "[REQUIRES USER CONFIRMATION: e.g., https://github.com/Abhinash01/CareerTrack]",
  "liveDemoUrl": "[REQUIRES USER CONFIRMATION: Specify live deployment URL or if running in local development]",
  "futureImprovements": [
    "Drag-and-drop mechanics between pipeline stage columns.",
    "Automated email follow-up reminder alerts based on custom timeline rules.",
    "CSV / JSON export functionality for external application auditing."
  ],
  "projectStatus": "[REQUIRES USER CONFIRMATION: e.g., Completed / Active Development / Local Showcase]"
}
```

---

### Candidate 03: Maa Kamakhya Hydraulic Website

```json
{
  "projectTitle": "Maa Kamakhya Hydraulic Website",
  "projectSlug": "maa-kamakhya-hydraulic",
  "shortDescription": "A commercial web platform for an industrial hydraulic equipment supplier, featuring product specification catalogs, industrial service capabilities, and quotation inquiry workflows.",
  "problemStatement": "Industrial equipment suppliers frequently lack a modern, mobile-responsive web presence, making it difficult for procurement officers to evaluate technical machinery specifications or submit formal Requests for Quotation (RFQs).",
  "projectObjective": "Build a credible, high-trust corporate digital presence organized around clean industrial typography, structured equipment catalogs, and an accessible quotation inquiry workflow.",
  "myRole": "Frontend Developer & UI Designer",
  "technologyStack": {
    "frontend": ["React", "Tailwind CSS / Vanilla CSS", "Lucide Icons"],
    "tooling": ["Vite", "Git"]
  },
  "architectureOverview": "Client-rendered responsive application optimized for edge static hosting. Product catalog items and technical specification matrices are organized as modular data models for rapid browsing and filtering.",
  "implementedFeatures": [
    "Filterable product catalog for industrial machinery, valves, cylinders, and hydraulic power packs.",
    "Tabular technical specification sheets formatted for readability on desktop and mobile screens.",
    "Company overview, manufacturing infrastructure, and service capability sections.",
    "Interactive Request for Quotation (RFQ) inquiry form with client-side field validation.",
    "Fully responsive layout verified across mobile, tablet, and desktop viewports."
  ],
  "technicalChallenges": "Dense tabular engineering specifications (e.g., cylinder bore, stroke, pressure ratings) overflowed and broke visual hierarchy on narrow mobile viewports.",
  "solutions": "Engineered responsive data cards with horizontal scroll indicators, preserving tabular clarity without sacrificing mobile viewport readability.",
  "screenshotsAndMedia": [
    "Desktop homepage hero showcasing industrial machinery.",
    "Product catalog with technical parameter table.",
    "RFQ inquiry form with input validation states."
  ],
  "githubRepositoryUrl": "[REQUIRES USER CONFIRMATION: Specify if public repo or private client repo]",
  "liveDemoUrl": "[REQUIRES USER CONFIRMATION: Specify live production domain or staging URL]",
  "futureImprovements": [
    "Downloadable PDF product specification datasheets dynamically linked per machine.",
    "Interactive cylinder bore and stroke pressure calculator."
  ],
  "projectStatus": "[REQUIRES USER CONFIRMATION: e.g., Client Delivered / In Development]"
}
```

---

### Candidate 04: Jay Hanuman Astro Research Centre

```json
{
  "projectTitle": "Jay Hanuman Astro Research Centre",
  "projectSlug": "jay-hanuman-astro",
  "shortDescription": "A research and consultation portal dedicated to Vedic astrology research publications, practitioner background, and consultation appointment scheduling.",
  "problemStatement": "Many traditional spiritual and astrology research websites suffer from visually cluttered layouts, broken contact forms, and poor mobile readability, undermining institutional credibility.",
  "projectObjective": "Create a dignified, calm, and readable aesthetic matching the reflective nature of the center, paired with an intuitive consultation booking workflow and research archive.",
  "myRole": "Web Developer & UI Designer",
  "technologyStack": {
    "frontend": ["React", "Tailwind CSS / Vanilla CSS", "JavaScript"],
    "tooling": ["Vite", "Git"]
  },
  "architectureOverview": "Single-page responsive application structuring research articles, astrological transit commentaries, practitioner credentials, and consultation booking into an editorial reading format.",
  "implementedFeatures": [
    "Editorial publication layout for astrological research papers and planetary transit insights.",
    "Consultation appointment inquiry form with preferred date/time selection.",
    "Visual design with cultural accents (warm amber and navy on crisp white canvas).",
    "Mobile-first responsive design ensuring seamless reading on handheld devices.",
    "Structured semantic HTML5 landmarks and accessible form controls."
  ],
  "technicalChallenges": "Balancing authentic cultural motifs with a clean, modern, minimalist aesthetic without slipping into visual clutter.",
  "solutions": "Curated a restrained palette of warm amber, navy, and gold accents over a spacious white canvas, utilizing refined typography with generous line-heights.",
  "screenshotsAndMedia": [
    "Editorial landing hero with research introduction.",
    "Consultation booking intake form.",
    "Mobile reading layout of research publications."
  ],
  "githubRepositoryUrl": "[REQUIRES USER CONFIRMATION: Specify if public or private repo]",
  "liveDemoUrl": "[REQUIRES USER CONFIRMATION: Specify live production or staging domain]",
  "futureImprovements": [
    "Integrated real-time calendar synchronizing available consultation slots.",
    "Searchable research paper archive with tag-based topic filtering."
  ],
  "projectStatus": "[REQUIRES USER CONFIRMATION: e.g., Completed / Live Web Portal / In Development]"
}
```

---

## 3. Comprehensive Missing Information Audit Matrix

The following comprehensive matrix catalogs all items requiring **explicit user confirmation** prior to implementation:

| Project Candidate | Category | Missing / Unconfirmed Item | Action Required |
| :--- | :--- | :--- | :--- |
| **WeatherSentinel** | Repository | GitHub URL (`https://github.com/Abhinash01/...`) | Confirm exact repository URL and visibility (Public / Private). |
| **WeatherSentinel** | Deployment | Live Demo URL | Confirm if hosted live (e.g., Vercel) or local showcase only. |
| **WeatherSentinel** | Tech Stack | Language & Proxy Implementation | Confirm whether built in TypeScript or JavaScript; confirm Express proxy vs client fetch. |
| **WeatherSentinel** | Lifecycle | Project Status | Confirm exact classification (`Completed` / `In Active Development` / `Local Showcase`). |
| **CareerTrack** | Repository | GitHub URL (`https://github.com/Abhinash01/...`) | Confirm exact repository URL and visibility. |
| **CareerTrack** | Deployment | Live Demo URL | Confirm live hosting URL or development state. |
| **CareerTrack** | Tech Stack | Database & Auth Engine | Confirm specific database engine (PostgreSQL vs MongoDB) and auth package (JWT/Sessions). |
| **CareerTrack** | Lifecycle | Project Status | Confirm exact classification (`Completed` / `In Active Development` / `Local Showcase`). |
| **Maa Kamakhya Hydraulic** | Repository | Client Code Visibility | Confirm if repository is public, private, or client proprietary. |
| **Maa Kamakhya Hydraulic** | Deployment | Production Domain | Confirm client's live production web domain. |
| **Maa Kamakhya Hydraulic** | Lifecycle | Project Status | Confirm status (`Client Delivered` / `In Development`). |
| **Jay Hanuman Astro** | Repository | Repository Visibility | Confirm if repository is public, private, or client proprietary. |
| **Jay Hanuman Astro** | Deployment | Production Domain | Confirm live production domain or staging URL. |
| **Jay Hanuman Astro** | Lifecycle | Project Status | Confirm status (`Completed` / `Live Web Portal` / `In Development`). |
