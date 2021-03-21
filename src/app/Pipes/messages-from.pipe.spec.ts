import { MessagesFromPipe } from './messages-from.pipe';

describe('MessagesFromPipe', () => {
  it('create an instance', () => {
    const pipe = new MessagesFromPipe();
    expect(pipe).toBeTruthy();
  });
});
