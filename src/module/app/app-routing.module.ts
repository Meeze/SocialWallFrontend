import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevComponent} from "../dev/dev.component";

const routes: Routes = [
  {
    path: 'dev', component: DevComponent
  },
  {
    path: '**', component: DevComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
