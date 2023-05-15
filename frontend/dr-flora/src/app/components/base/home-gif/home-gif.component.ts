import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-gif',
  templateUrl: './home-gif.component.html',
  styleUrls: ['./home-gif.component.scss']
})
export class HomeGifComponent {

  options: AnimationOptions = {    
    path: '/assets/lottie/home_gif.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

  // This is the component function that binds to the animationCreated event from the package  
  animationCreated(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }
}
