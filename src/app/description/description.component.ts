import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { components } from '../components';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  allComponents = components;
  component;
  count;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.component = components[+params.get('componentId')];
      this.count = +params.get('componentId');
    });
  }

}
