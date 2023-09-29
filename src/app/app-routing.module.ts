import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlighttickitingComponent } from './flighttickiting/flighttickiting.component';
import { ImigrationComponent } from './imigration/imigration.component';
import { SearchComponent } from './search/search.component';
import { AftersearchComponent } from './aftersearch/aftersearch.component';
import { ServicesComponent } from './services/services.component';
import { StudentprogramComponent } from './studentprogram/studentprogram.component';
import { TorrismVisaComponent } from './torrism-visa/torrism-visa.component';
import { AllHrSearchComponent } from './all-hr-search/all-hr-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/',pathMatch: 'full'},
  { path: 'tickiting', component: FlighttickitingComponent },
  { path: 'imigration', component: ImigrationComponent },
  { path: 'search', component: SearchComponent },
  {path:'aftersearch', component: AftersearchComponent},
  {path:'' , component:ServicesComponent},
  {path:'student', component:StudentprogramComponent},
  {path:'tourism', component:TorrismVisaComponent},
  {path:'all', component:AllHrSearchComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation : 'reload',
    // scrollPositionRestoration: 'top'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
