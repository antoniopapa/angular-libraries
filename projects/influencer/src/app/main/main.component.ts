import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Auth} from "../classes/auth";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ready = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user().subscribe(
      (res: any) => {
        Auth.user = res.data;
        this.ready = true;
      },
      err => {
        this.ready = true;
      }
    );
  }

}
