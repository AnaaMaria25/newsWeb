import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {
    API_URL  =  'https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-27&sortBy=publishedAt&apiKey=a9ef6e546dcd481fa4ec13dd46b4c197';
    constructor(private  httpClient:  HttpClient) {}
    getNews() {
        console.log(this.httpClient.get(`${this.API_URL}`));
        return  this.httpClient.get(`${this.API_URL}`);
    }
}
