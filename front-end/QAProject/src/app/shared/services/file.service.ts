import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class FileService {

    private baseUrl = environment.apiEndPoint + 'files';

    constructor(private http: HttpClient) { }

    uploadFile(file: File): Observable<string> {
        let formData: FormData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.baseUrl}/upload`, formData) as Observable<string>;
        
    }
}