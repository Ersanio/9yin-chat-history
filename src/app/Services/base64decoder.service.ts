import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64decoderService {
  private readonly decodeCipher = {
    "0": "A", "1": "B", "5": "C", "6": "D",
    "E": "E", "H": "F", "z": "G", "I": "H",
    "J": "I", "v": "J", "i": "K", "F": "L",
    "u": "M", "A": "N", "B": "O", "2": "P",
    "4": "Q", "C": "R", "a": "S", "b": "T",
    "L": "U", "l": "V", "X": "W", "m": "X",
    "j": "Y", "3": "Z", "o": "a", "M": "b",
    "G": "c", "K": "d", "N": "e", "k": "f",
    "7": "g", "n": "h", "O": "i", "c": "j",
    "D": "k", "w": "l", "P": "m", "Q": "n",
    "p": "o", "q": "p", "r": "q", "t": "r",
    "R": "s", "8": "t", "9": "u", "S": "v",
    "T": "w", "x": "x", "U": "y", "s": "z",
    "Z": "0", "d": "1", "e": "2", "V": "3",
    "W": "4", "Y": "5", "h": "6", "f": "7",
    "g": "8", "y": "9", "[": "+", "+": "/",
  };

  /**
   * Decodes base64 to UTF-8.
   * @param input The base64 string to decode.
   */
  decode(input: string): string {
    const chars = [...input];
    for (var i = 0; i < chars.length; i++) {
      chars[i] = this.decodeCipher[chars[i]];
    }
    input = chars.join("");
    return this.b64DecodeUnicode(input);
  }

  // From https://stackoverflow.com/a/30106551
  // Solves the problem where text is decoded as ASCII instead of UTF-8
  private b64DecodeUnicode(input: string): string {
    return decodeURIComponent(atob(input).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
}
