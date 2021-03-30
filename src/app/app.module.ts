import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { DragDropComponent } from './Components/drag-drop/drag-drop.component';
import { PeopleListComponent } from './Components/people-list/people-list.component';
import { ChatRecordsComponent } from './Components/chat-records/chat-records.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    DragDropComponent,
    PeopleListComponent,
    ChatRecordsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
