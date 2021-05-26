import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from '../registration/registration.component';
import {LoginComponent} from "../login/login.component";
import {CreateArticleComponent} from "../create-article/create-article.component";
import {HomeComponent} from "../home/home.component";
import {ArticleComponent} from "../article/article.component";
import {AboutComponent} from "../about/about.component";
import {ProfileComponent} from "../profile/profile.component";
import {BlogComponent} from "../blog/blog.component";
import {EditArticleComponent} from "../edit-article/edit-article.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'article/create',
    component: CreateArticleComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'user/:id',
    component: ProfileComponent,
  },
  {
    path: 'article/edit/:id',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
