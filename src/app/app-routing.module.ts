import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LondonUndergroundComponent } from './london-underground/london-underground.component';

const routes: Routes = [
  {
    path: 'lines',
    component: LondonUndergroundComponent,
    data: {
      title: 'London Underground'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
