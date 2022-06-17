import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { HelpComponent } from './help-main/help.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    canActivate:[AuthGuard],
    data:{}
  }
];

export const HelpRoutes = RouterModule.forChild(routes);
