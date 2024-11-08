import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { IUserRequest } from '../../../core/interfaces/user.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserFormComponent implements OnInit {
  createUserForm!: FormGroup;
  userRoles = ['Admin', 'User', 'Viewer'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<CreateUserFormComponent>
  ) {}

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      activate: [false],
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

    this.userService.createUsers(data).subscribe((res) => {
      if (res) {
        this.dialogRef.close('success')
      }
    });
  }
}
