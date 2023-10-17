import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  backgroundUrl="assets/login/Vector.png"
  isLogedOut: boolean = false;

  adminLogin:FormGroup=new FormGroup({
    'userName':new FormControl(''),
    'password':new FormControl('')
  });
  constructor(private _Router:Router ){}
  login(){
    
    return this._Router.navigate(['/Products'])
  }
}
