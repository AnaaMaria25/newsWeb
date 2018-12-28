import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewCardComponent } from './new-card/new-card.component';
import { NewsStore } from '../providers/stores/news.store.service';

@NgModule({
  declarations: [NewsListComponent, NewCardComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: [
    NewsStore
  ]
})
export class NewsModule { }
