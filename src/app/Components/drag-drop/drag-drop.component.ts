import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileHandle } from 'src/app/drag-drop.directive';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  @Output() public file = new EventEmitter<File>();
  public isVisible: boolean;

  ngOnInit(): void {
    this.isVisible = true;
  }

  async onFilesDropped(files: FileHandle[]): Promise<void> {
    this.handleFileLoad(files[0].file);
  }

  onFileSelected(event) {
    const file : File = event.target.files[0];
    this.handleFileLoad(file);
  }

  handleFileLoad(file: File) {
    if(file.type != "text/xml") {
      return;
    }

    this.file.emit(file);
    this.isVisible = false;
  }
}
