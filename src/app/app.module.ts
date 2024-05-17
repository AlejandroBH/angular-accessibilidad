import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiNoButtonsGroupModule } from './shared/components/si-no-buttons-group/si-no-buttons-group.module';
import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SiNoButtonsGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
