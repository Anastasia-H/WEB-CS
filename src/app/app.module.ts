import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import {RouterModule} from "@angular/router";
import { EditArticleComponent } from './edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ArticleComponent,
    CreateArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
