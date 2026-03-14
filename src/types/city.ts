export interface CityLocalFactors {
  weatherRisks: string;
  trafficData?: string;
  medianHomeValue?: string;
  averageRent?: string;
  populationNote?: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  state: string;
  population: string;
  description: string;
  insuranceContext: string;
  neighborhoods: string[];
  zipCodes: string[];
  localFactors: CityLocalFactors;
  metaTitle: string;
  metaDescription: string;
}
