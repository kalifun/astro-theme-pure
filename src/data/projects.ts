import type { ImageMetadata } from 'astro'
import type { IconsType } from 'astro-pure/types'

import alipay from '@/assets/alipay-qrcode.jpg'
import wechat from '@/assets/wechat-qrcode.jpg'

export type ProjectsPageHeading = { depth: 2; slug: string; text: string }

/** @deprecated Prefer `buildProjectsHeadings` so the TOC matches visible sections. */
export const projectsPageHeadings: ProjectsPageHeading[] = [
  { depth: 2, slug: 'programs', text: 'Programs' },
  { depth: 2, slug: 'learnings', text: 'Learnings' },
  { depth: 2, slug: 'others', text: 'Others' },
  { depth: 2, slug: 'gpg-signature', text: 'GPG Signature' },
  { depth: 2, slug: 'sponsorship', text: 'Sponsorship' }
]

export type ProjectLink = { type: string; href: string }

export type ProjectEntry = {
  image?: string
  name: string
  description: string
  links: ProjectLink[]
}

export type SponsorEntry = {
  name: string
  platform?: string
  amount: number
  date: string
}

export type SponsorshipMethodEntry = {
  name: string
  icon: IconsType
  image: ImageMetadata
}

export type ProjectsArchivedBlock = {
  collapseTitle: string
  projects: ProjectEntry[]
}

/** Programs + archived fold. `enabled: false` hides the whole block (and its TOC entry). */
export type ProjectsProgramsSection = {
  enabled?: boolean
  title: string
  projects: ProjectEntry[]
  archived: ProjectsArchivedBlock
}

/** Learnings / Others: one list. `enabled: false` hides the whole block (and its TOC entry). */
export type ProjectsContentSection = {
  enabled?: boolean
  title: string
  projects: ProjectEntry[]
}

/** Top pill link above the chart. `enabled: false` hides it (not in TOC). */
export type ProjectsHeroSection = {
  enabled?: boolean
  href: string
  label: string
}

/** GPG block (TOC + page). Omit `enabled` or use `true` to show; `false` hides entirely. */
export type ProjectsGpgSection = {
  enabled?: boolean
  title: string
  descriptionBeforeKey: string
  keyDisplay: string
  descriptionAfterKey: string
  keyButtonTitle: string
  keyButtonHref: string
}

/** Whole sponsorship region (TOC + page block). Omit `enabled` or set `true` to show. */
export type ProjectsSponsorshipSection = {
  enabled?: boolean
  title: string
  chineseMethodsHtml: string
  methods: SponsorshipMethodEntry[]
  globalMethodsHtml: string
  emailNoteBefore: string
  emailBase64: string
  emailNoteAfter: string
  sponsorsIntro: string
  sponsorsProgressMax: number
  sponsors: SponsorEntry[]
}

