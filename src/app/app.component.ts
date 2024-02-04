import { Component } from '@angular/core';
import { registerFormConfig } from './constants/Registration-config';
import { FormInterface } from './models/from.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicform';
  registerForm = registerFormConfig as FormInterface;
  constructor() {
   
  }
  
  }
 
