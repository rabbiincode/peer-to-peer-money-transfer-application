import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComponentsRoutingModule } from './components/components-routing.module';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
    ComponentsRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
