import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFactsComponent } from './components/all-facts/all-facts.component';
import { MyFatcsComponent } from './components/my-fatcs/my-fatcs.component';

const routes: Routes = [
  { path: 'all', component: AllFactsComponent },
  { path: 'my-facts', component: MyFatcsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
