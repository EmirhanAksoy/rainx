import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { RainxKeyboardService } from './rainx-keyboard.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[rainxKeyboard]'
})
export class RainxKeyboardDirective implements OnInit {

  constructor(
    private readonly keyboardService: RainxKeyboardService,
    private readonly elementRef: ElementRef,
    private readonly ngControl: NgControl) { }

  ngOnInit(): void {
    if (this.ngControl) {
      const ctrl = this.ngControl.control;
      this.keyboardService.keyboardTab.subscribe(() => {
        if (this.keyboardService.canMove === false) {
          this.keyboardService.canMove = true;
          return;
        }
        const array = Array.from(document.getElementsByTagName('input')).filter(x => x.hasAttribute('rainxKeyboard'));
        const index = array.indexOf(document.activeElement as HTMLInputElement);
        this.keyboardService.canMove = false;
        setTimeout(() => {
          array[(index + 1) % array.length].focus();
        }, 0);

      });
      this.keyboardService.keyboardClick.subscribe((data: any) => {
        if (document.activeElement === this.elementRef.nativeElement) {
          if (ctrl) {
            ctrl.setValue(data, { emitEvent: false });
          }
        }
      });
    }
  }

  @HostListener('focus', ['$event'])
  public handleFocus(event: any): void {
    debugger;
    if (!this.keyboardService.isOpen) {
      this.keyboardService.toogleOpen();
    }
    this.keyboardService.keyboardNewFocus.emit(!event.target.value ? '' : event.target.value);
  }


}
