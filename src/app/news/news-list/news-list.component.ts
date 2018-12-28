import { Component, OnInit } from '@angular/core';
import { NewsStore } from '../../providers/stores/news.store.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public news: any[];

  constructor(private newsStore: NewsStore) { }

  ngOnInit() {
    this.getNews();
  }

  public getNews() {
    this.newsStore.getNews().subscribe((data: any[]) => {
      this.news = data;
      console.log(data);
    });
  }
}
