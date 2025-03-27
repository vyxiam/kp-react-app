import {
  generateLanguageDetail,
  KPFooterProps,
  KPNavBarProps,
  LanguageDetail,
  NavContent,
  NavItem,
  getAppVersion
} from '@kp-react-lib/kp-react-common';
import { Brain, Shuffle, HandshakeIcon, Layers } from 'lucide-react';

const CURRENT_VERSION = getAppVersion()
/**
 * Navigation constants
 */
const NAV_ITEMS: NavItem[] = [
  {title: 'nav.item.home', link: '/'},
  {title: 'nav.item.about.me', link: '/about-me', className: 'grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[550px] 2xl:w-[600px]'},
  {title: 'nav.item.projects', link: '/projects', className: 'grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'}
]

const NAV_ABOUT_CONTENTS: NavContent[] = [
  {
    fullContent: true,
    title: "nav.about.summary.title",
    link: "/summary",
    description: "nav.about.summary.description",
  },
  {
    fullContent: false,
    title: "nav.about.experience.title",
    link: "/detailed-experience",
    description: "nav.about.experience.description",
  },
  {
    title: "nav.about.skills.title",
    link: "/detailed-skills",
    description: "nav.about.skills.description",
  }
]

const NAV_PROJECT_CONTENTS: NavContent[] = [
  {
    title: "nav.projects.content.page.title",
    link: "/freelance-this-page",
    description: "nav.projects.content.page.description",
  },
  {
    fullContent: false,
    title: "nav.projects.content.freelance.title",
    link: "/freelance-projects",
    description: "nav.projects.content.freelance.description",
  }
]

export const NAV_PROPS: KPNavBarProps = {items: NAV_ITEMS, contents: [null, NAV_ABOUT_CONTENTS, NAV_PROJECT_CONTENTS]}

export const LANGUAGES: LanguageDetail[] = [
  generateLanguageDetail({code: "EN", language: 'lang.en'}),
  generateLanguageDetail({code: "FR", language: 'lang.fr'})
]

/**
 * HOME PARTS
 */
export const HOME_HIGHLIGHTS = [
  {
    title: "highlights.card.full.stack.title",
    description: "highlights.card.full.stack.description",
    icon: Layers,
  },
  {
    title: "highlights.card.multi.language.title",
    description: "highlights.card.multi.language.description",
    icon: Shuffle,
  },
  {
    title: "highlights.card.adaptability.collaboration.title",
    description: "highlights.card.adaptability.collaboration.description",
    icon: HandshakeIcon,
  },
  {
    title: "highlights.card.problem.solving.title",
    description: "highlights.card.problem.solving.description",
    icon: Brain,
  },
]

/**
 * FOOTER PARTS
 */
export const FOOTER_PROPS: KPFooterProps = {
  version: 'ver_0.',
  versionHighlight: CURRENT_VERSION,
  highlightColor: 'text-[#43DCF7]',
  footerRStr: 'footer.string'
}
