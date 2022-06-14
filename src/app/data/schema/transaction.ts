export interface Transaction {
  transactionId: string;
  date: string;
  subscriptionId: string;
  productName: string;
  customerName: string;
  amount: number;
  status: string;
  paymentFor: string;
  addOnName: string;
}
