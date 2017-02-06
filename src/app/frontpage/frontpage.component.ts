import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Headline } from '../headline';
import { HeadlinesService } from '../headlines.service';


@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
	headlines: Headline[] = [];
	selectedHeadline: Headline;

  	constructor(
    private headlinesService: HeadlinesService) { }

  	getHeadlines(): void {
		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines);
	}

	 ngOnInit(): void {
  		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines);
  	}

}
