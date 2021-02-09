import {Component, OnInit} from '@angular/core';
import {Auth} from "../../classes/auth";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  canAccess(permissions) {
    return Auth.canAccess(permissions);
  }
}
