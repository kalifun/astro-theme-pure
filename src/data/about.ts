import type { IconsType, TimelineEvent } from 'astro-pure/types'

export type AboutPageHeading = { depth: 2; slug: string; text: string }

/** TOC + `<h2 id>` labels for fixed sections (order matches page layout). */
export const aboutSectionMeta = {
  hobbies: { slug: 'hobbies', text: 'Hobbies' },
  tools: { slug: 'tools', text: 'Tools' },
  social: { slug: 'social-networks', text: 'Social Networks' },
  gossips: { slug: 'gossips', text: 'Gossips' },
  blog: { slug: 'about-blog', text: 'About Blog' }
} as const

export type AboutToolEntry = {
  name: string
  description: string
  href: string
  icon: Promise<{ default: string }>
}

export type AboutToolSection = {
  title: string
  tools: AboutToolEntry[]
}

export type AboutSubstat = {
  platform: string
  icon: IconsType
  color?: string
  link?: string
  text: string
  api?: string
}

/** `enabled: false` hides Social Networks (and its TOC entry). */
export type AboutSocialSection = {
  enabled?: boolean
  intro: string
  stats: AboutSubstat[]
}

/** `enabled: false` hides Gossips (and its TOC entry). */
export type AboutGossipsSection = {
  enabled?: boolean
  collapseTitle: string
  bodyHtml: string
}

/** `enabled: false` hides About Blog (and its TOC entry). */
export type AboutBlogSection = {
  enabled?: boolean
  timelineIntro: string
  events: TimelineEvent[]
  creditsIntro: string
  creditLines: string[]
}

