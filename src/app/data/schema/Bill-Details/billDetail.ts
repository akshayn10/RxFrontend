import { SubscriptionForBill } from "./subscriptionForBill";

export interface BillDetail{
  createdDate: string;
  billId: string;
  customerName: string;
  subscriptionsForBill: SubscriptionForBill[];
}
