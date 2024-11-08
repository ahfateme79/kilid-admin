import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarType } from '../types/snackbar.type';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, snackType?: SnackbarType) {
    const _snackType: SnackbarType =
      snackType !== undefined ? snackType : 'neutral';

    this.snackBar.openFromComponent(SnackbarComponent, {
      panelClass: ['!bg-white', '!rounded-xl'],
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: { message: message, snackType: _snackType },
    });
  }

  dismiss() {
    this.snackBar.dismiss();
  }
}
