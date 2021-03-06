import { AddOnForSubscription } from './addOnForSubscription';

export interface SubscriptionForBill {
  date: string;
  productName: string;
  planName: string;
  price: number;
  subscriptionId: string;
  subscriptionType: string;
  startDate: string;
  addOnsForSubscription: AddOnForSubscription[];
}
