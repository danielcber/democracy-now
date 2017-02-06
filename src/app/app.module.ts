import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HeadlineDetailComponent } from './headline-detail/headline-detail.component';

import { HeadlinesService } from './headlines.service';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    HeadlineDetailComponent,
    FrontpageComponent,
    ContentlistComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: '',
      redirectTo: 'frontpage',
      pathMatch: 'full'
      },
      {
        path: 'headline/:id',
        component: HeadlineDetailComponent
      },
      {
        path: 'frontpage',
        component: FrontpageComponent
      }
    ])
  ],
  providers: [HeadlinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
