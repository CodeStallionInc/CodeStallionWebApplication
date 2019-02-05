import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FullScreenHomeComponent } from './full-screen-home/full-screen-home.component';
import { WhatDrivesUsComponent } from './what-drives-us/what-drives-us.component';
import { TrackRecordComponent } from './track-record/track-record.component';
import { ConnectComponent } from './connect/connect.component';
import {RouterModule, Routes} from '@angular/router';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'track-record', component: TrackRecordComponent},
  { path: 'connect', component: ConnectComponent},
  { path: 'what-drives-us',      component: WhatDrivesUsComponent },
  { path: 'who-we-are', component: WhoWeAreComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FullScreenHomeComponent,
    WhatDrivesUsComponent,
    TrackRecordComponent,
    ConnectComponent,
    WhoWeAreComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
