import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64decoderService {
  private readonly encodeCipher = {
    "A": "0", "B": "1", "C": "5", "D": "6",
    "E": "E", "F": "H", "G": "z", "H": "I",
    "I": "J", "J": "v", "K": "i", "L": "F",
    "M": "u", "N": "A", "O": "B", "P": "2",
    "Q": "4", "R": "C", "S": "a", "T": "b",
    "U": "L", "V": "l", "W": "X", "X": "m",
    "Y": "j", "Z": "3", "a": "o", "b": "M",
    "c": "G", "d": "K", "e": "N", "f": "k",
    "g": "7", "h": "n", "i": "O", "j": "c",
    "k": "D", "l": "w", "m": "P", "n": "Q",
    "o": "p", "p": "q", "q": "r", "r": "t",
    "s": "R", "t": "8", "u": "9", "v": "S",
    "w": "T", "x": "x", "y": "U", "z": "s",
    "0": "Z", "1": "d", "2": "e", "3": "V",
    "4": "W", "5": "Y", "6": "h", "7": "f",
    "8": "g", "9": "y", "+": "[", "/": "+",
  };

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

  constructor() { }

  decode(input: string): string {
    const chars = [...input];
    for (var i = 0; i < chars.length; i++) {
      chars[i] = this.decodeCipher[chars[i]];
    }
    input = chars.join("");
    return atob(input);
  }

  encode(input: string): string {
    input = btoa(input);
    const chars = [...input];
    for (var i = 0; i < chars.length; i++) {
      chars[i] = this.encodeCipher[chars[i]];
    }
    return chars.join("");
  }
}