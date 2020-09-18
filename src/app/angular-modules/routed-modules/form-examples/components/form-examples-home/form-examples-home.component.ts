import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../dynamic-form/question-service';

@Component({
  selector: 'app-form-examples-home',
  templateUrl: './form-examples-home.component.html',
  styleUrls: ['./form-examples-home.component.css']
})
export class FormExamplesHomeComponent implements OnInit {

  constructor(public questionService: QuestionService) { }

  ngOnInit(): void {
  }

}
