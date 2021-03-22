import { Pipe, PipeTransform } from '@angular/core';
import { ChatMessage, ChatRecord } from '../Models/chathistory';

@Pipe({
  name: 'messagesFrom'
})
export class MessagesFromPipe implements PipeTransform {
  transform(chatRecords: ChatRecord[], selectedChat: string): ChatMessage[] {
    return chatRecords.find(x => x.chatName == selectedChat)?.chatMessages;
  }
}
