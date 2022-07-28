import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriviaPage } from './trivia.page';

const routes: Routes = [
  {
    path: '',
    component: TriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriviaPageRoutingModule {}
