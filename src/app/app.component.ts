import { Component } from '@angular/core';
import { FileHandle } from './drag-drop.directive';
import { ChatHistory } from './Models/chathistory';
import { ChatmapperService } from './Services/chatmapper.service';
import { ChatparserService } from './Services/chatparser.service';

import { faDownload, faFileDownload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faDownload = faDownload;
  public faAbout = faQuestionCircle;
  public faFileDownload = faFileDownload;

  public chatHistory: ChatHistory;
  public selectedChat: string;

  constructor(
    private chatParser: ChatparserService,
    private chatMapper: ChatmapperService) {
  }

  ngOnInit(): void {
  }

  async onFilesDropped(files: FileHandle[]): Promise<void> {
    const xmlHistory = await this.chatParser.parseXmlChatLog(files[0]);
    this.chatHistory = this.chatMapper.AnyToChat(xmlHistory, files[0].file.name);
  }

  onSelectedChatChange(name: string) {
    this.selectedChat = name;
  }

  public downloadAll() {
    console.log(this.chatHistory);
  }

  public downloadCurrent() {
    console.log(this.chatHistory.chatRecords.find(x => x.chatName === this.selectedChat));
  }

  public displayAbout() {
    console.log("downloading...");
  }
}
