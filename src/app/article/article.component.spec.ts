import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
        httpMock = getTestBed().get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show article', () => {
    component.showArticle('5')
    expect(component).toBeDefined();
  });

  it('should return id', () => {
    component.getUserId()
    expect(component).toBeDefined();
  });

  it('should return id', () => {
    component.ngOnInit()
    expect(component).toBeDefined();
  });

});
