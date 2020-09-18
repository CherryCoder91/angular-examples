import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './angular-modules/routed-modules/routing-examples/components/page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

// Note that the order we define routes is important. First to match wins so keep wildcards at end.
const routes: Routes = [
  {
    path: 'navigation',
    component: NavigationComponent
  },
  {
    path: 'routing-examples',
    loadChildren: () =>
      import(
        './angular-modules/routed-modules/routing-examples/routing-examples.module'
      ).then((m) => m.ExampleRoutedPageModule),
  },
  {
    path: 'form-examples',
    loadChildren: () =>
      import(
        './angular-modules/routed-modules/form-examples/form-examples.module'
      ).then((m) => m.FormExamplesModule),
  },
  {
    // redirect to home page
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full',
  },
  {
    // Wildcard route for a 404 page
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
