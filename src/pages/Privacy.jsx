import LegalPage from "../components/LegalPage"
import { legal, whoWeAre, howToContact } from "../data/legal"

const sections = [
  {
    heading: "1. Who we are",
    paragraphs: [
      `${whoWeAre()}, is responsible for the personal data described in this policy. To reach us, ${howToContact()}.`,
    ],
  },
  {
    heading: "2. What we collect",
    items: [
      "Contact details you give us, such as your name and email address, and the message you send through our contact form or live chat.",
      "Order and payment records. Card payments are processed by Stripe; we do not see or store full card numbers.",
      "Messages and files you send us for a project, which may contain personal data.",
      "Basic technical data, such as your IP address and browser type, which our hosting provider records in server logs.",
      "Your cookie choice, stored in your own browser.",
    ],
  },
  {
    heading: "3. Why we use it and our legal basis",
    items: [
      "To provide the services and products you ask for and take payment (contract).",
      "To keep accounting and tax records and meet legal duties (legal obligation).",
      "To run and secure our website, answer enquiries and prevent misuse (legitimate interests).",
      "To use optional cookies, such as live chat (consent, which you can withdraw at any time).",
    ],
    after: [
      "We do not currently use analytics or advertising cookies, and we do not currently send marketing emails. If that changes, we will ask for your consent first and update this policy.",
    ],
  },
  {
    heading: "4. Client files and AI tools",
    paragraphs: [
      "Files you send us are used only to carry out your project. Some work uses AI tools. We do not knowingly put personal or confidential client data into AI tools unless the tool’s terms protect it and you have agreed. Please send only what is needed and remove personal details where you can.",
    ],
  },
  {
    heading: "5. Who we share data with",
    paragraphs: [
      "We share data only with providers who help us operate, and only as needed:",
    ],
    items: [
      "Stripe, to take card payments.",
      "Vercel, which hosts our website.",
      "Resend, an email delivery service that sends contact-form messages to our inbox.",
      "Crisp, which provides live chat, only if you allow chat cookies.",
      "Email, file storage and AI service providers we use to deliver projects, where relevant.",
    ],
  },
  {
    heading: "6. Do we sell your data?",
    paragraphs: [
      "No. We do not sell personal data. We may disclose data where the law requires it.",
    ],
  },
  {
    heading: "7. International transfers",
    paragraphs: [
      "Some of our providers are based outside the UK. Where data is transferred, we rely on appropriate safeguards, such as the UK’s approved transfer mechanisms or the provider’s UK-compliant terms.",
    ],
  },
  {
    heading: "8. How long we keep data",
    items: [
      "Order and accounting records: usually 6 years.",
      `Client project files: deleted about ${legal.fileRetentionDays} days after completion unless you ask us to keep them.`,
      `Enquiries and chat messages: up to ${legal.enquiryRetentionMonths} months.`,
      "Your cookie choice: until you clear your browser storage or change it.",
    ],
  },
  {
    heading: "9. Your rights",
    paragraphs: [
      `You can ask for access to your data, correction, deletion, restriction, a portable copy, and you can object to certain uses and withdraw consent. ${howToContact().replace(/^./, (c) => c.toUpperCase())} and we will respond within one month.`,
      "You also have the right to complain to the Information Commissioner’s Office (ico.org.uk) if you are unhappy with how we handle your data.",
    ],
  },
  {
    heading: "10. Cookies",
    paragraphs: [
      "We use only the cookies and browser storage described in our Cookie Policy. Live chat cookies are off unless you allow them.",
    ],
  },
  {
    heading: "11. Security",
    paragraphs: [
      "We use reasonable measures including strong passwords, two-factor authentication and access controls to protect data. No online system is completely secure.",
    ],
  },
  {
    heading: "12. Children",
    paragraphs: [
      "Our services are for adults. We do not knowingly collect data from children under 13 and do not offer training to under-18s.",
    ],
  },
  {
    heading: "13. Changes",
    paragraphs: [
      "We may update this policy and will publish the latest version on this page with the date.",
    ],
  },
]

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Brainy Services Ltd collects, uses and protects personal data."
      sections={sections}
    />
  )
}
