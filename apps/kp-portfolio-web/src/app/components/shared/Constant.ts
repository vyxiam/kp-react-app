import {
  generateLanguageDetail,
  KPFooterProps,
  KPNavBarProps,
  LanguageDetail,
  NavContent,
  NavItem,
  getAppVersion
} from '@kp-react-lib/kp-react-common';
import {
  Brain,
  Shuffle,
  HandshakeIcon,
  Layers,
  Star,
  Terminal,
  Repeat,
  Database,
  Webhook,
  Monitor, FolderKanban
} from 'lucide-react';
import cra_exp from '@/assets/experience_cra.jpg';
import freelance_exp from '@/assets/freelance.jpg';
import school_exp from '@/assets/school.jpg';

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

/**
 * SUMMARY PARTS
 */

export const CRA_SUMMARY = [
  {
    title: "Develop Angular library",
    description: "to streamline development across multiple projects, reducing effort and improving efficiency.",
    icon: Star,
  },
  {
    title: "Build web applications",
    description: "using Angular and Java EE, applying software design patterns such as OOP, MVVM, MVP, etc.",
    icon: Star,
  },
  {
    title: "Collect and analyze business requirements",
    description: "to deliver optimized, scalable, and complete solutions.",
    icon: Star,
  },
  {
    title: "Investigate technical issues",
    description: "by identifying root causes and implementing effective solutions",
    icon: Star,
  },
  {
    title: "Create Unit testing",
    description: "using JUnit and SoapUI, ensuring software quality and reliability.",
    icon: Star,
  },
  {
    title: "Manage file system operations",
    description: "such as file upload, download, editing, and removal, ensuring security and reliability\n",
    icon: Star,
  },
]

export const FREELANCE_SUMMARY = [
  {
    title: "Written in Python",
    description: "to streamline development across multiple projects, reducing effort and improving efficiency.",
    icon: Terminal,
  },
  {
    title: "Automation Process",
    description: "using Angular and Java EE, applying software design patterns such as OOP, MVVM, MVP, etc.",
    icon: Repeat,
  },
  {
    title: "Data Structure",
    description: "to deliver optimized, scalable, and complete solutions.",
    icon: Database,
  },
  {
    title: "RESTful API",
    description: "by identifying root causes and implementing effective solutions",
    icon: Webhook,
  },
  {
    title: "Virtual Machines",
    description: "using JUnit and SoapUI, ensuring software quality and reliability.",
    icon: Monitor,
  },
  {
    title: "System Management",
    description: "such as file upload, download, editing, and removal, ensuring security and reliability\n",
    icon: FolderKanban,
  },
]

export const SKILLS_TECHNICAL = [
  {
    title: "Programming Languages",
    description: "mostly focus on scripting and compiled languages",
    content: ["Python", "TypeScript/JavaScript", "Java", "SQL", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    description: "including other data processing frameworks",
    content: ["Angular", "React", "Spring Boot", "Node.js", "JUnit/pytest", "Selenium/Playwright", "Jenkins"]
  },
  {
    title: "Tools",
    description: "including the tool I use everyday",
    content: ["Postman/SoapUI", "Maven", "Git", "Jira", "Figma", "IntelliJ/VSCode/Eclipse", "AI tools (such as ChatGPT,..)"]
  },
  {
    title: "Pattern/APIs",
    description: "the coding style and design that I mostly use",
    content: ["Object-Oriented Programming", "Singleton", "Factory", "RESTful"]
  }
]

export const SKILLS_SOFT = [
  {
    title: "Problem-Solving and Analytical Thinking",
    description: "deep into challenges to uncover the core issues and develop the most effective solutions",
    content: "I always ensuring that I understand the root cause before taking action. Whether debugging code, optimizing systems, or addressing client requirements, I approach each task creatively and strategically, ensuring that the solution is not only effective but also scalable and efficient."
  },
  {
    title: "Teamwork",
    description: "collaboration is key, and working together as a team amplifies our ability to achieve great results",
    content: "I thrive in environments where team members support each other, share knowledge, and combine strengths to solve problems. I am always eager to contribute my skills and learn from others, ensuring that we’re all aligned and focused on achieving our common goals."
  },
  {
    title: "Time Management and Multitasking",
    description: "a strong ability to multitask and manage time efficiently",
    content: "I prioritize tasks to ensure that projects are completed on time and to a high standard. Whether managing competing deadlines or responding to urgent needs, I stay organized and focused on delivering results."
  },
  {
    title: "Adaptability",
    description: "One of my core strengths is the ability to quickly adjust to new environments",
    content: "My ability to rapidly acquire and apply new skills allows me to stay ahead of the curve, and I approach each task with confidence. This flexibility ensures that I consistently deliver high-quality results, no matter the project or technology."
  }
]

/**
 * EXPERIENCE PARTS
 */

export const EXPERIENCE_CARDS = [
  {
    img: cra_exp,
    location: 'experience.cra.location',
    title: 'experience.cra.title',
    period: 'experience.cra.period'
  },
  {
    img: freelance_exp,
    location: 'experience.karport.location',
    title: 'experience.karport.title',
    period: 'experience.karport.period'
  },
  {
    img: school_exp,
    location: 'experience.personal.location',
    title: 'experience.personal.title',
    period: 'experience.personal.period'
  }
]
