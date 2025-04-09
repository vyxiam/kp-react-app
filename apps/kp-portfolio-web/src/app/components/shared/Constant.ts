import {
  generateLanguageDetail,
  KPFooterProps,
  KPNavBarProps,
  LanguageDetail,
  NavContent,
  NavItem,
  getAppVersion,
  SVGAngular,
  IconComponent,
  SVGMaven,
  SVGJava,
  SVGGitea,
  SVGJira,
  SVGJenkins,
  SVGSpring,
  SVGPython,
  SVGDjango,
  SVGJavaScript,
  SVGTypeScript,
  SVGAI,
  SVGHibernate,
  SVGReact,
  SVGHTML,
  SVGCSS,
  SVGTailwind,
  SVGNPM,
  SVGPostman,
  SVGGradle,
  SVGGithub,
  SVGFigma,
  SVGIdea,
  SVGPyCharm,
  SVGVSCode,
  SVGOpenAI,
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
  Monitor,
  FolderKanban,
  Globe,
  House,
  Blocks,
  TabletSmartphone,
  Accessibility,
  LockKeyhole,
  Microchip,
  ShieldAlert,
  CheckCircle,
  ShieldCheck,
  Rows4,
  FileCode2,
  RefreshCw,
  Radar,
  CopyPlus,
  Cpu,
  PenTool,
  GalleryHorizontalEnd,
  Rss,
  FileStack,
  BicepsFlexed,
  Hourglass,
  BookUser,
  Network,
  Joystick,
  Plug,
  Bot,
  Atom,
  Variable,
  PanelsTopLeft,
  Github,
  Linkedin,
  Mail,
  HdmiPort,
  Antenna,
  LayoutTemplate,
  BookOpenCheck,
  Crosshair,
  SpellCheck,
  Calculator,
  Tv,
  KeyRound,
  BrainCircuit,
  Navigation,
  Infinity
} from 'lucide-react';
import CRA_EXP from '@/assets/experience_cra.jpg';
import FREELANCE_EXP from '@/assets/freelance_exp.jpeg';
import PERSONAL_EXP from '@/assets/personal_exp.png';
import KP_LOGO from '@/assets/KP_small.jpg'
import KP_V1 from '@/assets/KP_v1.jpeg'
import KP_V2 from '@/assets/KP_v2.png'
import PROJECT_VACODE from '@/assets/project_vacode.png'
import VACODE_LOGO from '@/assets/code-v-square.png'
import DetailsComponentCounter from '@/app/components/experience/experience-components/details/shared/details-component-counter';
import DetailsImproveCounter
  from '@/app/components/experience/experience-components/details/shared/details-improve-counter';
import { IconLogoNode } from '@/app/components/shared/logo-node';

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
    fullContentIcon: IconLogoNode,
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
    link: "/project-va-code",
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

export const HOME_SOCIAL = [
  {item: Linkedin, title: 'Linkedin', link: 'https://www.linkedin.com/in/vyxnguyen/'},
  {item: Github, title: 'Github', link: 'https://github.com/vyxiam'},
  {item: Mail, title: 'Email', link: 'mailto:&#118;&#120;&#121;&#46;&#110;&#103;&#117;&#121;&#101;&#110;&#96;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'},
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
    title: "summary.experience.cra.library.title",
    description: "summary.experience.cra.library.description",
    icon: Star,
  },
  {
    title: "summary.experience.cra.web.title",
    description: "summary.experience.cra.web.description",
    icon: Star,
  },
  {
    title: "summary.experience.cra.requirements.title",
    description: "summary.experience.cra.requirements.description",
    icon: Star,
  },
  {
    title: "summary.experience.cra.issues.title",
    description: "summary.experience.cra.issues.description",
    icon: Star,
  },
  {
    title: "summary.experience.cra.unit.title",
    description: "summary.experience.cra.unit.description",
    icon: Star,
  },
  {
    title: "summary.experience.cra.backend.title",
    description: "summary.experience.cra.backend.description",
    icon: Star,
  },
]

