import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Auth} from "../../classes/auth";
import {User} from "common";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  lastPage: number;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(currentPage = 1) {
    this.userService.all({page: currentPage}).subscribe(
      (res: any) => {
        this.users = res.data;
        this.lastPage = res.meta.last_page;
      }
    )
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.userService.delete(id).subscribe(
        res => {
          this.users = this.users.filter(el => el.id !== id);
        }
      );
    }
  }

  canAccess(permissions) {
    return Auth.canAccess(permissions);
  }
}
