import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  title!: string;
  text!: string;
  user_id!: string;
  article_ID!: string | null;
  user_ID!: string | null;
  baseURL = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  editArticle(Title, Text): boolean{
    this.title = Title.value;
    this.text = Text.value;
    this.article_ID = localStorage.getItem('article_id')
    this.http.put(this.baseURL + 'article/edit/'+this.article_ID, null, {
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
