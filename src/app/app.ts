import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Headers} from '../components/headers/headers';

@Component({
  selector: 'app-root',
  imports: [Headers],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('SoftFront');
}
