import {
  generateLanguageDetail,
  KPNavBarProps,
  LanguageDetail,
  NavContent,
  NavItem,
} from '@kp-react-lib/kp-react-common';

/**
 * Navigation constants
 */
const NAV_ITEMS: NavItem[] = [
  {title: 'nav.item.home', link: '/home'},
  {title: 'nav.item.about.me', link: '/about-me', className: 'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'},
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
    link: "/about-this-page",
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
  generateLanguageDetail({language: 'lang.en'}),
  generateLanguageDetail({language: 'lang.fr'}),
  generateLanguageDetail({language: 'lang.vi'})
]
