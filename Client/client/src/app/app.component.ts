import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  /**
   *
   */
  constructor(public http:HttpClient) {
    this.http.get("https://localhost:5000/WeatherForecast").subscribe({
      next:(res:any)=> console.log(res),
      error:(err)=>console.log(err)
    });

  }
  ngOnInit(): void {

  }
  title = 'client';
}
