import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register', () => {
    component.register('username','first_name','last_name','email@email.com','pass');
    expect(component).toBeDefined();
  });
});
