import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
  },
];

@NgModule({
  declarations: [DashboardComponent,ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class DashboardModule {}
