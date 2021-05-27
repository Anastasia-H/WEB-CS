import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
    let httpMock: HttpTestingController;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be undefined', () => {
    let name: object = {
      value: 'mmm'
    },
      password: object = {
        value: 'password'
      }
    component.onSubmit(name,password);
    expect(component).toBeDefined();
});
  });
