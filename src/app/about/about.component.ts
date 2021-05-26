import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user_ID!: string | null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  getUserId(): void {
    console.log('getuserid')
    this.user_ID = localStorage.getItem('user_id')
    if (this.user_ID != null){
      this.router.navigate(['user/' + this.user_ID])
    }
  }

}
