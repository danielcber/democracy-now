import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Headline } from '../headline';
import { HeadlinesService } from '../headlines.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'headline-detail',
  templateUrl: './headline-detail.component.html',
  styleUrls: ['./headline-detail.component.css'],
  providers: [ HeadlinesService ]
})
export class HeadlineDetailComponent implements OnInit {
	headline: Headline;

  	constructor(
  	private headlinesService: HeadlinesService,
  	private route: ActivatedRoute,
	  private location: Location
	) { }

	ngOnInit(): void {
 	 this.route.params.switchMap((params: Params) => this.headlinesService.getHeadline(+params['id'])).subscribe(headline => this.headline = headline);
	}

}
