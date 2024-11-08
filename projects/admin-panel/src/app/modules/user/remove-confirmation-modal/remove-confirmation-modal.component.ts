import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-remove-confirmation-modal',
  templateUrl: './remove-confirmation-modal.component.html',
  styleUrl: './remove-confirmation-modal.component.scss',
})
export class RemoveConfirmationModalComponent {
  constructor(
    private dialogRef: MatDialogRef<RemoveConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private userService: UserService
  ) {}

  removeUser() {
    this.userService.removeUser(this.data.id).subscribe((res) => {
      if (res) {
        this.dialogRef.close('success');
      }
    });
  }
}
