export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredTime?: string;
  notes?: string;
}

export interface SubmissionResult {
  confirmationCode: string;
  submittedAt: string;
  data: LeadFormData;
}
