import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  datalist:any[] = [];
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:5000/WeatherForecast',{
      headers:{"Content-Type":"application/json","charset":"utf-8"}
    }).subscribe({
      next:(res:any) => {
        console.log(res);
        this.datalist = res;
      },
      error:err => console.log(err)
    });
  }

}
