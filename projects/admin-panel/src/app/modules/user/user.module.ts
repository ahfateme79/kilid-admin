import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveConfirmationModalComponent } from './remove-confirmation-modal/remove-confirmation-modal.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateUserFormComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserFormModule } from '../../../../../user-form-library/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    title: 'users',
  },
];

@NgModule({
  declarations: [
    UserListComponent,
    RemoveConfirmationModalComponent,
    CreateUserFormComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatPaginator,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    UserFormModule,
    
  ],
})
export class UserModule {}
