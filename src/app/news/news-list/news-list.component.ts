import { Component, OnInit } from '@angular/core';
import { NewsStore } from '../../providers/stores/news.store.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public news: any[];
  private formulario: FormGroup;

  constructor(private newsStore: NewsStore, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      everything: '',
      q: '',
      from: '',
      to: '',
      sortBy: '',
      country: '',
      category: '',
      sources: '',
      domains: ''
    });
  }

  ngOnInit() {
    // this.getNews();
  }

  public getNews() {
    this.newsStore.getNews(this.formulario.value).subscribe((data: any[]) => {
      this.news = data;
      console.log(data);
    });
  }
}
