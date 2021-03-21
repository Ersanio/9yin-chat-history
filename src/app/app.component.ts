import { Component } from '@angular/core';
import { FileHandle } from './drag-drop.directive';
import { ChatHistory, ChatRecord } from './Models/chathistory';
import { ChatmapperService } from './Services/chatmapper.service';
import { ChatparserService } from './Services/chatparser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public files: FileHandle[] = [];
  public chatHistory: ChatHistory;

  public selectedChat: string;

  constructor(
    private chatParser: ChatparserService,
    private chatMapper: ChatmapperService) {
  }

  ngOnInit(): void {
  }

  async onFilesDropped(files: FileHandle[]): Promise<void> {
    this.files = files;
    const xmlHistory = await this.chatParser.parseXmlChatLog(this.files[0]);
    this.chatHistory = this.chatMapper.AnyToChat(xmlHistory);
  }

  selectChat(name: string) {
    this.selectedChat = name;
  }
}
