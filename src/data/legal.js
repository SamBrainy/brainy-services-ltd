import { company } from "./company"

// Settings used in the legal pages. Change a value here and every page updates.
// Have a qualified professional review the legal pages before you rely on them.
export const legal = {
  lastUpdated: "21 November 2026",
  jurisdiction: "England and Wales",
  acceptanceDays: 7, // days to raise concerns after delivery
  fileRetentionDays: 90, // client files deleted this long after project completion
  enquiryRetentionMonths: 12, // enquiries and chat messages kept this long
  complaintAckDays: 3, // working days to acknowledge a complaint
  complaintResponseDays: 14, // days to respond fully to a complaint
}

// "Brainy Services Ltd, a company registered ... (company number X), with its registered office at Y"
export function whoWeAre() {
  let text = `${company.name}, a company registered with Companies House in the United Kingdom`
  if (company.number) text += ` (company number ${company.number})`
  if (company.registeredAddress) text += `, with its registered office at ${company.registeredAddress}`
  return text
}

// "email us at x" or "contact us using the form on our website"
export function howToContact() {
  return company.email
    ? `email us at ${company.email}`
    : "contact us using the contact form on our website"
}
