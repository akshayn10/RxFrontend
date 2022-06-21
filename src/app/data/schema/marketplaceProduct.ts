export interface MarketplaceProduct {
  productId: string,
  description: string,
  name: string,
  logoUrl: string,
  trialDays: number,
  redirectUrl: string,
  organizationId: string
}
export interface MarketplaceProductForDisplay {
  productId: string,
  description: string,
  name: string,
  logoUrl: string,
  haveTrial: boolean,
  redirectUrl: string,
  providerName: string
}
