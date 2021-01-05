import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { RainxKeyboardService } from './rainx-keyboard.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rainx-keyboard',
  templateUrl: './rainx-keyboard.component.html',
  styleUrls: ['./rainx-keyboard.component.scss']
})
export class RainxKeyboardComponent implements OnInit {


  @Input() public showOnlyFocus = false;

  public readonly maxHeight = 245;
  public readonly minHeight = 50;

  public height = this.maxHeight;

  public collapsed = false;
  public isCapsLock = true;

  private currentString = '';


  constructor(public keyboardService: RainxKeyboardService) {
    this.addListenerForFocusShow();
  }

  ngOnInit(): void {
    this.keyboardService.keyboardNewFocus.subscribe((data: string) => {
      this.currentString = data;
    });
  }

  public get dockButtonText(): string {
    return this.keyboardService.dockType === 'bottom' ? 'Up' : 'Down';
  }

  public get currentFocusedString(): string {
    return this.currentString;
  }

  public set currentFocusedString(value: string) {
    this.currentString = value;
  }

  public addListenerForFocusShow(): void {
    document.addEventListener('click', (event) => {
      if (this.showOnlyFocus && document.activeElement?.tagName.toLowerCase() !== 'input') {
        this.keyboardService.close();
      }
    }, false);
  }

  public addEmptySpace(): void {
    this.currentString += ' ';
    this.keyboardService.value = this.currentString;
    this.keyboardService.keyboardClick.emit(this.currentString);
  }

  public capslockBtn(): void {
    this.isCapsLock = !this.isCapsLock;
  }


  public temizleBtn(): void {
    this.currentString = this.currentString.slice(0, -1);
    this.keyboardService.value = this.currentString;
    this.keyboardService.keyboardClick.emit(this.currentString);
  }

  public hideKeyboard(): void {
    this.keyboardService.close();
  }

  public disableMouseDownEvent(event: any): void {
    event.preventDefault();
  }

  public minimize(): void {
    if (!this.collapsed) {
      this.collapsed = true;
      this.height = this.minHeight;
    } else {
      this.collapsed = false;
      this.height = this.maxHeight;
    }
  }

  public charPressed(key: string): void {
    this.currentString += key;
    this.keyboardService.value = this.currentString;
    this.keyboardService.keyboardClick.emit(this.currentString);
  }

  public handleCapsLock(): void {
    this.keyboardService.toogleCapsLock();
  }

  public handleBackSpace(): void {
    this.currentString = this.currentString.slice(0, -1);
    this.keyboardService.value = this.currentString;
    this.keyboardService.keyboardClick.emit(this.currentString);
  }

  public handleTabClick(): void {
    this.keyboardService.keyboardTab.emit();
  }

  public handleLetterNumberClick(char: string): void {
    this.currentString += char;
    this.keyboardService.value = this.currentString;
    this.keyboardService.keyboardClick.emit(this.currentString);
  }

}
