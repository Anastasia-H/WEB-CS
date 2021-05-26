import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any = [];
  list$!: Subject<any[]>;
    article_ID!: string;
    user_ID!: string | null;
    title!: string;
    text!: string;

  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log('user_id', localStorage.getItem('user_id'))
    this.showArticles()
  }

  showArticles(): void {

    this.http.get(this.baseURL + 'home')
      .pipe(

        tap(articles => console.log("articles array", articles))
      )
      .subscribe(response => this.articles = response)
  }

  getArticleId(id): void {
    localStorage.setItem('article_id', id)
    this.router.navigate(['article/' + id])
  }

  getUserId(): void {
    console.log('getuserid')
    this.user_ID = localStorage.getItem('user_id')
    if (this.user_ID != null){
      this.router.navigate(['user/' + this.user_ID])
    }
  }

}
