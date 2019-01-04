// Basic
import { Injectable } from '@angular/core';

// Api Services
import { APIService } from '../api/api.service';


@Injectable()
export class NewsStore {
    constructor(private apiService: APIService) {
    }
    public getNews(values: any) {
        return this.apiService.getNews(values);
    }
}
