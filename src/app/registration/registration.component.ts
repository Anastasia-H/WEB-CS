import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  password!: string;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  register( Username, FirstName, LastName, Email, Password): boolean {
    this.username = Username.value;
    this.firstName = FirstName.value;
    this.lastName = LastName.value;
    this.email = Email.value;
    this.password = Password.value;
    this.http.post(this.baseURL + 'register', null, {
      params: {
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      },
      observe: 'response'
    })

      .subscribe(response => {
        this.router.navigate(['/login']);
        console.log(response)
      });

    return false;
  }

}
