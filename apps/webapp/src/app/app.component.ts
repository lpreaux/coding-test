import { Component } from '@angular/core';
import { ClerkService } from 'ngx-clerk';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private _clerk: ClerkService) {
    this._clerk.__init({ publishableKey: environment.CLERK_PUBLISHABLE_KEY });
  }
}
