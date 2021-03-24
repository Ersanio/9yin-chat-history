import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatRecord } from 'src/app/Models/chathistory';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public records: ChatRecord[];
  @Output() public selectedChat = new EventEmitter<string>();

  public selectedChatName: string;

  selectChat(name: string): void {
    this.selectedChat.emit(name);
    this.selectedChatName = name;
  }
}
