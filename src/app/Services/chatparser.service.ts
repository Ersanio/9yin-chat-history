import { Injectable } from '@angular/core';

const parser = require('fast-xml-parser');

@Injectable({
  providedIn: 'root'
})
export class ChatparserService {
  async parseXmlChatLog(file: File): Promise<any> {

    const options = {
      attributeNamePrefix: '',
      ignoreAttributes: false,
      parseNodeValue: true,
      parseAttributeValue: true,
      trimValues: true,
    };

    const text = await file.text();
    return parser.parse(text, options);
  }
}