export const aboutPageData = {
  pageTitle: 'About',

  /** Homepage `<Section title="…">` — same `intro` as /about; edit copy once here. */
  homePreview: {
    sectionTitle: 'About',
    moreButton: {
      title: 'More about me',
      href: '/about' as const,
      variant: 'ahead' as const
    }
  },

  intro: {
    role: 'Developer / Dreamer',
    paragraphs: [
      'I majored in information security in college and taught myself back-end development as a rookie.'
    ] as string[],
    mottoPrefix: 'There are always unrealistic fantasies.',
    mottoSpoiler: 'A carefree life !!!'
  },

  sponsorButton: {
    title: 'Sponsor Me',
    href: '/projects#sponsorship' as const,
    variant: 'ahead' as const
  },

  hobbies: {
    items: [
      'Singing, dancing, rap, basketball --- Lawyer\'s letter warning ⚠️',
    ] as string[]
  },

  tools: {
    intro: 'Current support tools as follow:',
    sections: [
      {
        title: 'Vibe Coding Tools',
        tools: [
          {
            name: 'Cursor',
            description: 'The AI Code editor',
            href: 'https://www.cursor.com/',
            icon: import('@/assets/tools/cursor.svg?raw')
          },
          {
            name: 'Codex',
            description: 'Lightweight coding agent that runs in your terminal',
            href: 'https://www.openai.com/api/codex/',
            icon: import('@/assets/tools/codex.svg?raw')
          },
          {
            name: 'Claude Code',
            description: 'Anthropic\'s agentic coding tool for developers',
            href: 'https://claude.com/product/claude-code',
            icon: import('@/assets/tools/claude.svg?raw')

          }
        ] satisfies AboutToolEntry[]
      },
      {
        title: 'Productivity',
        tools: [
          {
            name: 'Chrome',
            description: 'Browser',
            href: 'https://www.google.com/chrome/',
            icon: import('@/assets/tools/chrome.svg?raw')
          },
          {
            name: 'Arc',
            description: 'Browser with AI-powered sidebar',
            href: 'https://arc.net/',
            icon: import('@/assets/tools/arc browser.svg?raw')
          },
          {
            name: 'Obsidian',
            description: 'Note-taking tool with bidirectional linking',
            href: 'https://obsidian.md/',
            icon: import('@/assets/tools/obsidian.svg?raw')
          },
          {
            name: 'Raycast',
            description: 'Productivity tool with AI-powered sidebar',
            href: 'https://www.raycast.com/',
            icon: import('@/assets/tools/raycast.svg?raw')
          }
        ] satisfies AboutToolEntry[]
      },
      {
        title: 'Development',
        tools: [
          {
            name: 'VS Code',
            description: 'IDE',
            href: 'https://code.visualstudio.com/',
            icon: import('@/assets/tools/vscode.svg?raw')
          },
          {
            name: 'Neovim',
            description: 'IDE',
            href: 'https://neovim.io/',
            icon: import('@/assets/tools/neovim.svg?raw')
          }
        ] satisfies AboutToolEntry[]
      },
      {
        title: 'Environment',
        tools: [
          {
            name: 'MacOS Tahoe',
            description: 'MacBook Pro',
            href: 'https://www.apple.com/macos/',
            icon: import('@/assets/tools/apple.svg?raw')
          },
          {
            name: 'Windows 11',
            description: 'Framework Laptop 16',
            href: 'https://news.microsoft.com/windows11-general-availability/',
            icon: import('@/assets/tools/windows11.svg?raw')
          }
        ] satisfies AboutToolEntry[]
      }
    ] satisfies AboutToolSection[]
  },

  social: {
    /** Set `false` to hide Social Networks + TOC. */
    enabled: false,
    intro:
      'Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne.',
    stats: [
      {
        platform: 'GitHub',
        icon: 'github' as const,
        link: 'https://github.com/kalifun',
        text: 'followers',
        api: 'github/kalifun'
      },
      {
        platform: 'Telegram',
        icon: 'telegram' as const,
        color: '#2ca5e0',
        link: 'https://t.me/kalifun',
        text: 'members',
        api: 'telegram/kalifun'
      },
      // {
      //   platform: 'Steam',
      //   icon: 'steam' as const,
      //   color: '#50769d',
      //   link: 'https://steamcommunity.com/id/cworld',
      //   text: 'games',
      //   api: 'steamgames/76561199021278120'
      // }
    ] satisfies AboutSubstat[]
  } satisfies AboutSocialSection,

  gossips: {
    /** Set `false` to hide Gossips + TOC. */
    enabled: false,
    collapseTitle: 'Lorem ipsum',
    bodyHtml:
      'Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio possit voluptatum.'
  } satisfies AboutGossipsSection,

  blog: {
    /** Set `false` to hide About Blog + TOC. */
    enabled: false,
    timelineIntro: 'Website history:',
    events: [
      {
        date: '2024-04-29',
        content:
          'Website refactored using <a href="https://astro.build/" target="_blank">Astro</a> and <a href="https://github.com/srleom/astro-theme-resume" target="_blank">Astro Theme Resume</a>'
      },
      {
        date: '2024-07-26',
        content:
          'Website abstracted as a theme and published on <a href="https://github.com/cworld1/astro-theme-pure" target="_blank">Github</a>'
      },
      {
        date: '2024-07-27',
        content: 'Began writing website docs'
      }
    ] satisfies TimelineEvent[],
    creditsIntro:
      'The smooth operation and personalized customization of website also rely on the resources and technical support provided by the following excellent projects/service providers:',
    /** One `<li>...</li>` worth of HTML per item (trusted, your own content). */
    creditLines: [
      "<li>Domain: <a href='#' target='_blank'>Vercel</a></li>",
      "<li>Framework & Theme: <a href='https://astro.build/' target='_blank'>Astro</a> + <a href='https://github.com/cworld1/astro-theme-pure' target='_blank'>Astro Theme Pure</a></li>",
      "<li>Site hosting: <a href='https://vercel.com/' target='_blank'>Vercel</a></li>",
      "<li>CI/CD: <a href='https://vercel.com/workflow' target='_blank'>Vercel Workflow</a></li>",
      "<li>Comment system: <a href='https://waline.js.org' target='_blank'>Waline</a></li>",
      "<li>Visits: <a href='https://supabase.com/' target='_blank'>Supabase</a> + <a href='https://waline.js.org/' target='_blank'>Waline</a></li>",
      "<li>Other statistics: <a href='https://github.com/spencerwooo/substats' target='_blank'>Substats</a></li>"
    ] as string[]
  } satisfies AboutBlogSection
}

export type AboutPageData = typeof aboutPageData

export function buildAboutHeadings(d: AboutPageData): AboutPageHeading[] {
  const socialBlock = d.social as AboutSocialSection
  const gossipsBlock = d.gossips as AboutGossipsSection
  const blogBlock = d.blog as AboutBlogSection
  const { hobbies, tools, social, gossips, blog } = aboutSectionMeta
  const out: AboutPageHeading[] = [
    { depth: 2, slug: hobbies.slug, text: hobbies.text },
    { depth: 2, slug: tools.slug, text: tools.text }
  ]
  if (socialBlock.enabled !== false) {
    out.push({ depth: 2, slug: social.slug, text: social.text })
  }
  if (gossipsBlock.enabled !== false) {
    out.push({ depth: 2, slug: gossips.slug, text: gossips.text })
  }
  if (blogBlock.enabled !== false) {
    out.push({ depth: 2, slug: blog.slug, text: blog.text })
  }
  return out
}
