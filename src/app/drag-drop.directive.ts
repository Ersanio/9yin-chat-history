// https://stackblitz.com/edit/angular-drag-and-drop-upload

import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File;
  url: SafeUrl;
}

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding('class') private class = '';

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.class = 'over';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.class = '';
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.class = 'drop';

    const files: FileHandle[] = [];
    for (let i = 0; i < evt.dataTransfer.files.length; i++) {
      const file = evt.dataTransfer.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({ file, url });
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
}
