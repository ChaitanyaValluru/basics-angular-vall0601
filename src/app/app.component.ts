import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="body app">
<!--
      <div class="head-style">Template Binding</div>
      <h3>
        {{ title + '..!!!' }}
      </h3>
      <h3 [innerHTML]="title + '..!!!'"></h3>
      <img [src]="imgSrc">
      <input type="text" [value]="name">
      <br><br>
      <hr>
      <div class="head-style">Event Binding</div>
      <input type="text" [value]="name" (blur)="handleBlur($event)" (input)="handleInput($event)">
      <button (click)="handleClick()">Change Name</button>
      <br><br>
      <hr>
      <div class="head-style">Two-way data Binding</div>
      <input type="text" [ngModel]="name" (ngModelChange)="handleChange($event)"> <br>
      <input type="text" [(ngModel)]="name">
      <br><br>
      <hr>
      <div class="head-style">Template #ref variables</div>
      <button (click)="handleChange(username.value)">Get Value</button>
      <input type="text" #username>
      <div> {{ name }} </div>
      <br><br>
      <hr>
      <div class="head-style">*ngFor</div>
      <div class="head-style">Airline Passengers</div>
      <ul>
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            {{ i + 1 }}: {{ passenger.fullname }}
          </li>
        </template>
      </ul>
      <div>========================</div>
      <div class="head-style">Airline Passengers</div>
      <ul>
        <li *ngFor="let passenger of passengers;let i=index;">
          {{ i + 1 }}: {{ passenger.fullname }}
        </li>
      </ul>
      <br><br>
      <hr>
      <div class="head-style">ngClass & ngStyle</div>
      <div>ngClass</div>
      <ul>
        <li *ngFor="let passenger of passengers;let i=index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          <span class="status" [ngClass]="{ 'checked-in': passenger.checkedIn, 'checked-out': !passenger.checkedIn }"></span>
          {{ i + 1 }}: {{ passenger.fullname }}
        </li>
      </ul>
      <div>ngStyle</div>
      <ul>
        <li *ngFor="let passenger of passengers;let i=index;">
          <span class="status" [style.backgroundColor]="passenger.checkedIn ? '#2ecc71' : '#c0392b'"></span>
          <span class="status" [ngStyle]="{ 'background-color': passenger.checkedIn ? '#2ecc71' : '#c0392b' }"></span>
          {{ i + 1 }}: {{ passenger.fullname }}
        </li>
      </ul>
      <br><br>
      <hr>
      <div class="head-style">Pipes</div>
      <ul>
        <li *ngFor="let passenger of passengers;let i=index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i + 1 }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not CheckedIn' }}
          </div>
          <div class='children'>
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
      <br><br><br><br><br><br><br><br><br><br><br><br>
-->
      <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'ChAiTu';
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  imgSrc: string = 'img/logo.svg';
  constructor(){
    this.title = 'Learn Angular Fundamentals';
  }
  handleBlur(event: any){
    console.log(event.target.value);
    this.name = event.target.value;
  }
  handleInput(event: any){
    console.log(event.target.value);
    this.name = event.target.value;
  }
  handleClick(){
    this.name = 'Radha Krishna Chaitanya';
  }
  handleChange(value: string){
    this.name = value;
  }

  

}
