import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rainx-listbox',
  templateUrl: 'rainx-listbox.component.html',
  styleUrls: ['rainx-listbox.component.scss']
})
export class RainxListboxComponent implements OnInit {

  /** Data source for listbox */
  @Input() public data: any[] = [];

  /** Unique key for items*/
  @Input() public key: string = 'id';

  /** Value/Values will be displayed on item*/
  @Input() public display: string | string[] = [];

  /** Separator for displayed values */
  @Input() public seperator: string = ' - ';

  /** Indicates primitive or complex type */
  @Input() public primitive: boolean = false;

  /** Unique key for default selection */
  @Input() public selectedKey: any | null = null;

  /** Indicates loading icon will be shown or not  */
  @Input() public loading: boolean = false;

  /** Indicates items removable or not */
  @Input() public removeable: boolean = false;

  /** Indicates listbox container resizeable or not */
  @Input() public resizeable: boolean = false;

  /** Event will be fired when item selected */
  @Output() public selectionChange: EventEmitter<any> = new EventEmitter<any>();

  /** Event will be fired when item removed */
  @Output() public removeChange: EventEmitter<any> = new EventEmitter<any>();

  public removedItems: any[] = [];
  public selectedItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**Handling of the item removing*/
  public handleRemoveItem(item: any): void {
    const selectedItem: any = this.primitive ? item : item[this.key];
    if (selectedItem === this.selectedKey)
      this.selectedKey = null;
    this.removedItems.push(selectedItem);
    this.removeChange.emit(selectedItem);
  }

  /**Handling of the item selecting */
  public handleSelectionChange(item: any): void {
    if (this.selectedKey === item[this.key]) {
      this.selectedKey = null;
      return;
    }
    this.selectedKey = item[this.key]
    this.selectionChange.emit(this.primitive ? this.selectedKey : item);
  }


}
