import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleGuard } from './guards/example-guard.guard';
import { LazyPageComponent } from './components/lazy-page/lazy-page.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBSubpageComponent } from './components/page-b-subpage/page-b-subpage.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { RoutingExamplesHomeComponent } from './components/routing-examples-home/routing-examples-home.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingExamplesHomeComponent,
    children: [
      {
        path: 'page-a/:example-parameter',
        component: PageAComponent,
      },
      {
        path: 'page-b',
        component: PageBComponent,
        children: [
          {
            path: 'page-b-subpage',
            component: PageBSubpageComponent,
          },
        ],
      },
      {
        path: 'guarded-route',
        component: PageAComponent,
        canActivate: [ExampleGuard],
      },
      {
        path: 'lazy-loaded-page',
        component: LazyPageComponent
      },
    ],
  },
  {
    path: 'page-a/:example-parameter',
    component: PageAComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutedPageRoutingModule {}
