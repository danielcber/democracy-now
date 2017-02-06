import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Headline } from '../headline';
import { HeadlinesService } from '../headlines.service';

@Component({
  moduleId: module.id,
  selector: 'headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css'],
  providers: [ HeadlinesService ]
})

export class HeadlinesComponent implements OnInit {
	headlines: Headline[] = [];
	selectedHeadline: Headline;

  	constructor(
  	private router: Router,
    private headlinesService: HeadlinesService) { }

  	getHeadlines(): void {
		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines);
	}

	ngOnInit(): void {
  		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines.slice(0,16));
  	}

  	onSelect(headline: Headline): void {
    this.selectedHeadline = headline;

    this.router.navigate(['/headline', this.selectedHeadline.id]);
	}
}
