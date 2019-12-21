import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFactsComponent } from './components/all-facts/all-facts.component';

const routes: Routes = [
  { path: 'all', component: AllFactsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
