import type { IconsType } from 'astro-pure/types'

/** Hero row under the author name (plain label vs external link). */
export type HomeHeroLabel =
  | { kind: 'text'; title: string; icon: IconsType }
  | { kind: 'link'; title: string; icon: IconsType; href: string; target?: string }

export type HomeEducationCard = {
  as?: 'a'
  heading: string
  subheading: string
  date: string
  href?: string
}

export type HomeProjectTeaser = {
  href: string
  heading: string
  subheading: string
  imagePath: string
}

export type HomeCertificationCard = {
  as?: 'a'
  heading: string
  subheading: string
  date: string
  href?: string
}

export type HomeSkillGroup = {
  title: string
  skills: string[]
}

/**
 * Optional section visibility. Same convention as About: omit or any value except
 * `false` shows the block; `enabled: false` hides it.
 */
type HomeSectionToggle = { enabled?: boolean }

export type HomeEducationSection = HomeSectionToggle & {
  sectionTitle: string
  cards: HomeEducationCard[]
}

export type HomeWebsiteListSection = HomeSectionToggle & {
  sectionTitle: string
  items: HomeProjectTeaser[]
}

export type HomeCertificationsSection = HomeSectionToggle & {
  sectionTitle: string
  card: HomeCertificationCard
}

export type HomeSkillsSection = HomeSectionToggle & {
  sectionTitle: string
  groups: HomeSkillGroup[]
}

export type HomePageData = {
  pageMetaTitle: string
  highlightColor: string
  heroLabels: HomeHeroLabel[]
  posts: {
    sectionTitle: string
    maxPosts: number
    moreButton: {
      title: string
      href: string
      variant?: 'button' | 'pill' | 'back' | 'ahead'
    }
  }
  education: HomeEducationSection
  websiteList: HomeWebsiteListSection
  certifications: HomeCertificationsSection
  skills: HomeSkillsSection
}

export const homePageData: HomePageData = {
  pageMetaTitle: 'Home',
  highlightColor: '#659EB9',

  heroLabels: [
    { kind: 'text' as const, title: 'Universe', icon: 'location' as const },
    {
      kind: 'link' as const,
      title: 'GitHub',
      icon: 'github' as const,
      href: 'https://github.com/kalifun',
      target: '_blank'
    }
  ] satisfies HomeHeroLabel[],

  posts: {
    sectionTitle: 'Posts',
    maxPosts: 10,
    moreButton: {
      title: 'More posts',
      href: '/blog' as const,
      variant: 'ahead' as const
    }
  },

  education: {
    enabled: false,
    sectionTitle: 'Education',
    cards: [
      {
        as: 'a' as const,
        heading: 'Lorem ipsum',
        subheading: 'Lorem ipsum dolor sit amet, vidit suscipit at mei.',
        date: 'August 2021 - July 2025',
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ] satisfies HomeEducationCard[]
  },

  websiteList: {
    enabled: false,
    sectionTitle: 'Website List',
    items: [
      {
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        heading: 'Lorem ipsum',
        subheading: 'Do not go gentle into that good night',
        imagePath: '/src/assets/projects/1.avif'
      },
      {
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        heading: 'Lorem ipsum',
        subheading: 'Old age burn and rave at close of day',
        imagePath: '/src/assets/projects/2.avif'
      },
      {
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        heading: 'Lorem ipsum',
        subheading: 'Rage, rage against the dying of the light',
        imagePath: '/src/assets/projects/3.avif'
      },
      {
        href: '/projects',
        heading: 'More projects',
        subheading: 'Check out more projects',
        imagePath: '/src/assets/projects/4.avif'
      }
    ] satisfies HomeProjectTeaser[]
  },

  certifications: {
    enabled: false,
    sectionTitle: 'Certifications',
    card: {
      as: 'a' as const,
      heading: 'Lorem ipsum',
      subheading:
        'Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio possit voluptatum. Dicat ceteros cu vim. Impetus fuisset ullamcorper pri cu, his posse iisque ad, aliquam honestatis usu id.',
      date: 'July 2024',
      href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    } satisfies HomeCertificationCard
  },

  skills: {
    sectionTitle: 'Skills',
    groups: [
      { title: 'Languages', skills: ['Go', 'Python', 'Rust', 'JavaScript'] },
      { title: 'Art', skills: ['Missing','Unrestrained','Missing','Unrestrained','Missing','Unrestrained'] },
      // { title: 'Frontend', skills: ['TypeScript', 'Vite', 'Webpack', 'Astro'] },
      // { title: 'Backend', skills: ['Vercel', 'Waline'] }
    ] satisfies HomeSkillGroup[]
  }
}
