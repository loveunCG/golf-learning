import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthexService } from '../../auth/authex/authex.service';
import { Alert } from 'selenium-webdriver';
import { TokenStorage } from '../../auth/token-storage.service';
import { environment } from '../../../environments/environment';

export const API_URL = environment.apiUrl;

@Component({
  selector: 'app-landing-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    signIn: boolean;
    signUpAlert: boolean;
    loginString: string;
    signUpResult: string;
    signInString: string;
    passwordString: string;
    loginButtonString: string;
    withOtherString: string;
    loginForm: FormGroup;
    siginForm: FormGroup;
    currentUser: any;
    constructor(
        private router: Router,
        private authService: AuthexService,
        private tokenService: TokenStorage,
    ) {
        this.loginForm = new FormGroup(
            {
                'email'    : new FormControl('', [Validators.required]),
                'password'    : new FormControl('', [Validators.required])
            }
        );
        this.siginForm = new FormGroup(
            {
                'first_name'    : new FormControl('', [Validators.required, Validators.minLength(2)] ),
                'last_name'    : new FormControl('', [Validators.required]),
                'email'    : new FormControl('', [Validators.email]),
                'password'    : new FormControl('', [Validators.required, Validators.minLength(6)])
            }
        );
        this.signUpAlert = false;
        this.signUpResult = '';
    }

    ngOnInit() {
        this.getUserProfile();
        this.signIn = false;
        this.loginString = "LOG IN";
        this.signInString = "CREATE AN ACCOUNT TO";
        this.passwordString = "New Password";
        this.loginButtonString = "CREATE ACCOUNT";
        this.withOtherString = "or create account with";
    }

    getUserProfile() {
        this.tokenService.getUserInfo().subscribe(
            user => {
                this.currentUser = user;
                if (this.currentUser && this.currentUser.image) {
                    // this.currentUser.image = `${API_URL}/${this.currentUser.image}`;
                    this.currentUser.image = '/assets/images/user.png';
                }
            }
        );
    }

    onLoggedin() {
        if (this.loginForm.valid && this.signIn === true) {
            this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
                res => {
                  if (res) {
                    this.router.navigate(['/course']);
                  } else {

                  }
                },
                err => {
                    alert('login fail! Please retry again!');
                }
            );
        }
    }

    onSignUp() {
        if (this.siginForm.valid && !this.signIn) {
            this.authService.signUp(this.siginForm.value).subscribe(
                res => {
                  this.signUpResult = res.message;
                  this.signUpAlert = true;
                  setTimeout(() => this.signUpAlert = false, 5000);
                },
                err => {
                  this.signUpResult = err.message;
                  this.signUpAlert = true;
                  setTimeout(() => this.signUpAlert = false, 5000);
                  console.log(err);
                  alert('login fail! Please retry again!');
                }
            );
        } else {
          this.signUpResult = 'Submit has error, Please check your information';
          this.signUpAlert = true;
          setTimeout(() => this.signUpAlert = false, 5000);
        }
    }


    isFieldValid(field: string) {
      return !this.siginForm.get(field).valid && this.siginForm.get(field).touched;
    }

    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }

    onLogIn() {
        this.signIn = !this.signIn;
        if (this.signIn == true) {
            this.loginString = "Create Account";
            this.signInString = "LOGIN TO";
            this.passwordString = "Password";
            this.loginButtonString = "LOGIN";
            this.withOtherString = "or login with";
        } else {
            this.loginString = "Login";
            this.signInString = "CREATE AN ACCOUNT TO";
            this.passwordString = "New Password";
            this.loginButtonString = "CREATE ACCOUNT";
            this.withOtherString = "or create account with";
        }
    }

    onLogOut() {
        this.authService.logout();
        this.getUserProfile();
    }
}
