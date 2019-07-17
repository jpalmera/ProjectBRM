import { Component, OnInit } from '@angular/core';
import { latestblog } from './latestblog'
import { menus } from '../navbar/menus';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  latestblogs = latestblog;
  name = 'Jaan Palmera Almanza';
  menus = menus;

  constructor() { 

  }

  ngOnInit() {
  }

}
