import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { IUserResponse } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  userList: IUserResponse[];

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.userList = res;
    });
  }
}