export const FREELANCE_SUMMARY = [
  {
    title: "summary.paid.reference.bot.title",
    description: "summary.paid.reference.bot.description",
    icon: Terminal,
  },
  {
    title: "summary.paid.reference.flow.title",
    description: "summary.paid.reference.flow.description",
    icon: Repeat,
  },
  {
    title: "summary.paid.reference.data.title",
    description: "summary.paid.reference.data.description",
    icon: Database,
  },
  {
    title: "summary.paid.reference.logic.title",
    description: "summary.paid.reference.logic.description",
    icon: Webhook,
  },
  {
    title: "summary.paid.reference.maintenance.title",
    description: "summary.paid.reference.maintenance.description",
    icon: Monitor,
  },
  {
    title: "summary.paid.reference.schedule.title",
    description: "summary.paid.reference.schedule.description",
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
    content: ["Angular", "React", "Spring Boot", "JUnit/pytest", "Selenium", "Playwright"]
  },
  {
    title: "Tools",
    description: "including the tool I use everyday",
    content: ["Postman/SoapUI", "Maven", "Git", "Jira", "Figma", "IntelliJ/VSCode/Eclipse", "Jenkins", "AI tools (such as ChatGPT,..)"]
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
    img: CRA_EXP,
    location: 'experience.cra.location',
    title: 'experience.cra.title',
    period: 'experience.cra.period'
  },
  {
    img: FREELANCE_EXP,
    location: 'experience.karport.location',
    title: 'experience.karport.title',
    period: 'experience.karport.period'
  },
  {
    img: PERSONAL_EXP,
    location: 'experience.personal.location',
    title: 'experience.personal.title',
    period: 'experience.personal.period'
  }
]

export const CRA_EXP_DEV_TECHS: {icon: IconComponent , description: string}[] = [
  {icon: SVGAngular, description: 'Angular'},
  {icon: SVGMaven, description: 'Maven'},
  {icon: SVGJava, description: 'Java'},
  {icon: SVGGitea, description: 'Gitea'},
  {icon: SVGJira, description: 'Jira'},
  {icon: SVGJenkins, description: 'Jenkins'},
]

export const CRA_EXP_FE_DEV = [
  {icon: TabletSmartphone, title: 'experience.details.cra.frontend.key.responsive.title', description: 'experience.details.cra.frontend.key.responsive.description'},
  {icon: Globe, title: 'experience.details.cra.frontend.key.internationalization.title', description: 'experience.details.cra.frontend.key.internationalization.description'},
  {icon: House, title: 'experience.details.cra.frontend.key.architecture.title', description: 'experience.details.cra.frontend.key.architecture.description'},
  {icon: Blocks, title: 'experience.details.cra.frontend.key.integration.title', description: 'experience.details.cra.frontend.key.integration.description'},
]

export const CRA_EXP_FE_COMMON_DEV = [
  {icon: DetailsComponentCounter, title: 'experience.details.cra.library.key.component.title', description: 'experience.details.cra.library.key.component.description'},
  {icon: DetailsImproveCounter, title: 'experience.details.cra.library.key.improvement.title', description: 'experience.details.cra.library.key.improvement.description'},
  {icon: Accessibility, title: 'experience.details.cra.library.key.accessibility.title', description: 'experience.details.cra.library.key.accessibility.description'},
  {icon: LockKeyhole, title: 'experience.details.cra.library.key.security.title', description: 'experience.details.cra.library.key.security.description'},
]

export const CRA_EXP_BE_DEV_FR = [
  {icon: Microchip, title: 'experience.details.cra.api.title', description: 'experience.details.cra.api.description'},
  {icon: Rows4, title: 'experience.details.cra.message.title', description: 'experience.details.cra.message.description'}
]

export const CRA_EXP_BE_DEV_SR = [
  {icon: ShieldCheck, title: 'experience.details.cra.auth.title', description: 'experience.details.cra.auth.description'},
  {icon: FileCode2, title: 'experience.details.cra.file.title', description: 'experience.details.cra.file.description'},
  {icon: ShieldAlert, title: 'experience.details.cra.error.title', description: 'experience.details.cra.error.description'}
]

