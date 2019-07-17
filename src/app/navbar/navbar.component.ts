import { Component, OnInit } from '@angular/core';

import { menus } from './menus';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menus = menus;
  telephone: string;

  constructor() { 

    this.telephone = "936.760.7800";
  }

  ngOnInit() {
  }

}
