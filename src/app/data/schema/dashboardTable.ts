export interface TableStats{
  product: string;
  name: string;
}
export interface TableVm{
  plan:TableStats[]
  addOn:TableStats[]
}
