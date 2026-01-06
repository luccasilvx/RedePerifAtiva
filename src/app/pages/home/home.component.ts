import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  images: string [] = [
    'assets/PerifAtiva/IMG_5348.JPG',
    'assets/PerifAtiva/imob.jpg',
    'assets/PerifAtiva/IMG_5346.JPG'

  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide(){
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide(){
    if(this.currentIndex < this.images.length - 1){
      this.currentIndex++;
    }else{
      this.currentIndex = 0;
    }
  }
}
