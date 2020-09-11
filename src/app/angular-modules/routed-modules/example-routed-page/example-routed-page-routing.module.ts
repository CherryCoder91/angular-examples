import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyPageComponent } from './components/lazy-page/lazy-page.component';

const routes: Routes = [
  {
    path: '',
    component: LazyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutedPageRoutingModule {}
