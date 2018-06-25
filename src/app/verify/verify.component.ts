import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthexService } from '../auth/authex/authex.service';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  public verifyToken: string;
  public isLoading: boolean;
  public result: string;
  public counter: number;

  constructor(private route: ActivatedRoute, private authService: AuthexService, private router: Router) {
    this.isLoading = true;
    this.result = '';
    route.params.subscribe(params => {
      this.verifyToken = params['param'];
      this.verifyTokenProc();
    });
  }

  ngOnInit() {
  }

  verifyTokenProc () {
    const param = {
      verification_code: this.verifyToken
    };
    this.authService.verifyEmail(param).subscribe(
      res => {
        setTimeout( () => {
          this.result = 'This Account has been activated!';
            this.isLoading = false;
            this.__counter();
            setTimeout( () => {
              this.router.navigate(['/']);
            }, 10000);
        }, 2000);
      },
      err => {
        console.log(err);
        setTimeout( () => {
          this.result = 'This link has expried or incorrect!';
          console.log(this.result);
          this.isLoading = false;
          this.__counter();
          setTimeout( () => {
            this.router.navigate(['/']);
          }, 10000);
        }, 2000);
      }
    );
  }

  __counter () {
    let countdown = 10;
    setInterval( () => {
      countdown = --countdown <= 0 ? 10 : countdown;
      this.counter = countdown;
    }, 1000);
  }
}
