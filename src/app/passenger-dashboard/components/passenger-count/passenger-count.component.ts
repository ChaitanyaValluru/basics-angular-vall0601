import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers..!!!</h3>
      <div>
        Total Checked In: {{ checkedInCount() }} / {{ items?.length }}
      </div>
    </div>
  `
})
export class PassengerCountComponent{
  constructor(){}

  @Input()
  items: Passenger[];

  checkedInCount(): number{
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
