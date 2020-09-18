import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormExamplesRoutingModule } from './form-examples-routing.module';
import { FormExamplesHomeComponent } from './components/form-examples-home/form-examples-home.component';
import { BasicReactiveFormComponent } from './components/basic-reactive-form/basic-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BasicReactiveFormGroupComponent } from './components/basic-reactive-form-group/basic-reactive-form-group.component';
import { ReactiveFormbuilderComponent } from './components/reactive-formbuilder/reactive-formbuilder.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';


@NgModule({
  declarations: [FormExamplesHomeComponent, BasicReactiveFormComponent, BasicReactiveFormGroupComponent, ReactiveFormbuilderComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    FormExamplesRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class FormExamplesModule { }
