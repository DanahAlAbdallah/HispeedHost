import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlighttickitingComponent } from './flighttickiting/flighttickiting.component';
import { HttpClientModule } from '@angular/common/http';
import { ImigrationComponent } from './imigration/imigration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage} from '@angular/common';
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
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { FormsSection1Component } from './forms-section1/forms-section1.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { WhowearesectionComponent } from './whowearesection/whowearesection.component';
import { SpcialPackageComponent } from './spcial-package/spcial-package.component';
import { SpcialPackageItemComponent } from './spcial-package-item/spcial-package-item.component';
import { WemakeTourComponent } from './wemake-tour/wemake-tour.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsItemComponent } from './testimonials-item/testimonials-item.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeContactFooterComponent } from './home-contact-footer/home-contact-footer.component';
import { FirstrowComponent } from './shared-components/firstrow/firstrow.component';
import { SecondRowComponent } from './shared-components/second-row/second-row.component';
import { ThirdRowComponent } from './shared-components/third-row/third-row.component';
import { ForthRowComponent } from './shared-components/forth-row/forth-row.component';
import { FiveRowComponent } from './shared-components/five-row/five-row.component';
import { SixRowComponent } from './shared-components/six-row/six-row.component';
import { RowSevenComponent } from './shared-components/row-seven/row-seven.component';
import { ShowErrorComponent } from './shared-components/show-error/show-error.component';


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
    ServiceHomeComponent,
    AboutUsComponent,
    ApplyforjobComponent,
    FormsSection1Component,
    WhoweareComponent,
    WhowearesectionComponent,
    SpcialPackageComponent,
    SpcialPackageItemComponent,
    WemakeTourComponent,
    TestimonialsComponent,
    TestimonialsItemComponent,
    HomeFormComponent,
    HomeContactFooterComponent,
    FirstrowComponent,
    SecondRowComponent,
    ThirdRowComponent,
    ForthRowComponent,
    FiveRowComponent,
    SixRowComponent,
    RowSevenComponent,
    ShowErrorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NgOptimizedImage,

    ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {


}
