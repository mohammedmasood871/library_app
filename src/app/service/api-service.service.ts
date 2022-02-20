import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getBooks(value:any){
    return this.http.get(`http://openlibrary.org/search/authors.json?q=${value}`)
  }

  booksDetail(value:any){
    return this.http.get(`http://openlibrary.org/books/${value}.json`)

  }
}
