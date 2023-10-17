import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  isLogedOut: boolean = false;
  constructor(private _Router: Router) {
    if (localStorage.getItem('role') == 'admin' && localStorage.getItem('role') !== null) {
      this.isAdmin = true;
    }
    else if (localStorage.getItem('role') == 'user' && localStorage.getItem('role') !== null) {
      this.isAdmin = false;
    }
  }
  ngOnInit(): void {
    this.navAdmin();
    this.navUser();
  }


  navAdmin() {
    localStorage.setItem('role', 'admin');
    return this._Router.navigate(['/Login', 'admin']);
  }
  navUser() {
    localStorage.setItem('role', 'user');
    return this._Router.navigate(['/Login', 'user']);
  }
  logout(){
    localStorage.removeItem('role');
    this.isLogedOut=true;
    return this._Router.navigate(['/Home']) ;
  }
}
