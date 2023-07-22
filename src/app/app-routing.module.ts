import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlighttickitingComponent } from './flighttickiting/flighttickiting.component';
import { ImigrationComponent } from './imigration/imigration.component';
import { SearchComponent } from './search/search.component';
import { AftersearchComponent } from './aftersearch/aftersearch.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'tickiting', component: FlighttickitingComponent },
  { path: 'imigration', component: ImigrationComponent },
  { path: 'search', component: SearchComponent },
  {path:'aftersearch', component: AftersearchComponent},
  {path:'services' , component:ServicesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation : 'reload'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
