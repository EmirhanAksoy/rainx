import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rainx-listbox',
  templateUrl: 'rainx-listbox.component.html',
  styleUrls: ['rainx-listbox.component.scss']
})
export class RainxListboxComponent implements OnInit {
  @Input() public data: any[] = [];
  @Input() public value: string = 'id';
  @Input() public display: string | string[] = [];
  @Input() public seperator: string = ' - ';
  @Input() public primitive: boolean = false;
  @Input() public selected: any | null = null;
  @Input() public removeable: boolean = false;
  @Input() public loading: boolean = false;
  @Output() public selectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public removeChange: EventEmitter<any> = new EventEmitter<any>();

  public removedItems: any[] = [];
  public selectedItems: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  public handleRemoveItem(item: any) {
    const value: any = this.primitive ? item : item[this.value];
    if (value === this.selected)
      this.selected = null;

    this.removeChange.emit(value);
  }

  public handleSelectionChange(item: any): void {
    this.selected = item[this.value];
    this.selectionChange.emit(this.primitive ? this.selected : item);
  }


}
