import { Injectable } from '@angular/core';
import { FileHandle } from '../drag-drop.directive';

var parser = require('fast-xml-parser');

@Injectable({
  providedIn: 'root'
})
export class ChatparserService {
  async parseXmlChatLog(fileHandle: FileHandle): Promise<any> {

    var options = {
      attributeNamePrefix: "",
      ignoreAttributes: false,
      parseNodeValue: true,
      parseAttributeValue: true,
      trimValues: true,
    };

    const text = await fileHandle.file.text();
    return parser.parse(text, options);
  }

  constructor() { }
}
