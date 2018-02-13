import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSeleccionado: any;

  constructor(public _ys: YoutubeService) {
    _ys.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  ngOnInit() {
  }

  verVideo(video: any) {
    this.videoSeleccionado = video;
    $('#exampleModal').modal();
  }

}
