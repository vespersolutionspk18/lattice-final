export const submissionTypes = [
  'estimate',
  'contact',
  'job_application',
  'partner_application',
  'footer_lead',
  'chat_message',
] as const

export type SubmissionType = (typeof submissionTypes)[number]

export const submissionStatuses = ['new', 'reviewing', 'resolved', 'archived'] as const

export type SubmissionStatus = (typeof submissionStatuses)[number]

export type SubmissionPayload = Record<string, string | number | boolean | null>

export interface SubmissionRecord {
  id: string
  type: SubmissionType
  status: SubmissionStatus
  sourcePath: string
  payload: SubmissionPayload
  fileName: string | null
  fileType: string | null
  fileSize: number | null
  hasFile: boolean
  createdAt: string
  updatedAt: string
}

type SubmissionDefinition = {
  label: string
  shortLabel: string
  description: string
  accent: string
  previewFields: string[]
  requiredFields: string[]
  allowedFields: string[]
  fieldLabels: Record<string, string>
}

export const submissionDefinitions: Record<SubmissionType, SubmissionDefinition> = {
  estimate: {
    label: 'Estimate request',
    shortLabel: 'Estimate',
    description: 'Homepage requests to speak with the Lattice team.',
    accent: '#2563eb',
    previewFields: ['firstName', 'lastName', 'email'],
    requiredFields: ['firstName', 'lastName', 'email', 'message'],
    allowedFields: ['firstName', 'lastName', 'email', 'message'],
    fieldLabels: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      message: 'Message',
    },
  },
  contact: {
    label: 'Contact inquiry',
    shortLabel: 'Contact',
    description: 'Detailed sales and service inquiries from the contact page.',
    accent: '#0f766e',
    previewFields: ['firstName', 'lastName', 'company'],
    requiredFields: ['firstName', 'lastName', 'email', 'jobTitle', 'company', 'interest', 'region', 'source', 'message'],
    allowedFields: ['firstName', 'lastName', 'email', 'jobTitle', 'company', 'interest', 'region', 'source', 'message'],
    fieldLabels: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      jobTitle: 'Job title',
      company: 'Company',
      interest: 'Area of interest',
      region: 'Region',
      source: 'Referral source',
      message: 'Message',
    },
  },
  job_application: {
    label: 'Job application',
    shortLabel: 'Career',
    description: 'Candidate applications, including resume files.',
    accent: '#b45309',
    previewFields: ['firstName', 'lastName', 'position'],
    requiredFields: ['firstName', 'lastName', 'email', 'phone', 'position', 'location', 'experience', 'salary', 'startDate', 'coverLetter'],
    allowedFields: ['firstName', 'lastName', 'email', 'phone', 'position', 'location', 'experience', 'portfolio', 'linkedin', 'salary', 'startDate', 'referral', 'coverLetter'],
    fieldLabels: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      position: 'Position',
      location: 'Current location',
      experience: 'Experience',
      portfolio: 'Portfolio',
      linkedin: 'LinkedIn',
      salary: 'Expected salary',
      startDate: 'Earliest start date',
      referral: 'Referral source',
      coverLetter: 'Why Lattice?',
    },
  },
  partner_application: {
    label: 'Partner application',
    shortLabel: 'Partner',
    description: 'Partnership proposals and company qualification details.',
    accent: '#4338ca',
    previewFields: ['firstName', 'lastName', 'companyName'],
    requiredFields: ['firstName', 'lastName', 'email', 'phone', 'companyName', 'companyWebsite', 'industry', 'companySize', 'location', 'annualRevenue', 'partnershipType', 'expectedVolume', 'message'],
    allowedFields: ['firstName', 'lastName', 'email', 'phone', 'companyName', 'companyWebsite', 'industry', 'companySize', 'location', 'annualRevenue', 'partnershipType', 'expectedVolume', 'referral', 'message'],
    fieldLabels: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      companyName: 'Company name',
      companyWebsite: 'Company website',
      industry: 'Industry',
      companySize: 'Company size',
      location: 'Company location',
      annualRevenue: 'Annual revenue',
      partnershipType: 'Partnership type',
      expectedVolume: 'Expected monthly volume',
      referral: 'Referral source',
      message: 'Partnership goals',
    },
  },
  footer_lead: {
    label: 'Footer lead',
    shortLabel: 'Footer',
    description: 'Email leads captured from the global footer.',
    accent: '#be123c',
    previewFields: ['email'],
    requiredFields: ['email'],
    allowedFields: ['email'],
    fieldLabels: { email: 'Email' },
  },
  chat_message: {
    label: 'Chat message',
    shortLabel: 'Chat',
    description: 'Questions visitors send through Cindy, the website assistant.',
    accent: '#7c3aed',
    previewFields: ['message'],
    requiredFields: ['message'],
    allowedFields: ['message'],
    fieldLabels: { message: 'Visitor message' },
  },
}

export function isSubmissionType(value: unknown): value is SubmissionType {
  return typeof value === 'string' && submissionTypes.includes(value as SubmissionType)
}

export function isSubmissionStatus(value: unknown): value is SubmissionStatus {
  return typeof value === 'string' && submissionStatuses.includes(value as SubmissionStatus)
}

export function formatFieldLabel(type: SubmissionType, field: string) {
  return submissionDefinitions[type].fieldLabels[field]
    ?? field.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (character) => character.toUpperCase())
}
