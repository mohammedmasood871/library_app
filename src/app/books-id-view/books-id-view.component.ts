import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-books-id-view',
  templateUrl: './books-id-view.component.html',
  styleUrls: ['./books-id-view.component.css']
})
export class BooksIdViewComponent implements OnInit {

  booksData:any;
  IsShow:boolean = false;
  constructor( private apiService:ApiServiceService){}
  ngOnInit(): void {  

  }

  getBooks(val:any){
    this.apiService.booksDetail(val).subscribe((res:any) =>{
      this.booksData = res;
      this.IsShow = true
      console.log(res)
    })

  }
}
