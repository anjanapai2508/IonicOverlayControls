import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Objectives :
// 1. Overlay gradient
// 2. click to fade in and fade out : click should fade in and out without any transition
// 3. Idle time --> controls should fade out with transition.
// 4. clicking a button should reset timer.
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private topOverlayElement: HTMLDivElement;
  private bottomOverlayElement: HTMLDivElement;
  private timeoutDelay: any;
  constructor(public navCtrl: NavController) { }
  public toggleOverlayByUser() {
    console.log("into toggle overlay");
    this.topOverlayElement.classList.remove('fadeOut');
    this.bottomOverlayElement.classList.remove('fadeOut');
    this.resetIdleTimer();
    if (this.topOverlayElement.classList.contains('top-overlay-hidden') ||
      (this.bottomOverlayElement.classList.contains('bottom-overlay-hidden'))) {
      this.topOverlayElement.classList.remove('top-overlay-hidden');
      this.topOverlayElement.classList.add('fadeIn');
      this.bottomOverlayElement.classList.remove('bottom-overlay-hidden');
      this.bottomOverlayElement.classList.add('fadeIn');
    }
    else {
      this.topOverlayElement.classList.remove('fadeIn');
      this.topOverlayElement.classList.add('top-overlay-hidden');
      this.bottomOverlayElement.classList.remove('fadeIn');
      this.bottomOverlayElement.classList.add('bottom-overlay-hidden');
    }
  }
  public ngAfterViewInit() {
    this.topOverlayElement = document.getElementById('topOverlay') as HTMLDivElement;
    this.bottomOverlayElement = document.getElementById('bottomOverlay') as HTMLDivElement;
    this.resetIdleTimer();
  }
  public resetIdleTimer()
  {
    clearTimeout(this.timeoutDelay);
    this.timeoutDelay = setTimeout(() => {
      if (!this.topOverlayElement.classList.contains('top-overlay-hidden') ||
        (!this.bottomOverlayElement.classList.contains('bottom-overlay-hidden'))) {
        // Ideally either both controls will be shown or not shown so an or condition instead of and.
        this.topOverlayElement.classList.add('fadeOut', 'top-overlay-hidden');
        this.topOverlayElement.classList.remove('fadeIn');
        this.bottomOverlayElement.classList.add('fadeOut', 'bottom-overlay-hidden');
        this.bottomOverlayElement.classList.remove('fadeIn');
      }
    }, 4000);
    console.log("reset Idle timer and do something");
  }

}
