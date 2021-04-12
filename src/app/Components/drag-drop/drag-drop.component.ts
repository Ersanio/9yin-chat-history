import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileHandle } from 'src/app/drag-drop.directive';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  @Output() public file = new EventEmitter<File>();
  @Input() public isVisible: boolean;

  async onFilesDropped(files: FileHandle[]): Promise<void> {
    this.file.emit(files[0].file);
  }

  onFileSelected(event): void {
    this.file.emit(event.target.files[0]);
  }
}
