import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

  public exampleParameterDirect: string;
  public exampleParameterSubscribe: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // Disable browser refresh on same navigation to illustrate subscription
    this.router.onSameUrlNavigation = 'ignore';

    // Directly access parameter:
    this.exampleParameterDirect = this.route.snapshot.paramMap.get('example-parameter');
    console.log(`DIRECT: ${this.exampleParameterDirect}`)

    // Or subscribe to changes
    this.route.paramMap.subscribe(params => {
      this.exampleParameterSubscribe = params.get('example-parameter');
      `SUBSCRIBE: ${this.exampleParameterSubscribe}`
    });
  }

}
