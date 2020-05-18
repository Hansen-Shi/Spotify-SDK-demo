import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
   this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {

    this.submitted = true;
    console.log(this.userForm);
    if (this.userForm.invalid === true) {
      console.log('invalid form brother');
      return;
    } else {
      const data: any = Object.assign(this.userForm.value);
      console.log(data);

      // tslint:disable-next-line:no-shadowed-variable
      this.http.post('/api/signup', data).subscribe((data: any) => {

      }, error => {
        console.log(error);
      });

      this.registered = true;

    }
    /*
    this.submitted = true;

    if (this.userForm.invalid === true) {
      return;
    } else {
      this.registered = true;
    }*/
  }

}
