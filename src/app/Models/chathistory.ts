export class ChatHistory {
  public recordOwner: string;
  public chatRecords: ChatRecord[];
}

export class ChatRecord {
  constructor(public chatName: string, public chatMessages: ChatMessage[]) {
  }
}

export class ChatMessage {
  constructor(public timestamp: string, public from: string, public message: string) {
  }
}
