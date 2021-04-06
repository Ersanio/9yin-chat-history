import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  downloadJson(input: any, filename: string) {
    var data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(input, null, 4));
    var downloader = document.createElement('a');

    downloader.setAttribute('href', data);
    downloader.setAttribute('download', filename);
    downloader.click();
  }
}
