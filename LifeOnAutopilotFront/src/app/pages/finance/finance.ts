import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'loa-finance',
  imports: [],
  templateUrl: './finance.html',
  styleUrl: './finance.css'
})
export class Finance {
  private http = inject(HttpClient);
  message = "";
  myVar : any = { message:'' };
  
  constructor()
  {
    this.http.get('http://localhost:5046/', { responseType:'json' }).subscribe(item => {this.myVar = item; console.log(item)});
  }
}

class Response 
{
  message: string = "";
}