import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageBSubpageComponent } from './components/page-b-subpage/page-b-subpage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageBSubpageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    PageAComponent,
    PageBComponent,
    PageBSubpageComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
