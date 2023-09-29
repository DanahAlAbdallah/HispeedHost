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
import { FormDataSharedComponent } from './form-data-shared/form-data-shared.component';
import { TorrismVisaComponent } from './torrism-visa/torrism-visa.component';
import { StudentprogramComponent } from './studentprogram/studentprogram.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StickyHeaderDirective } from './sticky-header.directive';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { AllHrSearchComponent } from './all-hr-search/all-hr-search.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ServiceHomeComponent } from './service-home/service-home.component';


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
    InputflightsinfoComponent,
    FormDataSharedComponent,
    TorrismVisaComponent,
    StudentprogramComponent,
    ModalPopupComponent,
    StickyHeaderDirective,
    ScrollToBottomDirective,
    LoadingModalComponent,
    FooterComponent,
    CopyrightComponent,
    SearchItemComponent,
    AllHrSearchComponent,
    HomeComponent,
    SliderComponent,
    SliderItemComponent,
    ServicesHomeComponent,
    ServiceHomeComponent
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
