import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

import { LoginComponent } from './login.component';
import {OnInit} from '@angular/core';

export class LoginDataFormDocument implements OnInit {
  submitted = false;
  userForm: FormGroup;

  constructor() {
  }
  ngOnInit() {
  }

}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
