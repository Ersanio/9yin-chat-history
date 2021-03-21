import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { MessagesFromPipe } from './Pipes/messages-from.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    MessagesFromPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
