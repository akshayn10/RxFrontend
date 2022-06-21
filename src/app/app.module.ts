import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { CustomerModule } from './modules/customer/customer.module';
import { HelpModule } from './modules/help/help.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { ProductModule } from './modules/product/product.module';
import { ChartsModule } from 'ng2-charts';
import { ReportsModule } from './modules/reports/reports.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { ProfileModule } from './modules/profile/profile.module';
import { OrganizationModule } from './modules/organization-profile/organization.module';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrganizationIdInterceptorService } from './core/interceptors/organizationId-interceptor.service';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    DashboardModule,
    CoreModule,
    DataModule,
    CustomerModule,
    HelpModule,
    SubscriptionModule,
    ProductModule,
    ChartsModule,
    ReportsModule,
    MarketplaceModule,
    ProfileModule,
    OrganizationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
