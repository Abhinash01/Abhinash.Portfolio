export type ProjectCategory = 'Web Applications' | 'Systems' | 'Commercial'

export interface TechnologyStack {
  readonly frontend: readonly string[]
  readonly backend?: readonly string[]
  readonly database?: readonly string[]
  readonly apis?: readonly string[]
  readonly tooling: readonly string[]
}

export interface Project {
  readonly id: string
  readonly projectTitle: string
  readonly projectSlug: string
  readonly category: ProjectCategory
  readonly shortDescription: string
  readonly problemStatement: string
  readonly projectObjective: string
  readonly myRole: string
  readonly technologyStack: TechnologyStack
  readonly architectureOverview: string
  readonly implementedFeatures: readonly string[]
  readonly technicalChallenges: string
  readonly solutions: string
  readonly githubRepositoryUrl: string
  readonly liveDemoUrl: string
  readonly futureImprovements: readonly string[]
  readonly projectStatus: string
  readonly isFeatured: boolean
}
