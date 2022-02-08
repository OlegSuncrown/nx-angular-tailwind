import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientShellModule } from '@nx/client-features-shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
