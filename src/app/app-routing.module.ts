import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WccComponent } from './wcc/wcc/wcc.component';

const routes: Routes = [
  {
    path: '',
    component: WccComponent,
    loadChildren: () => import('./wcc/wcc.module').then((m) => m.WccModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
