import type { Node, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

// Cannot use '../utils' for plugin absolute path
import mdastToString from '../utils/mdast-util-to-string'
import getReadingTime from '../utils/reading-time'

export const remarkAddZoomable: Plugin<[{ className?: string }], Root> =
  ({ className = 'zoomable' }) =>
  (tree) => {
    visit(tree, 'image', (node: Node) => {
      // Merge — do not replace `node.data` or Astro / MDX image metadata is lost and `src` can break.
      const n = node as Node & { data?: Record<string, unknown> }
      n.data ??= {}
      const prev = (n.data.hProperties ?? {}) as Record<string, unknown>
      const existing = prev.class
      const nextClass =
        existing === undefined || existing === ''
          ? className
          : Array.isArray(existing)
            ? [...existing, className].join(' ')
            : `${String(existing)} ${className}`.trim()
      n.data.hProperties = { ...prev, class: nextClass }
    })
  }

export const remarkReadingTime: Plugin<[], Root> =
  () =>
  (tree, { data }) => {
    const textOnPage = mdastToString(tree)
    const readingTime = getReadingTime(textOnPage)
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min"
    if (data.astro?.frontmatter) {
      data.astro.frontmatter.minutesRead = readingTime.text
      data.astro.frontmatter.words = readingTime.words
    }
  }
