import type { Project, ProjectCategory } from '../types/project.types'

export const PROJECTS: readonly Project[] = [
  {
    id: 'weather-sentinel',
    projectTitle: 'WeatherSentinel',
    projectSlug: 'weathersentinel',
    category: 'Web Applications',
    shortDescription:
      'A responsive atmospheric intelligence dashboard providing real-time meteorological observations, multi-day temperature forecasts, and air quality indices with instant search debouncing.',
    problemStatement:
      'Mainstream consumer weather applications are excessively cluttered with commercial advertisements, slow-loading media, and fragmented layouts that obscure primary temperature, wind, and precipitation metrics.',
    projectObjective:
      'Build a lightweight, clean meteorological dashboard with fast city search, rate-limited third-party API consumption, and an accessible high-contrast light interface.',
    myRole: 'Full-Stack Developer & UI Architect',
    technologyStack: {
      frontend: ['React', 'Tailwind CSS', 'Recharts', 'Lucide Icons'],
      backend: ['Node.js', 'Express [REQUIRES USER CONFIRMATION]'],
      apis: ['OpenWeather Current Weather API', 'OpenWeather 5-Day Forecast API', 'OpenWeather Air Pollution API'],
      tooling: ['Vite', 'Git'],
    },
    architectureOverview:
      'Client-side React application interfacing with meteorological endpoints, normalizing incoming JSON payloads, and managing recent query responses in memory to mitigate redundant network requests.',
    implementedFeatures: [
      'Real-time temperature, humidity, atmospheric pressure, and wind speed readouts.',
      '5-day / 3-hour forecast trends visualized with responsive trend charts.',
      'Air Quality Index (AQI) metric display with health hazard classification tiers.',
      'Search input with 350ms debouncing to minimize redundant keystroke API calls.',
      'In-memory client-side response caching for previously queried cities.',
      'Light-mode visual layout with dynamic weather condition icon mapping.',
    ],
    technicalChallenges:
      'Third-party weather API rate limits can be exhausted during rapid user keystrokes in the search bar, risking 429 Too Many Requests errors.',
    solutions:
      'Implemented a custom debouncing pattern coupled with an in-memory Map cache keyed by normalized city names to curb unnecessary API requests during active search sessions.',
    githubRepositoryUrl: '[REQUIRES USER CONFIRMATION: e.g., https://github.com/Abhinash01/WeatherSentinel]',
    liveDemoUrl: '[REQUIRES USER CONFIRMATION: Specify live deployment URL]',
    futureImprovements: [
      'Interactive precipitation radar tile overlay using Leaflet / Mapbox GL.',
      'Geolocation-based automated weather detection on initial load.',
      'Unit toggle between Metric (°C) and Imperial (°F) persisted via localStorage.',
    ],
    projectStatus: '[REQUIRES USER CONFIRMATION: e.g., Completed / Active Development / Local Showcase]',
    isFeatured: true,
  },
  {
    id: 'career-track',
    projectTitle: 'CareerTrack',
    projectSlug: 'careertrack',
    category: 'Systems',
    shortDescription:
      'A centralized full-stack job application tracker enabling candidates to manage recruitment pipelines, interview schedules, notes, and salary offers through a structured multi-stage workflow.',
    problemStatement:
      'Job seekers frequently manage dozens of simultaneous applications across disparate job boards, leading to lost recruiter communications, missed follow-up deadlines, and fragmented tracking.',
    projectObjective:
      'Develop a secure web application providing structured pipeline tracking, full CRUD capability for job entries, and token-based user authentication.',
    myRole: 'Full-Stack Developer & Database Modeler',
    technologyStack: {
      frontend: ['React', 'Tailwind CSS', 'Lucide Icons'],
      backend: ['Node.js', 'Express', 'RESTful API Architecture'],
      database: ['[REQUIRES USER CONFIRMATION: Verify database engine — PostgreSQL vs MongoDB]'],
      tooling: ['Vite', 'Git'],
    },
    architectureOverview:
      'React frontend communicates with an Express REST API authenticated via session/token headers. Backend routes process queries against an application database linking user IDs to their private application logs.',
    implementedFeatures: [
      'Multi-column application pipeline stages (Applied, Screening, Interviewing, Offer, Rejected).',
      'User registration and login interface with credential verification.',
      'Full CRUD modal interfaces for creating, updating, and archiving job records.',
      'Client-side search and filtering by company name, job role, and application status.',
      'Protected API routes validating active user sessions.',
    ],
    technicalChallenges:
      'Maintaining state synchronization between the client-side pipeline UI and backend database updates without unnecessary full-page reloads.',
    solutions:
      'Implemented an optimistic UI update pattern using React state, applying immediate local transitions with rollback handling and error notification if the backend request fails.',
    githubRepositoryUrl: '[REQUIRES USER CONFIRMATION: e.g., https://github.com/Abhinash01/CareerTrack]',
    liveDemoUrl: '[REQUIRES USER CONFIRMATION: Specify live deployment URL]',
    futureImprovements: [
      'Drag-and-drop mechanics between pipeline stage columns.',
      'Automated email follow-up reminder alerts based on custom timeline rules.',
      'CSV / JSON export functionality for external application auditing.',
    ],
    projectStatus: '[REQUIRES USER CONFIRMATION: e.g., Completed / Active Development / Local Showcase]',
    isFeatured: true,
  },
  {
    id: 'maa-kamakhya-hydraulic',
    projectTitle: 'Maa Kamakhya Hydraulic Website',
    projectSlug: 'maa-kamakhya-hydraulic',
    category: 'Commercial',
    shortDescription:
      'A commercial web platform for an industrial hydraulic equipment supplier, featuring product specification catalogs, industrial service capabilities, and quotation inquiry workflows.',
    problemStatement:
      'Industrial equipment suppliers frequently lack a modern, mobile-responsive web presence, making it difficult for procurement officers to evaluate technical machinery specifications or submit formal Requests for Quotation (RFQs).',
    projectObjective:
      'Build a credible, high-trust corporate digital presence organized around clean industrial typography, structured equipment catalogs, and an accessible quotation inquiry workflow.',
    myRole: 'Frontend Developer & UI Designer',
    technologyStack: {
      frontend: ['React', 'Tailwind CSS', 'Lucide Icons'],
      tooling: ['Vite', 'Git'],
    },
    architectureOverview:
      'Client-rendered responsive application optimized for edge static hosting. Product catalog items and technical specification matrices are organized as modular data models for rapid browsing and filtering.',
    implementedFeatures: [
      'Filterable product catalog for industrial machinery, valves, cylinders, and hydraulic power packs.',
      'Tabular technical specification sheets formatted for readability on desktop and mobile screens.',
      'Company overview, manufacturing infrastructure, and service capability sections.',
      'Interactive Request for Quotation (RFQ) inquiry form with client-side field validation.',
      'Fully responsive layout verified across mobile, tablet, and desktop viewports.',
    ],
    technicalChallenges:
      'Dense tabular engineering specifications overflowed and broke visual hierarchy on narrow mobile viewports.',
    solutions:
      'Engineered responsive data cards with horizontal scroll indicators, preserving tabular clarity without sacrificing mobile viewport readability.',
    githubRepositoryUrl: '[REQUIRES USER CONFIRMATION: Specify if public repo or private client repo]',
    liveDemoUrl: '[REQUIRES USER CONFIRMATION: Specify live production domain or staging URL]',
    futureImprovements: [
      'Downloadable PDF product specification datasheets dynamically linked per machine.',
      'Interactive cylinder bore and stroke pressure calculator.',
    ],
    projectStatus: '[REQUIRES USER CONFIRMATION: e.g., Client Delivered / In Development]',
    isFeatured: true,
  },
  {
    id: 'jay-hanuman-astro',
    projectTitle: 'Jay Hanuman Astro Research Centre',
    projectSlug: 'jay-hanuman-astro',
    category: 'Commercial',
    shortDescription:
      'A research and consultation portal dedicated to Vedic astrology research publications, practitioner background, and consultation appointment scheduling.',
    problemStatement:
      'Traditional spiritual and astrology research websites frequently suffer from visually cluttered layouts, broken contact forms, and poor mobile readability, undermining institutional credibility.',
    projectObjective:
      'Create a dignified, calm, and readable aesthetic matching the reflective nature of the center, paired with an intuitive consultation booking workflow and research archive.',
    myRole: 'Web Developer & UI Designer',
    technologyStack: {
      frontend: ['React', 'Tailwind CSS', 'JavaScript'],
      tooling: ['Vite', 'Git'],
    },
    architectureOverview:
      'Single-page responsive application structuring research articles, astrological transit commentaries, practitioner credentials, and consultation booking into an editorial reading format.',
    implementedFeatures: [
      'Editorial publication layout for astrological research papers and planetary transit insights.',
      'Consultation appointment inquiry form with preferred date/time selection.',
      'Visual design with cultural accents (warm amber and navy on crisp white canvas).',
      'Mobile-first responsive design ensuring seamless reading on handheld devices.',
      'Structured semantic HTML5 landmarks and accessible form controls.',
    ],
    technicalChallenges:
      'Balancing authentic cultural motifs with a clean, modern, minimalist aesthetic without slipping into visual clutter.',
    solutions:
      'Curated a restrained palette of warm amber, navy, and gold accents over a spacious white canvas, utilizing refined typography with generous line-heights.',
    githubRepositoryUrl: '[REQUIRES USER CONFIRMATION: Specify if public or private repo]',
    liveDemoUrl: '[REQUIRES USER CONFIRMATION: Specify live production or staging domain]',
    futureImprovements: [
      'Integrated real-time calendar synchronizing available consultation slots.',
      'Searchable research paper archive with tag-based topic filtering.',
    ],
    projectStatus: '[REQUIRES USER CONFIRMATION: e.g., Completed / Live Web Portal / In Development]',
    isFeatured: false,
  },
]

export function getAllProjects(): readonly Project[] {
  return PROJECTS
}

export function getFeaturedProjects(): readonly Project[] {
  return PROJECTS.filter((p) => p.isFeatured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, '')
  return PROJECTS.find(
    (p) =>
      p.projectSlug.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
      p.id.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized,
  )
}

export function getProjectsByCategory(category: ProjectCategory): readonly Project[] {
  return PROJECTS.filter((p) => p.category === category)
}

export function getAllProjectCategories(): readonly ProjectCategory[] {
  return Array.from(new Set(PROJECTS.map((p) => p.category)))
}

export function getAdjacentProjects(slug: string): {
  readonly prev: Project | undefined
  readonly next: Project | undefined
} {
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, '')
  const index = PROJECTS.findIndex(
    (p) =>
      p.projectSlug.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
      p.id.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized,
  )

  if (index === -1) {
    return { prev: undefined, next: undefined }
  }

  const prev = index > 0 ? PROJECTS[index - 1] : undefined
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : undefined

  return { prev, next }
}
