import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user_id!: string | null;
  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')
    this.showUser(this.user_id)
  }

  showUser(id): void {
    this.http.get(this.baseURL + 'user/' + id)
      .pipe(
        tap(user => console.log("user", user))
      )
      .subscribe(
        response => {
          this.firstName = response['firstName'];
          this.lastName = response['lastName'];
          this.username = response['username'];
          this.email = response['email']
        })
  }
}
