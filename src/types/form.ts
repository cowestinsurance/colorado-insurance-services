export interface PersonalQuoteData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  insuranceType: "home" | "auto" | "renters" | "umbrella";
  propertyType?: string;
  yearBuilt?: string;
  squareFootage?: string;
  numberOfVehicles?: string;
  numberOfDrivers?: string;
  rentalType?: string;
  personalPropertyEstimate?: string;
  hasAutoPolicy?: boolean;
  hasHomePolicy?: boolean;
  desiredCoverageAmount?: string;
  hasCurrentCoverage: boolean;
  currentProvider?: string;
  desiredStartDate: string;
  additionalNotes?: string;
}

export interface CommercialQuoteData {
  businessName: string;
  industry: string;
  yearsInBusiness: string;
  numberOfEmployees: string;
  annualRevenue: string;
  businessCity: string;
  coverageTypes: string[];
  hasCurrentCoverage: boolean;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  preferredContactMethod: "phone" | "email";
  additionalDetails?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
