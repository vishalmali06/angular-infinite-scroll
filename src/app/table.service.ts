// src/app/table.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(page: number, limit: number): Observable<any[]> {
    const url = `${this.apiUrl}?_page=${page}&_limit=${limit}`;
    return this.http.get<any[]>(url);
  }
}
