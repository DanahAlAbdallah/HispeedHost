import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlighttickitingComponent } from './flighttickiting/flighttickiting.component';
import { HttpClientModule } from '@angular/common/http';
import { ImigrationComponent } from './imigration/imigration.component';
import { FormsModule } from '@angular/forms';
import { FlightsComponent } from './flights/flights.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { AftersearchComponent } from './aftersearch/aftersearch.component';
import { AftersearchitemComponent } from './aftersearchitem/aftersearchitem.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    FlighttickitingComponent,
    ImigrationComponent,
    FlightsComponent,
    SearchComponent,
    NavComponent,
    AftersearchComponent,
    AftersearchitemComponent,
    ServicesComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
