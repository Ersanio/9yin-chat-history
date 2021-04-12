import { Component } from '@angular/core';
import { ChatHistory } from './Models/chathistory';
import { ChatmapperService } from './Services/chatmapper.service';
import { ChatparserService } from './Services/chatparser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chatHistory: ChatHistory;
  public selectedChat: string;

  constructor(
    private chatParser: ChatparserService,
    private chatMapper: ChatmapperService) {
  }

  async onFileDropped(file: File): Promise<void> {
    if (file.type !== 'text/xml') {
      return;
    }

    const xmlHistory = await this.chatParser.parseXmlChatLog(file);

    if (xmlHistory === undefined
      || xmlHistory.Records === undefined
      || xmlHistory.Records.Record === undefined) {
      return;
    }

    this.chatHistory = this.chatMapper.AnyToChat(xmlHistory, file.name);
  }

  onSelectedChatChange(name: string): void {
    this.selectedChat = name;
  }
}
