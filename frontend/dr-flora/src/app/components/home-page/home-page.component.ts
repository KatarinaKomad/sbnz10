import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  
  // options: AnimationOptions = {    
  //   path: '/assets/lottie/home_gif.json'  
  // };  

  ngOnInit(): void {  }

  // // This is the component function that binds to the animationCreated event from the package  
  // onAnimate(animationItem: AnimationItem): void {    
  //   console.log(animationItem);  
  // }
  constructor(){

  }
}
