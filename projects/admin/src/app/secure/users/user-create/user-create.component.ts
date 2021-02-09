import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleService} from "../../../services/role.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {Role} from "common";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  form: FormGroup;
  roles: Role[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      role_id: ''
    });

    this.roleService.all().subscribe(
      (res: any) => {
        this.roles = res.data;
      }
    )
  }

  submit() {
    const data = this.form.getRawValue();

    this.userService.create(data).subscribe(
      res => {
        this.router.navigate(['/users']);
      }
    );
  }
}
