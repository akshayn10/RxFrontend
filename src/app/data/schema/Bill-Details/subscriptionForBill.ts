import { AddOnForSubscription } from "./addOnForSubscription";

export interface SubscriptionForBill {
  date: string;
  productName: string;
  price: number;
  addOnsForSubscription:AddOnForSubscription[];
}
