import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
// @ts-ignore
import { AuthenticationService } from '@app/_services';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {elementAt, first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username!: string;
    password!: string;
    res!: string | null;
    baseURL = 'http://127.0.0.1:5000/';

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {

    }

    onSubmit(Username, Password) {
      this.username = Username.value;
      this.password = Password.value;
      Username.value = '';
      Password.value = '';
      console.log('OnSubmit', this.username, this.password)

      this.http.post(this.baseURL + 'login', null, {
        params: {
          username: this.username,
          password: this.password
        },
        observe: 'response'
      })
        .subscribe((response) => {
          console.log('response',response)

          // @ts-ignore
          localStorage.setItem('user_id',response.body['id']);
          this.router.navigate(['/home']);
        });
      return false;
    }
}

//
//   username !: string;
//   password !: string;
//   baseURL = 'http://127.0.0.1:5000/';
//
//   constructor(private http: HttpClient, private router: Router) { }
//
//   ngOnInit(): void {
//   }
//
//   login(Username, Password): boolean {
//     this.username = Username.value;
//     this.password = Password.value;
//     Username.value = '';
//     Password.value = '';
//     this.http.post<any>(this.baseURL + 'login', null, {
//       params: {
//         username: this.username,
//         password: this.password
//       },
//       observe: 'response'
//     })
//       .subscribe((response) => {
//         console.log(response);
//         // @ts-ignore
//         localStorage.setItem('id', response.body['id']);
//         // @ts-ignore
//         localStorage.setItem('logged_user_id', response.body['access_token']);
//         // @ts-ignore
//         localStorage.setItem('refresh_token', response.body['refresh_token']);
//         this.router.navigate(['/user/' + localStorage.getItem('id')]);
//       });
//     return false;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import {AppService} from "../app.service";
// import validate = WebAssembly.validate;
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   credentials = {username: '', password: ''};
//   baseURL = 'http://127.0.0.1:5000/';
//
//   constructor(private app: AppService, private http: HttpClient, private router: Router) {
//   }
//
//   ngOnInit(): void {
//   }
//
//   // login(Username, Password) {
//   login() {
//     // this.credentials.username = Username.value;
//     // this.credentials.password = Password.value;
//     this.app.authenticate(this.credentials, () => {
//         this.router.navigateByUrl(this.baseURL + 'login',);
//     });
//     return false;
//   }
//
// }


