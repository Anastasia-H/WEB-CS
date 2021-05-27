import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('HomeComponent', () => {
  let httpMock: HttpTestingController;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should return articles', () => {
    component.showArticles();
    expect(component).toBeUndefined();
  });

  it('should return article id', () => {
    component.getArticleId('5')
    expect(component).toBeUndefined();
  });

  it('should return id', () => {
    component.getUserId()
    expect(component).toBeUndefined();
  });
});
