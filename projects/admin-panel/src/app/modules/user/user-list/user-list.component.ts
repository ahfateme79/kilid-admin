import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveConfirmationModalComponent } from '../remove-confirmation-modal/remove-confirmation-modal.component';
import { SnackBarService } from '../../../core/services/snackbar.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUserResponse } from '../../../core/interfaces/user.interface';
import { CreateUserFormComponent } from '../create-user/create-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DisplayType } from '../../../core/types/display.type';
import { DisplayService } from '../../../core/services/display.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit, AfterViewInit {
  public display: DisplayType | null = this.displayService.display;
  userList: IUserResponse[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'roll',
    'status',
    ' ',
  ];
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private snackBarService: SnackBarService,
    private readonly displayService: DisplayService,
  ) {
    this.displayService.onDisplayChanged.subscribe((display: DisplayType) => {
      this.display = display;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeUser(user) {
    const dialogRef = this.dialog.open(RemoveConfirmationModalComponent, {
      maxWidth: '100%',
      backdropClass: ['backdrop-blur-md', 'bg-black/10'],
      panelClass: ['modal'],
      data: user,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.snackBarService.open(
          `${user.name.firstname} ${user.name.lastname} removed successfully!`,
          'success'
        );
        this.getUsers();
      }
    });
  }

  updateUser(user) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      maxWidth: '100%',
      backdropClass: ['backdrop-blur-md', 'bg-black/10'],
      panelClass: ['modal'],
      data: user,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.snackBarService.open(`user updated successfully!`, 'success');
        this.getUsers();
      }
    });
  }

  createUser() {
    const dialogRef = this.dialog.open(CreateUserFormComponent, {
      maxWidth: '100%',
      backdropClass: ['backdrop-blur-md', 'bg-black/10'],
      panelClass: ['modal'],
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.snackBarService.open(`user added successfully!`, 'success');
        this.getUsers();
      }
    });
  }
}
