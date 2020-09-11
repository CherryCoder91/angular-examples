import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBSubpageComponent } from './components/page-b-subpage/page-b-subpage.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ExampleGuard } from './guards/example-guard.guard';

// Note that the order we define routes is important. First to match wins so keep wildcards at end.
const routes: Routes = [
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
    path: 'lazy-loaded-page',
    loadChildren: () =>
      import(
        './angular-modules/routed-modules/example-routed-page/example-routed-page.module'
      ).then((m) => m.ExampleRoutedPageModule),
  },
  {
    path: 'guarded-route',
    component: PageAComponent,
    canActivate: [ExampleGuard],
  },
  // redirect to home page
  { path: '', redirectTo: 'page-a', pathMatch: 'full' },
  {
    // Wildcard route for a 404 page
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
