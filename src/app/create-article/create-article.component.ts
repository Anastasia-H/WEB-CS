import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  title!: string;
  text!: string;
  user_id!: string;
  article_ID!: string;
  user_ID!: string | null;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  createArticle(Title, Text): boolean{
    this.title = Title.value;
    this.text = Text.value;
    this.user_ID = localStorage.getItem('user_id')
    this.http.post(this.baseURL + 'article/create/'+this.user_ID, null, {
      params: {
        title: this.title,
        text: this.text,
      },
      observe: 'response'
    })

    .subscribe(response => {
        // this.article_ID = response['article_ID']
        // @ts-ignore
      localStorage.setItem('article_id', response.body['article_ID'])
        this.router.navigate(['article/'+localStorage.getItem('article_id')]);
        console.log(response)
      });
    return false;
  }
}
