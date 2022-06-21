import { SubscriptionForBill } from './subscriptionForBill';

export interface BillDetail {
  generatedDate: string;
  billId: string;
  email: string;
  customerName: string;
  subscriptionsForBill: SubscriptionForBill[];
  totalAmount: number;
}
