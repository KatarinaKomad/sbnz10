import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
   
  ngOnInit(): void {  }

  constructor(private router: Router){}
  showSignin: boolean = false;

  onSignin() {
    this.showSignin = true;
    console.log(this.showSignin)
    // this.router.navigateByUrl('/signin')
  }

  onSignup() {

  }
}
