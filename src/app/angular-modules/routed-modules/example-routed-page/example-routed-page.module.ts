import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutedPageRoutingModule } from './example-routed-page-routing.module';
import { LazyPageComponent } from './components/lazy-page/lazy-page.component';


@NgModule({
  declarations: [LazyPageComponent],
  imports: [
    CommonModule,
    ExampleRoutedPageRoutingModule
  ]
})
export class ExampleRoutedPageModule { }
