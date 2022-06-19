export interface Customer {
  customerId: string;
  name: string;
  email: string;
  status: string;
  last4: string;
}
export interface CustomerStats{
  totalCustomers:number;
  activeCustomers:number;
  inactiveCustomers:number;
}
