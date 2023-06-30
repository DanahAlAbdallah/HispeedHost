import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlighttickitingComponent } from './flighttickiting/flighttickiting.component';
import { ImigrationComponent } from './imigration/imigration.component';

const routes: Routes = [
  { path: 'tickiting', component: FlighttickitingComponent },
  { path: 'imigration', component: ImigrationComponent }

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
