import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { MessagesFromPipe } from './Pipes/messages-from.pipe';
import { DragDropComponent } from './Components/drag-drop/drag-drop.component';
import { PeopleListComponent } from './Components/people-list/people-list.component';
import { ChatRecordsComponent } from './Components/chat-records/chat-records.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    MessagesFromPipe,
    DragDropComponent,
    PeopleListComponent,
    ChatRecordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
