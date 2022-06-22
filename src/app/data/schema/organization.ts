export interface OrganizationDetail {
    organizationId: string;
    name: string;
    description: string; 
    logoUrl: string;
    logoImage: string;
    email: string;
    accountOwnerId: string;
    organizationAddress: {
        addressLine1: string;
        addressLine2: string;
        city: string;
        state: string;
        country: string;
    };
}