export const CRA_EXP_MAINTENANCE_KEYPOINTS = [
  {icon: CheckCircle, content: 'experience.details.cra.maintenance.key.support'},
  {icon: CheckCircle, content: 'experience.details.cra.maintenance.key.update'},
  {icon: CheckCircle, content: 'experience.details.cra.maintenance.key.bug'},
  {icon: CheckCircle, content: 'experience.details.cra.maintenance.key.monitoring'},
  {icon: CheckCircle, content: 'experience.details.cra.maintenance.key.collaboration'},
]

export const KP_EXP_V1_DEV = [
  {icon: RefreshCw, title: 'experience.details.kp.v1.key.automate.title', description: 'experience.details.kp.v1.key.automate.description'},
  {icon: Radar, title: 'experience.details.kp.v1.key.realtime.title', description: 'experience.details.kp.v1.key.realtime.description'},
  {icon: CopyPlus, title: 'experience.details.kp.v1.key.multi.title', description: 'experience.details.kp.v1.key.multi.description'},
  {icon: Cpu, title: 'experience.details.kp.v1.key.architecture.title', description: 'experience.details.kp.v1.key.architecture.description'},
]

export const KP_EXP_V1_TECH = [
  {icon: CheckCircle, content: 'experience.details.kp.v1.tech.key.backend'},
  {icon: CheckCircle, content: 'experience.details.kp.v1.tech.key.python'},
  {icon: CheckCircle, content: 'experience.details.kp.v1.tech.key.ai'},
  {icon: CheckCircle, content: 'experience.details.kp.v1.tech.key.ui'},
  {icon: CheckCircle, content: 'experience.details.kp.v1.tech.key.performance'},
]

export const KP_EXP_V2_FEATURES = [
  {icon: PenTool, title: 'experience.details.kp.v2.feature.ui.title', description: 'experience.details.kp.v2.feature.ui.description'},
  {icon: GalleryHorizontalEnd, title: 'experience.details.kp.v2.feature.profile.title', description: 'experience.details.kp.v2.feature.profile.description'},
  {icon: Rss, title: 'experience.details.kp.v2.feature.scheduling.title', description: 'experience.details.kp.v2.feature.scheduling.description'},
  {icon: FileStack, title: 'experience.details.kp.v2.feature.log.title', description: 'experience.details.kp.v2.feature.log.description'},
]

export const PER_EXP_EDU_AC = [
  {icon: PanelsTopLeft, title: 'experience.details.personal.education.ac.web.title', description: 'experience.details.personal.education.ac.web.description'},
  {icon: TabletSmartphone, title: 'experience.details.personal.education.ac.mobile.title', description: 'experience.details.personal.education.ac.mobile.description'},
  {icon: Variable, title: 'experience.details.personal.education.ac.backend.title', description: 'experience.details.personal.education.ac.backend.description'},
  {icon: Webhook, title: 'experience.details.personal.education.ac.restful.title', description: 'experience.details.personal.education.ac.restful.description'},
]

export const PER_EXP_EDU_UOT_FR = [
  {icon: Bot, title: 'experience.details.personal.education.uot.automation.title', description: 'experience.details.personal.education.uot.automation.description'},
  {icon: Atom, title: 'experience.details.personal.education.uot.electronics.title', description: 'experience.details.personal.education.uot.electronics.description'}
]

export const PER_EXP_EDU_UOT_SR = [
  {icon: Plug, title: 'experience.details.personal.education.uot.hardware.title', description: 'experience.details.personal.education.uot.hardware.description'},
  {icon: Network, title: 'experience.details.personal.education.uot.network.title', description: 'experience.details.personal.education.uot.network.description'},
  {icon: Joystick, title: 'experience.details.personal.education.uot.control.title', description: 'experience.details.personal.education.uot.control.description'}
]

export const PER_EXP_SOFT_SKILLS = [
  {icon: Brain, title: 'experience.details.personal.soft.solving.title', description: 'experience.details.personal.soft.solving.description'},
  {icon: BookUser, title: 'experience.details.personal.soft.contributor.title', description: 'experience.details.personal.soft.contributor.description'},
  {icon: Hourglass, title: 'experience.details.personal.soft.time.title', description: 'experience.details.personal.soft.time.description'},
  {icon: BicepsFlexed, title: 'experience.details.personal.soft.adapt.title', description: 'experience.details.personal.soft.adapt.description'},
]

