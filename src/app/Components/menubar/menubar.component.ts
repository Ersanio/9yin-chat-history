import { Component, Input } from '@angular/core';
import { faDownload, faFileDownload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { ChatHistory } from 'src/app/Models/chathistory';
import { DownloadService } from 'src/app/Services/download.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  public faDownload = faDownload;
  public faAbout = faQuestionCircle;
  public faFileDownload = faFileDownload;

  @Input() public chatHistory: ChatHistory;
  @Input() public selectedChat: string;

  constructor(private downloadService: DownloadService,
    private modalService: ModalService) { }

  public downloadAll() {
    this.downloadService.downloadJson(this.chatHistory, `${this.chatHistory.recordOwner}.json`);
  }

  public downloadCurrent() {
    const selectedChat = this.chatHistory.chatRecords.find(x => x.chatName === this.selectedChat);
    this.downloadService.downloadJson(selectedChat, `${this.chatHistory.recordOwner}_${selectedChat.chatName}.json`);
  }

  public openModal(modalId: string) {
    this.modalService.open(modalId);
  }
}
