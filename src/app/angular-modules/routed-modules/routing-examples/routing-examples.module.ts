import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutedPageRoutingModule } from './routing-examples-routing.module';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageBSubpageComponent } from './components/page-b-subpage/page-b-subpage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoutingExamplesHomeComponent } from './components/routing-examples-home/routing-examples-home.component';


@NgModule({
  declarations: [
    PageAComponent,
    PageBComponent,
    PageBSubpageComponent,
    PageNotFoundComponent,
    RoutingExamplesHomeComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutedPageRoutingModule
  ],
  exports: [
    PageAComponent,
    PageBComponent,
    PageBSubpageComponent,
    PageNotFoundComponent,
    RoutingExamplesHomeComponent
  ]
})
export class ExampleRoutedPageModule { }
