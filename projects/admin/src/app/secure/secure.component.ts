import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Auth} from "../classes/auth";
import {User} from "common";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.user().subscribe(
      (res: any) => {
        this.user = res.data;
        Auth.user = this.user;
      },
      err => {
        this.router.navigate(['/login']);
      }
    )
  }

}
