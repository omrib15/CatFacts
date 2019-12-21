import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFactsComponent } from './components/all-facts/all-facts.component';
import { MyFactsComponent } from './components//my-facts/my-facts.component';

const routes: Routes = [
  { path: 'all', component: AllFactsComponent },
  { path: 'my-facts', component: MyFactsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
