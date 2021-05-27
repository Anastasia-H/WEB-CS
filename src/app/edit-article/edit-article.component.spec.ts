import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { EditArticleComponent } from './edit-article.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('EditArticleComponent', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArticleComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);

  });

  it('should create', () => {
    component.ngOnInit()
    expect(component).toBeTruthy();
  });

  it('should edit create', () => {
    component.editArticle('title','text')
    expect(component).toBeDefined();
  });


});
