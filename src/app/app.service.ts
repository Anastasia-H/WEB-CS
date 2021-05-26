import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AppService {

  authenticated = false;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get(this.baseURL + 'login', {headers: headers})
          .subscribe(response => {
            if (response['username']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

}

