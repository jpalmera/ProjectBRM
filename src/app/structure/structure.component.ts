import { Component, OnInit } from '@angular/core';
import { first } from './first';
import { images, cards } from './images';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
  first = first;
  images = images;
  cards = cards;

  constructor() { }

  ngOnInit() {
  }

}
