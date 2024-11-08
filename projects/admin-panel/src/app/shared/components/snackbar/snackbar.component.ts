import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { ISnackbarConfig } from '../../../core/interfaces/base.interface';
import { SnackBarService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'snackbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  snackbarConfig: ISnackbarConfig;

  constructor(
    private snackBarService: SnackBarService,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public sbRef: MatSnackBarRef<SnackbarComponent>
  ) {}

  ngOnInit() {}

  dismiss() {
    this.snackBarService.dismiss();
  }

  getStyles() {
    if (this.data.snackType === 'checkoutError') {
      return {
        backgroundColor: '#FFF2F2',
      };
    }
    return {
      backgroundColor: `var(--white)`,
    };
  }

  getColorStyles() {
    if (this.data.snackType === 'checkoutError') {
      return {
        color: 'var(--error)',
      };
    }
    return {
      color: `var(--${this.data.snackType})`,
    };
  }
}
