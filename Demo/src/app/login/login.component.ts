import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;

    // console.log(this.http.post(''))

    if (this.loginForm.invalid === true) {
      this.submitted = false;
      return;
    } else {
      const data: any = Object.assign(this.loginForm.value);
      console.log(data);

      // tslint:disable-next-line:no-shadowed-variable
      this.http.post('/api/login', data).subscribe((data: any) => {
        console.log(data);

      }, error => {
        console.log(error);
      });
      return;
    }
  }


}
