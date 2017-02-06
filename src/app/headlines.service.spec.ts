/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeadlinesService } from './headlines.service';

describe('HeadlinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadlinesService]
    });
  });

  it('should ...', inject([HeadlinesService], (service: HeadlinesService) => {
    expect(service).toBeTruthy();
  }));
});
