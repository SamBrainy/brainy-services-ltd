import LegalPage from "../components/LegalPage"
import { legal, whoWeAre, howToContact } from "../data/legal"

const sections = [
  {
    heading: "1. Who we are",
    paragraphs: [
      `These terms apply to all services and digital products supplied by ${whoWeAre()} (“we”, “us”). You can ${howToContact()}. By placing an order or using our website or tools you agree to these terms.`,
    ],
  },
  {
    heading: "2. Our services and orders",
    paragraphs: [
      "Services are described on our website and in the written quote or order confirmation, which sets the scope, price, timeline and number of revisions. A contract is formed when we confirm your order in writing (including by email) or accept your payment. Work outside the agreed scope will be quoted separately.",
    ],
  },
  {
    heading: "3. Prices and payment",
    paragraphs: [
      "Prices are in pounds sterling (GBP) and, where we are VAT registered, will state whether VAT is included. Payment is taken through Stripe or by invoice. For larger projects we may require a deposit or staged payments. Work may be paused if payment is overdue.",
    ],
  },
  {
    heading: "4. Your responsibilities",
    paragraphs: [
      "You must give accurate information and materials on time, and must have the right to give us anything you send. You must not send unlawful, infringing or harmful material. Please send only the data needed for the job and remove or anonymise personal details unless essential. Delays in supplying materials may delay delivery.",
    ],
  },
  {
    heading: "5. Delivery and revisions",
    paragraphs: [
      `Delivery dates are estimates unless agreed as fixed. Each package includes the number of revisions stated in the quote. Further revisions may be charged. Work is treated as accepted if you do not raise a reasonable concern within ${legal.acceptanceDays} days of delivery.`,
    ],
  },
  {
    heading: "6. Cancellation and refunds: services",
    paragraphs: [
      "If you are a consumer buying online, you generally have 14 days from the contract date to cancel a services contract. If you ask us to start work within that period, you must pay for work already done up to cancellation. Business customers: cancellation terms are as stated in the quote. Where work is faulty or not as described, we will correct it or, if we cannot, refund the relevant part. Your statutory rights are not affected.",
    ],
  },
  {
    heading: "7. Cancellation and refunds: digital products",
    paragraphs: [
      "Digital products (templates, brand kits, e-books, guides, prompt packs, courses) are supplied immediately. By completing your purchase and starting the download or access, you agree that we begin supply straight away and that you lose your right to cancel once supply has started. If a product is faulty, does not work or is not as described, contact us and we will fix it, replace it or refund you. Your statutory rights are not affected.",
    ],
  },
  {
    heading: "8. Intellectual property",
    paragraphs: [
      "Once we receive full payment, you own the final deliverables created specifically for you, except for third-party materials (such as fonts, stock assets and tools), which remain subject to their own licences. We will tell you about those licences where relevant. Until payment, we keep all rights.",
      "We may show completed work in our portfolio and marketing unless you ask us in writing not to, or the work is confidential.",
      "Digital products from our shop are licensed to you, not sold. You may use them for your own personal or single-business use, but you may not resell, share, redistribute or claim them as your own unless the product licence says otherwise.",
      "You confirm you hold the rights to any material you supply.",
    ],
  },
  {
    heading: "9. Use of AI",
    paragraphs: [
      "We may use AI tools to assist with some services. We review AI-assisted work before delivery, but AI output can contain errors, so you should check important content before relying on it. We will tell you how AI was used if you ask. We do not guarantee that AI-assisted output is free of similarities to other works, and we avoid using AI to imitate real people or copy others’ work.",
    ],
  },
  {
    heading: "10. Free AI tools on our website",
    paragraphs: [
      "Where we offer free tools, they are provided as is, for general use, and may be limited, changed or withdrawn at any time. They are not professional advice. Do not enter personal, confidential or sensitive information. Output is AI-generated and may be inaccurate or unsuitable; you are responsible for checking it and for how you use it. You must not misuse, overload, automate or attempt to bypass limits on these tools.",
    ],
  },
  {
    heading: "11. Data analysis and spreadsheets",
    paragraphs: [
      "Our analysis depends on the accuracy and completeness of the data you supply. We do not provide financial, tax, legal, investment or accounting advice, and our work should not be used as a substitute for such advice.",
    ],
  },
  {
    heading: "12. Voice-over, transcription and translation",
    paragraphs: [
      "Transcription accuracy depends on audio quality, accents and background noise and may need your review. Voice-over uses licensed AI voices and we do not clone real voices without written permission. Translations are AI-assisted and reviewed to the level stated in your quote; they are not certified translations and are not suitable for legal, medical or official use unless agreed in writing. You are responsible for having the right to use any audio, video or text you send us.",
    ],
  },
  {
    heading: "13. Social media management",
    paragraphs: [
      "We work only on business accounts and only through official access or scheduling tools. We will never ask for your passwords. You remain responsible for your accounts and for approving content where agreed. We do not guarantee follower numbers, reach, engagement or sales.",
    ],
  },
  {
    heading: "14. Tutoring and training",
    paragraphs: [
      "Our training is for adults aged 18 or over. We do not guarantee any particular result, qualification or job outcome. Recorded course materials are for your personal use only.",
    ],
  },
  {
    heading: "15. Confidentiality and data",
    paragraphs: [
      `We keep your confidential information private and use it only to deliver your service. We delete client files ${legal.fileRetentionDays} days after project completion unless you ask us to keep them or the law requires otherwise. Our handling of personal data is described in our Privacy Policy. Where we process personal data on your instructions, you agree to give us only data you are entitled to share, and we will handle it only as needed for the service.`,
    ],
  },
  {
    heading: "16. Acceptable use",
    paragraphs: [
      "You must not use our website or services for unlawful, misleading, abusive, infringing or harmful purposes, or to produce content that is hateful, deceptive or illegal.",
    ],
  },
  {
    heading: "17. Limitation of liability",
    paragraphs: [
      "Nothing in these terms limits liability for death or personal injury caused by negligence, fraud, or anything that cannot legally be limited. Subject to that, we are not liable for indirect or consequential loss, or loss of profit, revenue, data or opportunity, and our total liability for any claim relating to a service or product is limited to the amount you paid us for it. We are not responsible for delays or failures caused by events outside our reasonable control, including outages of third-party platforms.",
    ],
  },
  {
    heading: "18. Complaints",
    paragraphs: [
      `If you are unhappy, ${howToContact()} with the details. We aim to acknowledge complaints within ${legal.complaintAckDays} working days and respond fully within ${legal.complaintResponseDays} days.`,
    ],
  },
  {
    heading: "19. Changes",
    paragraphs: [
      "We may update these terms. The version published when you order applies to that order.",
    ],
  },
  {
    heading: "20. Governing law",
    paragraphs: [
      `These terms are governed by the laws of ${legal.jurisdiction}, and the courts of ${legal.jurisdiction} have jurisdiction, although consumers living elsewhere in the UK keep any rights they have under local law.`,
    ],
  },
]

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that apply to services and digital products supplied by Brainy Services Ltd."
      sections={sections}
    />
  )
}
