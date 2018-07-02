import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/dashboard/alert/alert.component';
import { ViewComponent } from './components/dashboard/view/view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { AlertsTableComponent } from './components/dashboard/alerts-table/alerts-table.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ViewComponent,
    DashboardComponent,
    AlertsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    TabViewModule,
    TableModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
