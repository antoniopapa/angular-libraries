import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auth} from "../../classes/auth";
import {AuthService} from "../../services/auth.service";
import {User} from "common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoForm: FormGroup;
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    const user = Auth.user;

    this.infoForm = this.formBuilder.group({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    });

    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: ''
    });
  }

  infoSubmit() {
    const data = this.infoForm.getRawValue();

    this.authService.updateInfo(data).subscribe(
      (user: User) => {
        Auth.user = user;
      }
    );
  }

  passwordSubmit() {
    const data = this.passwordForm.getRawValue();

    this.authService.updatePassword(data).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
