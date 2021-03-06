import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TickComponent } from './tick/tick.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TickComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
