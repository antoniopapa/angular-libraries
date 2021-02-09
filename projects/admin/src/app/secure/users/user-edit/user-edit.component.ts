import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {RoleService} from "../../../services/role.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Role, User} from "common";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  form: FormGroup;
  roles: Role[] = [];
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
    private route: ActivatedRoute,
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
    );

    this.route.params.subscribe(
      params => {
        this.userService.get(params.id).subscribe(
          (res: any) => {
            this.user = res.data;
            this.form.patchValue({
              first_name: this.user.first_name,
              last_name: this.user.last_name,
              email: this.user.email,
              role_id: this.user.role.id
            });
          }
        )
      }
    );
  }

  submit() {
    const data = this.form.getRawValue();

    this.userService.update(this.user.id, data).subscribe(
      res => {
        this.router.navigate(['/users']);
      }
    )
  }
}
