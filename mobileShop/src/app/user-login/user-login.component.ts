import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  backgroundUrl="assets/login/Vector.png";
  isLogedIn: boolean = false;
  userLogin:FormGroup=new FormGroup({
    'userName':new FormControl(''),
    'password':new FormControl('')
  });
  constructor(private _Router:Router ){}
  login(){
    //window.location.reload();
    return this._Router.navigate(['/Order'])
  }
}
