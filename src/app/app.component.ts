import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'video-js';

  player;
  constructor() {
    
  }
  ngAfterViewInit(): void {
    // const ytplayer = document.getElementById('movie_player');
    // ytplayer.getCurrentTime();
  }
}
