import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicReactiveFormComponent } from './components/basic-reactive-form/basic-reactive-form.component';
import { FormExamplesHomeComponent } from './components/form-examples-home/form-examples-home.component';

const routes: Routes = [
  {
    path: '',
    component: FormExamplesHomeComponent,
    children: [
      {
        path: 'basic-reactive-form',
        component: BasicReactiveFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormExamplesRoutingModule { }
