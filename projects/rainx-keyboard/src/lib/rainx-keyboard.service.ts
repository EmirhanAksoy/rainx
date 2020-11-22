import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RainxKeyboardService {

  public value = '';
  public isUpperCase = false;
  public isOpen = false;
  public isMinimize = false;
  public keyboardClick: EventEmitter<string> = new EventEmitter<string>();
  public keyboardNewFocus: EventEmitter<any> = new EventEmitter<any>();
  public keyboardTab: EventEmitter<any> = new EventEmitter<any>();
  public canMove = true;

  constructor() { }

  public open(): void {
    this.isOpen = true;
  }

  public close(): void {
    this.isOpen = false;
  }

  public toogleMinimize(): void {
    this.isMinimize = !this.isMinimize;
  }

  public toogleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  public toogleCapsLock(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
