import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RainxKeyboardService } from '../rainx-keyboard.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rainx-keyboard-button',
  templateUrl: './rainx-keyboard-button.component.html',
  styleUrls: ['./rainx-keyboard-button.component.css']
})
export class RainxKeyboardButtonComponent implements OnInit {

  @Input() public text = '';
  @Input() public className = '';
  @Input() public fontSize = 15;
  @Output() public clickEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private readonly keyboardService: RainxKeyboardService) { }

  ngOnInit(): void {
  }

  public disableMouseDownEvent(event: any): void {
    event.preventDefault();
  }

  public handleClick(event: any): void {
    event.preventDefault();
    this.clickEvent.emit(this.textResult);
  }

  public get textResult(): string {
    return this.keyboardService.isUpperCase ? this.text.toLocaleUpperCase() : this.text.toLocaleLowerCase();
  }

}
