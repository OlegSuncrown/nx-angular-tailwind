import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientShellModule } from '@nx/client/shell';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ClientShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
