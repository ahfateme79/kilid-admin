import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() roles: string[] = [];
  statusText: string = 'Offline';

  ngOnInit(): void {
    this.formGroup.get('activate')?.valueChanges.subscribe((isActive) => {
      this.statusText = isActive ? 'Active' : 'Offline';
    });
  }
}
