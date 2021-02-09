import {Component, OnInit} from '@angular/core';
import {Auth} from "../../classes/auth";
import {User} from "common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  title = 'Welcome';
  description = 'Share links and earn 10% of the product price!';

  constructor() {
  }

  ngOnInit(): void {
    this.user = Auth.user;
    if(this.user){
      this.title = '$' + this.user.revenue;
      this.description = 'You have earned in total';
    }
  }

}
