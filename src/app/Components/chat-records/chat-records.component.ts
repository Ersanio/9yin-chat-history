import { Component, Input } from '@angular/core';
import { ChatMessage, ChatRecord } from 'src/app/Models/chathistory';

@Component({
  selector: 'app-chat-records',
  templateUrl: './chat-records.component.html',
  styleUrls: ['./chat-records.component.scss']
})
export class ChatRecordsComponent {
  @Input() public records: ChatRecord[];
  @Input() public selectedChat: string;

  getCurrentRecord(): ChatMessage[] {
    return this.records.find(x => x.chatName === this.selectedChat)?.chatMessages;
  }
}
