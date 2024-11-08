import { Component, Input } from '@angular/core';
import { IUserResponse } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() list:IUserResponse[]
}
