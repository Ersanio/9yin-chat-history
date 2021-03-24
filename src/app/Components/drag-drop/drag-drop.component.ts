import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileHandle } from 'src/app/drag-drop.directive';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  @Output() public files = new EventEmitter<FileHandle[]>();
  public isVisible: boolean;

  ngOnInit(): void {
    this.isVisible = true;
  }

  async onFilesDropped(files: FileHandle[]): Promise<void> {
    this.files.emit(files);
    this.isVisible = !files.length;
  }
}
