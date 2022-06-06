import { Routes, RouterModule } from '@angular/router';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { BillComponent } from './bill-main/bill.component';

const routes: Routes = [
  {
    path: '',
    component: BillComponent,
  },
  {
    path: 'details/:id',
    component: BillDetailsComponent,
  },
];

export const BillRoutes = RouterModule.forChild(routes);
