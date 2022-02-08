import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'client-shell',
  templateUrl: './client-shell.component.html',
  styleUrls: ['./client-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientShellComponent {
  // constructor() {}
  // ngOnInit(): void {
  //   console.log(ClientShellComponent.name);
  // }
}
