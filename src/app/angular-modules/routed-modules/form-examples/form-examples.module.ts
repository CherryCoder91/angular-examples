import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormExamplesRoutingModule } from './form-examples-routing.module';
import { FormExamplesHomeComponent } from './components/form-examples-home/form-examples-home.component';
import { BasicReactiveFormComponent } from './components/basic-reactive-form/basic-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FormExamplesHomeComponent, BasicReactiveFormComponent],
  imports: [
    CommonModule,
    FormExamplesRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class FormExamplesModule { }
