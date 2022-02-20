import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css'],
})
export class BooksViewComponent implements OnInit {
  booksData: any[] = [];

  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {}

  getBooks(val: any) {
    console.log(val, 'from search');
    this.apiService.getBooks(val).subscribe((res: any) => {
      this.booksData = res.docs;
      console.log(res);
    });
  }
}
