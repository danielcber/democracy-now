import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Headline } from '../headline';
import { HeadlinesService } from '../headlines.service';

@Component({
  selector: 'contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent implements OnInit {
	headlines: Headline[] = [];
	selectedHeadline: Headline;

  	constructor(
  	private router: Router,
    private headlinesService: HeadlinesService) { }

  	getHeadlines(): void {
		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines);
	}

	ngOnInit(): void {
  		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines);
  	}
}