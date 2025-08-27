import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login';

@Component({
  selector: 'app-nav',
  imports: [ReactiveFormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {}
