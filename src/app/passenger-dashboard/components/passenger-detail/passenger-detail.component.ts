import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import {  } from 'events';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input type='text' [value]='detail.fullname' #name (input)="onNameChange(name.value)">
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <p>{{ passenger | json }}</p>
      <div class="date">
        Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not CheckedIn' }}
      </div>
      <div class='children'>
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit{

  ngOnChanges(changes){
    if(changes.detail){
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('==ngOnChanges==');
  }

  ngOnInit(){
    console.log('==ngOnInit==');
  }

  @Input()
  detail: Passenger;
  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  editing: boolean = false;

  onNameChange(value: string){
    this.detail.fullname = value;
  }
  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove(){
    this.remove.emit(this.detail);
  }
}
