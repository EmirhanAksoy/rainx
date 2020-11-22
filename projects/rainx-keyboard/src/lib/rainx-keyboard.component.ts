import { Component, OnInit } from '@angular/core';
import { RainxKeyboardService } from './rainx-keyboard.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rainx-keyboard',
  templateUrl: './rainx-keyboard.component.html',
  styleUrls: ['./rainx-keyboard.component.scss']
})
export class RainxKeyboardComponent implements OnInit {

  constructor(public keyboardService: RainxKeyboardService) { }

  public height = 245;
  public collapsed = false;
  public isCapsLock = true;

  private currentString = '';

  ngOnInit(): void {
    this.keyboardService.keyboardNewFocus.subscribe((data: string) => {
      this.currentString = data;
    });
  }

  public get currentFocusedString(): string {
    return this.currentString;
  }

  public set currentFocusedString(value: string) {
    this.currentString = value;
  }

  public addEmptySpace(): void {
    this.currentString += ' ';
    this.keyboardService.value = this.currentString;
    this.keyboardService.keyboardClick.emit(this.currentString);
  }

  public capslockBtn(): void {
    this.isCapsLock = !this.isCapsLock;
  }

  public silBtn(): void {
    this.currentString = '';
  }

  public temizleBtn(): void {
    this.currentString = this.currentString.slice(0, -1);
    this.keyboardService.value = this.currentString;
    this.keyboardService.keyboardClick.emit(this.currentString);
  }

  public kapatBtn(): void {
    this.keyboardService.close();
  }

  public disableMouseDownEvent(event: any): void {
    event.preventDefault();
  }

  public minimize(): void {
    if (!this.collapsed) {
      this.collapsed = true;
      this.height = 50;
    } else {
      this.collapsed = false;
      this.height = 245;
    }
  }

  public charPressed(c: string): void {
    if (c === '@capslock@') {
      this.keyboardService.toogleCapsLock();
    } else if (c === '@tab@') {
      this.keyboardService.keyboardTab.emit();
    } else if (c === '@backspace@') {
      this.currentString = this.currentString.slice(0, -1);
      this.keyboardService.value = this.currentString;
      this.keyboardService.keyboardClick.emit(this.currentString);
    } else {
      this.currentString += c;
      this.keyboardService.value = this.currentString;
      this.keyboardService.keyboardClick.emit(this.currentString);
    }
  }

}