/**
 * SKILL PARTS
 */

export const BACKEND_SKILLS: {icon: IconComponent , description: string}[] = [
  {icon: SVGJava, description: 'Java'},
  {icon: SVGSpring, description: 'Spring'},
  {icon: SVGHibernate, description: 'Hibernate'},
  {icon: SVGPython, description: 'Python'},
  {icon: SVGDjango, description: 'Django'},
  {icon: SVGJavaScript, description: 'JavaScript'},
  {icon: SVGTypeScript, description: 'TypeScript'},
  {icon: SVGAI, description: 'AI Injected'},
]

export const FRONTEND_SKILLS: {icon: IconComponent , description: string}[] = [
  {icon: SVGAngular, description: 'Angular'},
  {icon: SVGReact, description: 'React'},
  {icon: SVGJavaScript, description: 'JavaScript'},
  {icon: SVGTypeScript, description: 'TypeScript'},
  {icon: SVGHTML, description: 'HTML'},
  {icon: SVGCSS, description: 'CSS'},
  {icon: SVGTailwind, description: 'Tailwind CSS'},
  {icon: SVGNPM, description: 'NPM'},
]

export const TOOL_SKILLS: {icon: IconComponent , description: string}[] = [
  {icon: SVGPostman, description: 'Postman'},
  {icon: SVGMaven, description: 'Maven'},
  {icon: SVGGradle, description: 'Gradle'},
  {icon: SVGGitea, description: 'Gitea'},
  {icon: SVGGithub, description: 'Github'},
  {icon: SVGJira, description: 'Jira'},
  {icon: SVGFigma, description: 'Figma'},
  {icon: SVGJenkins, description: 'Jenkins'},
  {icon: SVGIdea, description: 'IntelliJ IDEA'},
  {icon: SVGPyCharm, description: 'IntelliJ PyCharm'},
  {icon: SVGVSCode, description: 'VSCode'},
  {icon: SVGOpenAI, description: 'OpenAI ChatGPT'},
]

export const BACKEND_SKILLS_CONTENTS: {titleUp: string, titleDown?: string, content: string}[] = [
  {titleUp: 'skills.backend.java.lang', titleDown: 'skills.backend.java.frameworks', content: 'skills.backend.java.content'},
  {titleUp: 'skills.backend.python.lang', titleDown: 'skills.backend.python.frameworks', content: 'skills.backend.python.content'},
  {titleUp: 'skills.backend.js.lang', content: 'skills.backend.js.content'},
]

export const FRONTEND_SKILLS_CONTENTS: {titleUp: string, titleDown?: string, content: string}[] = [
  {titleUp: 'skills.frontend.angular.lang', content: 'skills.frontend.angular.content'},
  {titleUp: 'skills.frontend.react.lang', content: 'skills.frontend.react.content'},
  {titleUp: 'skills.frontend.ts.lang', content: 'skills.frontend.ts.content'},
  {titleUp: 'skills.frontend.markup.lang', content: 'skills.frontend.markup.content'},
  {titleUp: 'skills.frontend.tailwind.lang', content: 'skills.frontend.tailwind.content'},
]

export const TOOLS_CONTENTS: {titleUp: string, titleDown?: string, content: string}[] = [
  {titleUp: 'skills.tools.api.title', titleDown: 'skills.tools.api.name', content: 'skills.tools.api.content'},
  {titleUp: 'skills.tools.build.title', titleDown: 'skills.tools.build.name', content: 'skills.tools.build.content'},
  {titleUp: 'skills.tools.vc.title', titleDown: 'skills.tools.vc.name', content: 'skills.tools.vc.content'},
  {titleUp: 'skills.tools.management.title', titleDown: 'skills.tools.management.name', content: 'skills.tools.management.content'},
  {titleUp: 'skills.tools.ui.title', titleDown: 'skills.tools.ui.name', content: 'skills.tools.ui.content'},
  {titleUp: 'skills.tools.editor.title', titleDown: 'skills.tools.editor.name', content: 'skills.tools.editor.content'},
  {titleUp: 'skills.tools.cicd.title', titleDown: 'skills.tools.cicd.name', content: 'skills.tools.cicd.content'},
  {titleUp: 'skills.tools.ai.title', titleDown: 'skills.tools.ai.name', content: 'skills.tools.ai.content'},
]

