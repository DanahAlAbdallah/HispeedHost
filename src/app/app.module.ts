import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SearchflightResultsComponent } from './searchflight-results/searchflight-results.component';
import { SearchflightBoxComponent } from './searchflight-box/searchflight-box.component';
import { ShimmerComponent } from './shimmer/shimmer.component';
import { FlightComponent } from './flight/flight.component';
import { InputflightsinfoComponent } from './inputflightsinfo/inputflightsinfo.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    ServiceComponent,
    SearchflightResultsComponent,
    SearchflightBoxComponent,
    ShimmerComponent,
    FlightComponent,
    InputflightsinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
