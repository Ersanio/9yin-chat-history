import { Injectable } from '@angular/core';
import { ChatHistory, ChatMessage, ChatRecord } from '../Models/chathistory';
import { Base64decoderService } from './base64decoder.service';

@Injectable({
  providedIn: 'root'
})
export class ChatmapperService {
  constructor(private base64decoder: Base64decoderService) { }

  public AnyToChat(xmlInput: any, fileName: string): ChatHistory {
    var history = new ChatHistory();
    history.recordOwner = this.base64decoder.decode(fileName.split(".")[0].split(" ")[0]);
    history.chatRecords = [];

    if (Symbol.iterator in Object(xmlInput.Records.Record)) {
      for (const record of xmlInput.Records.Record) {
        history.chatRecords.push(this.parseMessagesFromRecord(record));
      }
    } else {
      history.chatRecords.push(this.parseMessagesFromRecord(xmlInput.Records.Record));
    }

    history.chatRecords = history.chatRecords.sort((x, y) => {
      const a = x.chatName.toLowerCase();
      const b = y.chatName.toLowerCase();
      return (a < b) ? -1 : (a > b) ? 1 : 0;
    });

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
    content = content
      .replace(new RegExp(/<img src="([a-zA-Z0-9_]*)".*/g), '<img src="assets/emotes/$1.png" />') // emotes with image tags
      .replaceAll('_', ''); // quick fix to remove underscore from the file path, Angular can't handle space and underscores in asset path
    // todo: unsatisfying fix, possible impact on performance. Is there a way to support underscores in assets?

    content = content.replace(new RegExp(/<a .*><(.*)><\/a>/g), '<span class="item">&lt;$1&gt;</span>'); // replace item links
    return content;
  }
}