/**
 * FREELANCE PROJECTS
 */

export const FREELANCE_CARDS = [
  {
    img: KP_V1,
    logo: KP_LOGO,
    type: 'freelance.project.kp.v1.type',
    title: 'freelance.project.kp.v1.title',
    period: 'freelance.project.kp.v1.period',
    link: '/project-kp-ver-1',
    completed: true
  },
  {
    img: KP_V2,
    logo: KP_LOGO,
    type: 'freelance.project.kp.v2.type',
    title: 'freelance.project.kp.v2.title',
    period: 'freelance.project.kp.v2.period',
    link: '/project-kp-ver-2',
    completed: false
  },
  {
    img: PROJECT_VACODE,
    logo: VACODE_LOGO,
    type: 'freelance.project.vacode.type',
    title: 'freelance.project.vacode.title',
    period: 'freelance.project.vacode.period',
    link: '/project-va-code',
    completed: true
  },
]


/**
 * PROJECT: KP
 */

export const PRO_KP_V1_UI_UX = [
  {icon: HdmiPort, title: 'project.kp.v1.ui.panel.title', description: 'project.kp.v1.ui.panel.description'},
  {icon: Rows4, title: 'project.kp.v1.ui.task.title', description: 'project.kp.v1.ui.task.description'},
  {icon: Antenna, title: 'project.kp.v1.ui.status.title', description: 'project.kp.v1.ui.status.description'},
  {icon: LayoutTemplate, title: 'project.kp.v1.ui.preset.title', description: 'project.kp.v1.ui.preset.description'},
]

export const PRO_KP_V1_GENERAL_POINTS = [
  {icon: CheckCircle, content: 'project.kp.v1.ui.general.vpn'},
  {icon: CheckCircle, content: 'project.kp.v1.ui.general.system'},
  {icon: CheckCircle, content: 'project.kp.v1.ui.general.multiple'},
  {icon: CheckCircle, content: 'project.kp.v1.ui.general.preset'}
]

export const PRO_KP_V1_RUN_POINTS = [
  {icon: CheckCircle, content: 'project.kp.v1.ui.run.timeout'},
  {icon: CheckCircle, content: 'project.kp.v1.ui.run.schedule'},
  {icon: CheckCircle, content: 'project.kp.v1.ui.run.workflow'},
  {icon: CheckCircle, content: 'project.kp.v1.ui.run.flexible'}
]

export const PRO_KP_V1_SHOWCASE = [
  {icon: BookOpenCheck, title: 'project.kp.v1.ui.showcase.cross.title', description: 'project.kp.v1.ui.showcase.cross.description'},
  {icon: Crosshair, title: 'project.kp.v1.ui.showcase.accuracy.title', description: 'project.kp.v1.ui.showcase.accuracy.description'},
  {icon: SpellCheck, title: 'project.kp.v1.ui.showcase.self.title', description: 'project.kp.v1.ui.showcase.self.description'},
  {icon: Calculator, title: 'project.kp.v1.ui.showcase.natural.title', description: 'project.kp.v1.ui.showcase.natural.description'},
]

export const PRO_KP_V1_FEATURE_FR = [
  {icon: Tv, title: 'project.kp.v1.features.watch.title', description: 'project.kp.v1.features.watch.description'},
  {icon: KeyRound, title: 'project.kp.v1.features.checkin.title', description: 'project.kp.v1.features.checkin.description'}
]

export const PRO_KP_V1_FEATURE_SR = [
  {icon: BrainCircuit, title: 'project.kp.v1.features.decision.title', description: 'project.kp.v1.features.decision.description'},
  {icon: Infinity, title: 'project.kp.v1.features.loop.title', description: 'project.kp.v1.features.loop.description'},
  {icon: Navigation, title: 'project.kp.v1.features.navigation.title', description: 'project.kp.v1.features.navigation.description'}
]
