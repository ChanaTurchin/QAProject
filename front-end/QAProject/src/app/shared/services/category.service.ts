import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category.model';

@Injectable()
export class CategoryService {

    private baseUrl = environment.apiEndPoint + 'categories/';

    constructor(private http: HttpClient) { }

    getAllCategories():Observable<CategoryModel[]> {
        let url = this.baseUrl + 'getAllCategories';
        return this.http.get(url)as Observable<CategoryModel[]>;

    }
}