import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '' +
  '<h1>Hey guys</h1>' +
  '<p>{{ myObject.location }}</p>' +
  '<ul>' +
  ' <li *ngFor="let arr of  myArr">{{ arr }}</li>' +
  '</ul>' +
  '<ul>' +
  '<li *ngIf="myArr1">Yeah, I exist</li>' +
  '</ul>' +
  '<ul>' +
  '<li *ngIf="myArr1 != something">Some equals example</li>' +
  '</ul>' +
  '<ul>' +
  '<li *ngIf="myArr2; else otherTmpl">Other example</li>' +
  '</ul>' +
  '<ng-template #otherTmpl>No, I do</ng-template>' +
  '<div *ngIf="myArr2; then tmpl1 else tmpl2"></div>' +
  '<ng-template #tmpl1>Thruth</ng-template>' +
  '<ng-template #tmpl2>False</ng-template>' +
  '<p>' +
  '<img src="{{ angularLogo}}">' +
  '<img [src]="angularLogo">' +
  '<img bind-src="angularLogo">' +
  '<p>' +
  '<button [disabled]="buttonStatus">My button</button>' +
  '<p>' +
  '<button [disabled]="buttonStatus1 != buttonStatus1Value">My 2 button</button>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours'];

  myArr1 = 'something';

  myArr2 = false;

  angularLogo = 'https://resources.cloud.genuitec.com/wp-content/uploads/2017/03/angular4-269x300.png';

  buttonStatus = false;

  buttonStatus1 = 'enabled';
  buttonStatus1Value = 'enabled';
}
