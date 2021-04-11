import { Component } from '@angular/core';
import { FileHandle } from './drag-drop.directive';
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

  ngOnInit(): void {
  }

  async onFileDropped(file: File): Promise<void> {
    const xmlHistory = await this.chatParser.parseXmlChatLog(file);
    this.chatHistory = this.chatMapper.AnyToChat(xmlHistory, file.name);
  }

  onSelectedChatChange(name: string) {
    this.selectedChat = name;
  }
}
