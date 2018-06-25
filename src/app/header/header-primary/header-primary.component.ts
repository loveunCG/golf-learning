import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-primary',
  templateUrl: './header-primary.component.html',
  styleUrls: ['./header-primary.component.css']
})
export class HeaderPrimaryComponent implements OnInit {
  currentUser: any;

  constructor(
    private tokenService: TokenStorage,
    private router: Router,
  ) {
    this.getUserProfile();
   }

  ngOnInit() {
  }

  getUserProfile() {
      this.tokenService.getUserInfo().subscribe(
          user => {
              this.currentUser = user;
              console.log(user);
              if (this.currentUser && this.currentUser.image) {
                  // this.currentUser.image = `${API_URL}/${this.currentUser.image}`;
                  this.currentUser.image = '/assets/images/user.png';
              }
          }
      );
  }

  onProfile () {

  }

  logout () {
    console.log('heere');
    this.tokenService.clear();
    this.router.navigate(['/']);
  }

}
