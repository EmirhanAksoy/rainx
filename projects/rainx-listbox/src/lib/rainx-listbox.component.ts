import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rainx-listbox',
  templateUrl: 'rainx-listbox.component.html',
  styleUrls: ['rainx-listbox.component.scss']
})
export class RainxListboxComponent implements OnInit {
  @Input() public data: any[] = [];
  @Input() public key: string = 'id';
  @Input() public display: string | string[] = [];
  @Input() public seperator: string = ' - ';
  @Input() public primitive: boolean = false;
  @Input() public selectedKey: any | null = null;
  @Input() public loading: boolean = false;
  @Input() public removeable: boolean = false;
  @Input() public resizeable: boolean = false;
  @Output() public selectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public removeChange: EventEmitter<any> = new EventEmitter<any>();

  public removedItems: any[] = [];
  public selectedItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public handleRemoveItem(item: any): void {
    debugger;
    const selectedItem: any = this.primitive ? item : item[this.key];
    if (selectedItem === this.selectedKey)
      this.selectedKey = null;
    this.removedItems.push(selectedItem);
    this.removeChange.emit(selectedItem);
  }

  public handleSelectionChange(item: any): void {
    if (this.selectedKey === item[this.key]) {
      this.selectedKey = null;
      return;
    }
    this.selectedKey = item[this.key]
    this.selectionChange.emit(this.primitive ? this.selectedKey : item);
  }


}
