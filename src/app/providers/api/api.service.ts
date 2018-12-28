import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {
    API_URL  =  'https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-28&sortBy=publishedAt&apiKey=d3c55daf4ece46bca512ba7c77655c91';
    constructor(private  httpClient:  HttpClient) {}
    getNews() {
        console.log(this.httpClient.get(`${this.API_URL}`));
        return  this.httpClient.get(`${this.API_URL}`);
    }
}
