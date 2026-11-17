import {
  Palette,
  Clapperboard,
  BarChart3,
  ShoppingBag,
  BookOpen,
  Sparkles,
  Mic,
  Languages,
  Share2,
  GraduationCap,
} from "lucide-react"

// ---------------------------------------------------------------------
// HOW TO EDIT THIS FILE
// - status: "available"  -> shows normally, visitors can request a quote
// - status: "coming-soon" -> shows a "Coming soon" badge
//   When you are ready to sell a service, change its status to "available".
// - from: null -> the price shows as "Custom quote".
//   To show a price, write a number, e.g.  from: 25  (shows "From £25").
// ---------------------------------------------------------------------

export const pillars = [
  {
    id: "creative",
    title: "Creative Studio",
    blurb: "Brands, graphics and motion that make your idea look as good as it sounds.",
  },
  {
    id: "data",
    title: "Data and Spreadsheets",
    blurb: "Clear answers from messy data, plus spreadsheets that work for you.",
  },
  {
    id: "shop",
    title: "Digital Shop",
    blurb: "Ready-made templates, guides and prompt packs. Buy once, use again and again.",
  },
  {
    id: "support",
    title: "Support and Learning",
    blurb: "Audio, language, social media and training support for busy people.",
  },
]

export const services = [
  {
    slug: "branding-design",
    pillar: "creative",
    title: "Branding and Graphic Design",
    status: "available",
    icon: Palette,
    description:
      "Logos, brand kits and everyday graphics that give your business a consistent look, so people recognise and remember you.",
    details: [
      "Logo design",
      "Brand kits: colours, fonts and usage guidelines",
      "Social media graphics",
      "Flyers, posters and presentation decks",
      "CV and resume design",
    ],
    idealFor: "Start-ups, small businesses and creators who need a professional look.",
    packages: [
      { name: "Logo Starter", summary: "A logo with a small set of revisions.", from: null },
      { name: "Full Brand Kit", summary: "Logo, colours, fonts and usage guidelines.", from: null },
      { name: "Social Pack", summary: "A set of branded social media graphics.", from: null },
    ],
  },
  {
    slug: "animation-video",
    pillar: "creative",
    title: "Animation and Video Editing",
    status: "available",
    icon: Clapperboard,
    description:
      "Short animations and clean video edits that explain your idea quickly and fit the platforms you use.",
    details: [
      "Short animated explainers",
      "Logo animations",
      "Social media clips",
      "YouTube and promo video editing",
      "Subtitles and captions",
    ],
    idealFor: "Businesses and creators who want clear, on-brand video content.",
    packages: [
      { name: "30-second Clip", summary: "A short animation or edited clip.", from: 50 },
      { name: "Explainer", summary: "A longer animated video that explains your product or idea.", from: null },
      { name: "Monthly Editing Bundle", summary: "A regular set of edits each month.", from: null },
    ],
  },
  {
    slug: "data-spreadsheets",
    pillar: "data",
    title: "Data Analysis and Spreadsheets",
    status: "available",
    icon: BarChart3,
    description:
      "We turn messy business data into clear answers. From cleaning and organising your files to building reports and dashboards, we help you see what is working and what to do next.",
    details: [
      "Data cleaning: removing duplicates and fixing formatting errors",
      "Custom Excel and Google Sheets templates: budgets, inventory, sales tracking, invoicing, project planning",
      "Formulas and simple automation that save repeat work",
      "Reports and dashboards: monthly summaries, performance charts and trends",
      "Survey and customer feedback analysis",
      "Charts and visuals ready for presentations",
      "A handover session so you can maintain the work yourself",
    ],
    idealFor: "Small businesses and professionals who have data but no time to make sense of it.",
    note: "To keep your data safe, please remove or anonymise personal details (names, emails, phone numbers) from files unless they are essential to the job.",
    packages: [
      { name: "Quick Fix", summary: "Clean one file or fix one spreadsheet problem.", from: null },
      { name: "Report Pack", summary: "Analysis of one dataset with a written summary and charts.", from: null },
      { name: "Dashboard Build", summary: "A reusable dashboard plus a handover walkthrough.", from: null },
      { name: "Monthly Support", summary: "Ongoing updates and reporting.", from: null },
    ],
  },
  {
    slug: "digital-shop",
    pillar: "shop",
    title: "Digital Product Shop",
    status: "coming-soon",
    icon: ShoppingBag,
    description:
      "Ready-made templates and brand kits you can download instantly and use again and again.",
    details: [
      "Templates for Canva, PowerPoint, Excel and Notion",
      "Invoice and business plan templates",
      "Brand kits and social media template bundles",
      "Design assets",
    ],
    idealFor: "Anyone who wants a professional result without starting from a blank page.",
  },
  {
    slug: "ebooks-guides",
    pillar: "shop",
    title: "E-books, Guides and Mini-courses",
    status: "coming-soon",
    icon: BookOpen,
    description:
      "Practical, step-by-step learning products on digital and business skills.",
    details: [
      "E-books and how-to guides",
      "Checklists and cheat sheets",
      "Short mini-courses",
    ],
    idealFor: "People who want to learn a digital skill at their own pace.",
  },
  {
    slug: "prompt-packs",
    pillar: "shop",
    title: "Prompt Packs and Workflow Guides",
    status: "coming-soon",
    icon: Sparkles,
    description:
      "Tested prompts and step-by-step workflows that show you how to use AI tools for specific jobs.",
    details: [
      "Prompts for marketing, admin, study and content creation",
      "Workflow guides for data and everyday tasks",
      "Downloadable packs you can reuse",
    ],
    idealFor: "Busy people who want better results from AI tools, faster.",
  },
  {
    slug: "voice-transcription",
    pillar: "support",
    title: "Voice-over and Transcription",
    status: "coming-soon",
    icon: Mic,
    description:
      "Turn audio or video into accurate text, or turn your script into clear narration. AI does the first pass and a person reviews the result before delivery.",
    details: [
      "Transcription of interviews, meetings, podcasts and videos",
      "Voice-over from your script using commercially licensed voices",
      "Formatted, proofread output",
    ],
    idealFor: "Creators, teams and businesses with audio or video to put into words, or scripts to put into sound.",
    note: "We never clone or imitate a real person’s voice without written permission.",
  },
  {
    slug: "translation",
    pillar: "support",
    title: "Translation",
    status: "coming-soon",
    icon: Languages,
    description:
      "AI-assisted translation that is reviewed for accuracy, best suited to business, marketing and general content.",
    details: [
      "Website and marketing copy",
      "Business documents and emails",
      "Clear notes on which languages receive human review",
    ],
    idealFor: "Businesses reaching new audiences in other languages.",
    note: "Not suitable for legal, medical or official documents that need certified translation.",
  },
  {
    slug: "social-media",
    pillar: "support",
    title: "Social Media Management",
    status: "coming-soon",
    icon: Share2,
    description:
      "Content planning, scheduling and captions for business accounts, so your social channels stay active without taking over your week.",
    details: [
      "Content calendars",
      "Post scheduling",
      "Caption writing",
    ],
    idealFor: "Small businesses that want steady, consistent social media.",
    note: "Business accounts only. We use official access tools and never ask for your passwords.",
  },
  {
    slug: "tutoring-training",
    pillar: "support",
    title: "Online Tutoring and Training",
    status: "coming-soon",
    icon: GraduationCap,
    description:
      "One-to-one or small-group coaching in practical digital skills, plus recorded mini-courses.",
    details: [
      "Excel and data basics",
      "Design tools",
      "Everyday digital skills",
    ],
    idealFor: "Adults who want to build practical digital skills.",
    note: "For adults aged 18 and over.",
  },
]

export const availableServices = services.filter((s) => s.status === "available")
