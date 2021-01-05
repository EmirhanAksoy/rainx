import { Directive, ElementRef, HostListener, OnInit, Optional } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { RainxKeyboardService } from './rainx-keyboard.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input'
})
export class RainxKeyboardDirective implements OnInit {

  constructor(
    private readonly keyboardService: RainxKeyboardService,
    private readonly elementRef: ElementRef,
    @Optional() private readonly ngControl: NgControl) { }

  ngOnInit(): void {
    if (this.ngControl) {
      const ctrl = this.ngControl.control;
      this.handleNonFunctionalKeyboardClick(ctrl);
    } else {
      this.handleNoBinding();
    }

    this.handleTabClick();
  }

  public handleNoBinding(): void {
    this.keyboardService.keyboardClick.subscribe((data: any) => {
      if (document.activeElement &&
        document.activeElement === this.elementRef.nativeElement &&
        document.activeElement.tagName.toLowerCase() === 'input') {
        const activeElement = document.activeElement as any;
        activeElement.value = this.keyboardService.value;
      }
    });
  }

  public handleTabClick(): void {
    this.keyboardService.keyboardTab.subscribe(() => {
      debugger;
      if (this.keyboardService.canMove === false) {
        this.keyboardService.canMove = true;
        return;
      }
      const array = Array.from(document.getElementsByTagName('input'));
      const index = array.indexOf(document.activeElement as HTMLInputElement);
      this.keyboardService.canMove = false;
      setTimeout(() => {
        array[(index + 1) % array.length].focus();
      }, 0);

    });
  }

  public handleNonFunctionalKeyboardClick(ctrl: AbstractControl | null): void {
    this.keyboardService.keyboardClick.subscribe((data: any) => {
      if (document.activeElement === this.elementRef.nativeElement) {
        if (ctrl) {
          ctrl.setValue(data, { emitEvent: false });
        }
      }
    });
  }

  @HostListener('focus', ['$event'])
  public handleFocus(event: any): void {
    if (!this.keyboardService.isOpen) {
      this.keyboardService.toogleOpen();
    }
    this.keyboardService.keyboardNewFocus.emit(!event.target.value ? '' : event.target.value);
  }


}
