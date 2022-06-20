import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home-routing.module';
import { HomeComponent } from './home-main/home.component';
import { FaqComponent } from './faq/faq.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomePriceComponent } from './home-price/home-price.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    FaqComponent,
    HomeNavComponent,
    HomePriceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule

  ]
})
export class HomeModule { }
