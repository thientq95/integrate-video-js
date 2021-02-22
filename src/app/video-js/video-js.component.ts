import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import 'videojs-youtube';

@Component({
  selector: 'app-video-js',
  templateUrl: './video-js.component.html',
  styleUrls: ['./video-js.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoJsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('target', { static: true }) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/maintutorial-options.html
  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    techOrder: string[],
    sources: {
      src: string,
      type: string,
    }[],
  };
  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  pauseVideo(): void {
    console.log('run');
    console.log('Remaining Time: ' + this.player.remainingTime());
    console.log('Current Time: ' + this.player.currentTime());
  }

  playVideo(): void {
    console.log('play');
  }

  ngOnInit(): void {
    // instantiate Video.js
    // this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    //   console.log('onPlayerReady', this);
    // });
  }

  ngAfterViewInit(): void {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log(this);
      this.on('timeupdate', () => {
        console.log('Current Time: ' + this.currentTime());
        console.log('Remaining Time: ' + this.remainingTime());
      });
      this.on('ended', () => {
        console.log('ended');
      });
    });
  }

  ngOnDestroy(): void {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}
