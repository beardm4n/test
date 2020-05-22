import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @ViewChildren('star') stars: QueryList<ElementRef>

  constructor() { }

  ngOnInit(): void {
  }

  click(e) {
    if (e.target.tagName === 'I') {
      e.target.classList.add('active');
    }
  }

  onMouseover(e) {
    if (e.target.tagName === 'I') {
      const stars = this.stars.map(item => item.nativeElement);
      if (e.target.classList.contains('star')) {
        e.target.classList.add('active');
        // for (let i = 0; stars.length; i++) {
        //
        // }
      }
    }
  }
}
