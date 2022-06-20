export interface SubscriptionStats{
  totalSubscriptions : number;
  activeSubscriptions :number;
  activeTrialSubscriptions: number;
  upgradeCount: number;
  downgradeCount: number;
  activeOneTimeSubscriptions:number;
  activeRecurringSubscriptions: number;
  cancelledSubscriptions: number;
}