export const projectsPageData = {
  pageTitle: 'Projects',

  hero: {
    /** Optional. `enabled: false` hides the hero chip. Omit = show. */
    enabled: false,
    href: 'https://github.com/kalifun',
    label: 'kalifun'
  } satisfies ProjectsHeroSection,

  githubChart: {
    /** Full image URL for `astro:assets` Image (remote). */
    imageUrl: 'https://ghchart.rshah.org/659eb9/kalifun',
    imageAlt: 'github activities'
  },

  intro: {
    githubActivitiesLabel: 'Github Activities:',
    bodyHtml:
      'It seems that I left something behind, yet left nothing behind.',
    sponsorshipCta: { title: 'Checkout sponsorship', href: '#sponsorship' as const }
  },

  sections: {
    programs: {
      /** Optional. `enabled: false` hides Programs + archived (and TOC). Omit = show. */
      title: 'Programs',
      projects: [
        {
          name: '🎨 dotfiles-nix',
          description: 'My dotfiles for NixOS',
          links: [
            { type: 'github', href: 'https://github.com/kalifun/dotfiles-nix' },
            // { type: 'site', href: 'https://astro-pure.js.org/' },
            // { type: 'doc', href: 'https://astro-pure.js.org/docs/list' },
            // { type: 'release', href: 'https://www.npmjs.com/package/astro-pure' }
          ]
        },
        // {
        //   name: '💄 PKU Art',
        //   description: 'A script to beautify pku course website',
        //   links: [
        //     { type: 'github', href: 'https://github.com/zhuozhiyongde/pku-art' },
        //     { type: 'site', href: 'https://github.com/zhuozhiyongde/pku-art' },
        //     { type: 'doc', href: 'https://docs.arthals.ink/docs/pku-art' }
        //   ]
        // }
      ] satisfies ProjectEntry[],
      archived: {
        collapseTitle: 'Some old projects',
        projects: [
          {
            name: '🧩 lazyswitch-vscode',
            description: 'Generate Go code through JSON/YAML',
            links: [
              { type: 'github', href: 'https://github.com/kalifun/lazyswitch-vscode' },
              {
                type: 'release',
                href: 'https://github.com/kalifun/lazyswitch-vscode/releases'
              }
            ]
          },
          {
            name: '🧩 vscode proto3 tools',
            description:
              'proto3 language service',
            links: [{ type: 'github', href: 'https://github.com/kalifun/vscode-proto3-tools' }]
          }
        ] satisfies ProjectEntry[]
      }
    } satisfies ProjectsProgramsSection,
    learnings: {
      /** Optional. `enabled: false` hides Learnings (and TOC). Omit = show. */
      title: 'Learnings',
      projects: [
        {
          name: 'R Learning',
          description: 'Some notes and code about learning R language',
          links: [
            { type: 'github', href: 'https://github.com/cworld1/r-learning' },
            { type: 'site', href: 'https://cworld1.github.io/r-learning' }
          ]
        },
        {
          name: 'CS 213 Learning',
          description: 'Notes, code and experiences for Introduction to Computer Systems course',
          links: [
            {
              type: 'github',
              href: 'https://github.com/zhuozhiyongde/Introduction-To-Computer-System-2023Fall-PKU'
            }
          ]
        }
      ] satisfies ProjectEntry[]
    } satisfies ProjectsContentSection,
    others: {
      /** Optional. `enabled: false` hides Others (and TOC). Omit = show. */
      title: 'Others',
      projects: [
        {
          name: 'CWorld',
          description: "CWorld's Github",
          links: [{ type: 'github', href: 'https://github.com/cworld1' }]
        },
        {
          name: 'Arthals',
          description: 'Arthals Github',
          links: [{ type: 'github', href: 'https://github.com/zhuozhiyongde' }]
        }
      ] satisfies ProjectEntry[]
    } satisfies ProjectsContentSection
  },

  gpg: {
    /** Optional. Set `enabled: false` to hide the whole block (and its TOC entry). */
    enabled: false,
    title: 'GPG Signature',
    descriptionBeforeKey:
      'You can verify the authenticity of the files I signed by checking the GPG signature. My GPG key is ',
    keyDisplay: '114514',
    descriptionAfterKey: ', and you can find it on the opengpg key servers or download from it.',
    keyButtonTitle: 'Checkout my key',
    keyButtonHref: 'https://keys.openpgp.org/search?q=114514'
  } satisfies ProjectsGpgSection,

  sponsorship: {
    /** Optional. Set `enabled: false` to hide the whole block (and its TOC entry). */
    enabled: false,
    title: 'Sponsorship',
    chineseMethodsHtml:
      'Chinese methods: <a href="https://afdian.com/a/cworld" target="_blank">Afadian</a>, Wechat or Alipay ',
    methods: [
      { name: 'WeChat', icon: 'wechat-pay', image: wechat },
      { name: 'Alipay', icon: 'alipay', image: alipay }
    ] satisfies SponsorshipMethodEntry[],
    globalMethodsHtml: 'Global methods: <a href="https://ko-fi.com/cworld0" target="_blank">Ko-fi</a> ',
    emailNoteBefore:
      'Please leave a message or contact me proactively after sponsorship. My email is:',
    /** Base64-encoded email for the inline decode UI on the template page. */
    emailBase64: 'Y3dvcmxkMEBxcS5jb20=',
    emailNoteAfter: '(click code to transform base64).',
    sponsorsIntro: 'Thanks to the following sponsors:',
    sponsorsProgressMax: 50,
    sponsors: [
      { name: 'Saneko', platform: 'Wechat', amount: 188, date: '2026-02-25' },
      { name: '边缘星2020', platform: 'Afdian', amount: 20.26, date: '2026-02-17' },
      { name: 'Juyao Huang', platform: 'Wechat', amount: 5, date: '2026-01-15' },
      { name: 'hoochanlon', platform: 'Wechat', amount: 5, date: '2025-11-09' },
      { name: 'Arthals', platform: 'Wechat', amount: 50, date: '2025-11-06' },
      { name: '边缘星2020 (byx2020.com)', platform: 'Alipay', amount: 50, date: '2025-11-01' },
      { name: '小哲', platform: 'Wechat', amount: 50, date: '2025-08-19' },
      { name: 'Open1V', platform: 'Wechat', amount: 2, date: '2025-08-14' },
      { name: 'Luis Xu', platform: 'Alipay', amount: 30, date: '2025-08-03' },
      { name: '顾**', platform: 'Wechat', amount: 28, date: '2025-06-23' },
      { name: 'Hans J.Han', platform: 'Wechat', amount: 10, date: '2025-04-04' },
      { name: '**青', platform: 'Alipay', amount: 12, date: '2024-05-21' },
      { name: 'Anonymous', platform: 'Wechat', amount: 20, date: '2022-04-06' },
      { name: '华雄', platform: 'QQ', amount: 5, date: '2019-12-30' },
      { name: '◌', platform: 'QQ', amount: 3, date: '2019-12-30' },
      { name: 'C*a', amount: 2, date: '2019-07-02' }
    ] satisfies SponsorEntry[]
  } satisfies ProjectsSponsorshipSection
}

export type ProjectsPageData = typeof projectsPageData

export function buildProjectsHeadings(
  d: typeof projectsPageData,
  visible: {
    programs: boolean
    learnings: boolean
    others: boolean
    gpg: boolean
    sponsorship: boolean
  }
): ProjectsPageHeading[] {
  const out: ProjectsPageHeading[] = []
  if (visible.programs) {
    out.push({ depth: 2, slug: 'programs', text: d.sections.programs.title })
  }
  if (visible.learnings) {
    out.push({ depth: 2, slug: 'learnings', text: d.sections.learnings.title })
  }
  if (visible.others) {
    out.push({ depth: 2, slug: 'others', text: d.sections.others.title })
  }
  if (visible.gpg) {
    out.push({ depth: 2, slug: 'gpg-signature', text: d.gpg.title })
  }
  if (visible.sponsorship) {
    out.push({ depth: 2, slug: 'sponsorship', text: d.sponsorship.title })
  }
  return out
}
