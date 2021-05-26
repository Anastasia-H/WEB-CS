import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  user_ID!: string | null;
  articles: any = [];
  list$!: Subject<any[]>;
    article_ID!: string;
    title!: string;
    text!: string;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.user_ID = localStorage.getItem('user_id')
    this.showArticles(this.user_ID)
  }

  showArticles(id): void {
    this.http.get(this.baseURL + 'blog/' + id)
      .pipe(
        tap(articles => console.log("articles array", articles))
      )
      .subscribe(response => this.articles = response)
  }

  getArticleId(id): void {
    localStorage.setItem('article_id', id)
    this.router.navigate(['article/' + id])
  }

  getArticleId_edit(id): void {
    localStorage.setItem('article_id', id)

    this.router.navigate(['article/edit/' + id])
  }

  getArticleId_delete(id): void {
    localStorage.setItem('article_id', id)

    this.http.delete(this.baseURL + 'article/delete/' + id)
      // .pipe(
      //   tap(articles => console.log("articles array", articles))
      // )
      .subscribe(response => this.articles = response)
    this.user_ID = localStorage.getItem('user_id')
    this.router.navigate(['blog/' + this.user_ID])
  }

  getUserId(): void {
    console.log('getuserid')
    this.user_ID = localStorage.getItem('user_id')
    if (this.user_ID != null){
      this.router.navigate(['user/' + this.user_ID])
    }
  }

}
