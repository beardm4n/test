import { Component, OnInit } from '@angular/core';

import { MusicComposition } from '../music-composition.interface';
import { MusicCompositionService } from '../music-composition.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  private musicComposition: MusicComposition[];
  private numOfPages: number;
  private numOfItemsPerPage = 5;

  public tracks: MusicComposition[];
  public arrayOfNumPages: number[];

  constructor(
    private musicCompositionService: MusicCompositionService,
  ) { }

  ngOnInit(): void {
    this.musicComposition = this.musicCompositionService.musicComposition;
    this.numOfPages = Math.ceil(this.musicComposition.length / this.numOfItemsPerPage);
    this.arrayOfNumPages = new Array(this.numOfPages);
    this.tracks = this.musicComposition.slice(0, this.numOfItemsPerPage);
  }

  changePage(e) {
    const curPage = +e.target.innerText;
    const start = (curPage - 1) * this.numOfItemsPerPage;
    const end = start + this.numOfItemsPerPage;

    this.tracks = this.musicComposition.slice(start, end);
  }
}
