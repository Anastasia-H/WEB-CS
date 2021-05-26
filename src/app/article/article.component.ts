import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article_ID!: string | null;
  user_ID!: string | null;
  title!: any;
  text!: any;

  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article_ID = localStorage.getItem('article_id')
    localStorage.setItem('article_id', '')
    this.showArticle(this.article_ID)
  }

  showArticle(id): void {

    this.http.get(this.baseURL + 'article/' + id)
      .pipe(

        tap(article => console.log("article", article))
      )
      .subscribe(
        response => {
          this.text = response['text'];
          this.title = response['title']
        })
  }

  getUserId(): void {
    console.log('getuserid')
    this.user_ID = localStorage.getItem('user_id')
    if (this.user_ID != null){
      this.router.navigate(['user/' + this.user_ID])
    }
  }

}
