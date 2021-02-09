import { Injectable } from '@angular/core';
import { ChatHistory, ChatMessage, ChatRecord } from '../Models/chathistory';
import { Base64decoderService } from './base64decoder.service';

@Injectable({
  providedIn: 'root'
})
export class ChatmapperService {
  constructor(private base64decoder: Base64decoderService) { }

  public AnyToChat(xmlInput: any): ChatHistory {
    var history = new ChatHistory();
    history.chatRecords = [];

    if (Symbol.iterator in Object(xmlInput.Records.Record)) {
      for (const record of xmlInput.Records.Record) {
        history.chatRecords.push(this.parseMessagesFromRecord(record));
      }
    } else {
      history.chatRecords.push(this.parseMessagesFromRecord(xmlInput.Records.Record));
    }
    return history;
  }

  parseMessagesFromRecord(record: any): ChatRecord {
    const messages: ChatMessage[] = [];
    if (Symbol.iterator in Object(record.Item)) {
      for (const message of record.Item) {
        messages.push(new ChatMessage(
          this.base64decoder.decode(message.time),
          this.base64decoder.decode(message.name),
          this.sanitizeMessage(this.base64decoder.decode(message.content))));
      }
    } else {
      messages.push(new ChatMessage(
        this.base64decoder.decode(record.Item.time),
        this.base64decoder.decode(record.Item.name),
        this.sanitizeMessage(this.base64decoder.decode(record.Item.content))));
    }
    return new ChatRecord(this.base64decoder.decode(record.name), messages);
  }

  sanitizeMessage(content: string): string {
    content = content.replace(new RegExp(/<font .*>(.*)<\/font>/g), '$1'); // completely remove font tags
    content = content.replace(new RegExp(/<br\/>/g), ''); // completely remove br tags
    content = content.replace(new RegExp(/<img src="([a-zA-Z0-9]*)".*/g), '<img src="emotes/$1.gif" />'); // emotes with image tags
    content = content.replace(new RegExp(/<a .*><(.*)><\/a>/g), '<span class="item">&lt;$1&gt;</span>'); // replace item links
    return content;
  }
}