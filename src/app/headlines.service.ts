import { Injectable } from '@angular/core';

import { Headline } from './headline';
import { HEADLINES } from './mock-headlines';

@Injectable()
export class HeadlinesService {
  getHeadlines(): Promise<Headline[]> {
  	return Promise.resolve(HEADLINES);
  }

  getHeadline(id: number): Promise<Headline> {
  return this.getHeadlines()
             .then(headlines => headlines.find(headline => headline.id === id));
}

}
