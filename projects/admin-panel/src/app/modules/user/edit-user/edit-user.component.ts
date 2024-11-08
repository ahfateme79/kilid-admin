import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../core/services/user.service';
import { IUserRequest } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  editUserForm!: FormGroup;
  userRoles = ['Admin', 'User', 'Viewer'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditUserComponent>
  ) {}

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      firstName: [this.data?.name?.firstname || '', Validators.required],
      lastName: [this.data?.name?.lastname || '', Validators.required],
      email: [this.data?.email || '', [Validators.required, Validators.email]],
      role: [this.data?.role || '', Validators.required],
      activate: [this.data?.activate || false],
    });
  }

  onFormSubmit(form: FormGroup) {
    if (form.valid) {
      this.createUser(form);
      return true;
    } else {
      return false;
    }
  }

  createUser(form: FormGroup) {
    const data: IUserRequest = {
      email: form.value.email,
      username: 'johnd',
      password: 'm38rmF$',
      name: {
        firstname: form.value.firstName,
        lastname: form.value.lastName,
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: '1-570-236-7033',
    };

    this.userService.updateUsers(this.data.id, data).subscribe((res) => {
      if (res) {
        this.dialogRef.close('success');
      }
    });
  }
}
