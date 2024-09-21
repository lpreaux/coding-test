import { Component, inject, Signal } from '@angular/core';
import { ActiveSessionResource, ClerkService } from 'ngx-clerk';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss',
})
export class MainLayout {
  private _clerk = inject(ClerkService);
  protected activeSession$: Signal<ActiveSessionResource | null | undefined> =
    toSignal(this._clerk.session$);
}
