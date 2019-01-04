import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONSTANTS } from '../../core/constants/api.constants';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
    providedIn: 'root'
})

export class APIService {
    API_URL = 'https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-03&sortBy=publishedAt&apiKey=d3c55daf4ece46bca512ba7c77655c91';
    parametros: String;
    constructor(private httpClient: HttpClient) { }
    getNews(values: any) {
        console.log(values);
        this.parametros = this.buildParameters(values);
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get(`${API_CONSTANTS.API_VALUE}${values.everything}?${this.parametros}apiKey=${API_CONSTANTS.API_KEY}`);
    }

    public buildParameters(values) {
        console.log(values.to);
        let parameters: String = '';
        if (values.q !== '') {
            parameters = parameters.concat('q='.concat(values.q).concat('&'));
        }
        if (values.from !== '') {
            parameters = parameters.concat('from='.concat(values.from).concat('&'));
        }
        if (values.to !== '') {
            parameters = parameters.concat('to='.concat(values.to).concat('&'));
        }
        if (values.sortBy !== '') {
            parameters = parameters.concat('sortBy='.concat(values.sortBy).concat('&'));
        }
        if (values.country !== '') {
            parameters = parameters.concat('country='.concat(values.country).concat('&'));
        }
        if (values.category !== '') {
            parameters = parameters.concat('category='.concat(values.category).concat('&'));
        }
        if (values.sources !== '') {
            parameters = parameters.concat('sources='.concat(values.sources).concat('&'));
        }
        if (values.domains !== '') {
            parameters = parameters.concat('domains='.concat(values.domains).concat('&'));
        }
        return parameters;
    }
}
