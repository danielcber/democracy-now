import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Headline } from '../headline';
import { HeadlinesService } from '../headlines.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	headlines: Headline[] = [];
	selectedHeadline: Headline;

  	constructor(
  	private router: Router,
    private headlinesService: HeadlinesService) { }

  	getHeadlines(): void {
		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines);
	}

	ngOnInit(): void {
  		this.headlinesService.getHeadlines().then(headlines => this.headlines = headlines.slice(12,15));
  	}

  	onSelect(headline: Headline): void {
    this.selectedHeadline = headline;

    this.router.navigate(['/headline', this.selectedHeadline.id]);
	}
}
