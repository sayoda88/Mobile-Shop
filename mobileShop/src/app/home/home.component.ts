import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  backgroundUrl="assets/login/Vector.png"
  constructor(private _Router:Router){}
  navAdmin(){
    localStorage.setItem('role','admin');
   return this._Router.navigate(['/Login','admin']);
  }
  navUser(){
    localStorage.setItem('role','user');
    return this._Router.navigate(['/Login','user']);
   }
}
