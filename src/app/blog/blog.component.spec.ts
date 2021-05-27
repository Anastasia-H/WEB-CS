import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show articles', () => {
    component.showArticles('5')
    expect(component).toBeDefined();
  });

  it('should show article', () => {
    component.getArticleId('5')
    expect(component).toBeDefined();
  });

  it('should delete article', () => {
    component.getArticleId_delete('5')
    expect(component).toBeDefined();
  });

  it('should edit article', () => {
    component.getArticleId_edit('5')
    expect(component).toBeDefined();
  });

  it('should return id', () => {
    component.getUserId()
    expect(component).toBeDefined();
  });

});



// ng test --code-coverage
