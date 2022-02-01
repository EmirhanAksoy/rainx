import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rainx-listbox',
  templateUrl: 'rainx-listbox.component.html',
  styleUrls: ['rainx-listbox.component.scss']
})
export class RainxListboxComponent implements OnInit {
  @Input() public data : any[] = [];
  @Input() public value: string = 'id';
  @Input() public display:string | string[] = [];
  @Input() public seperator: string = ' - ';
  @Input() public selectedValue: any | null = null;
  @Input() public primitive: boolean = false;
  @Input() public removeable: boolean = false;
  @Input() public selectable: boolean = false;
  @Input() public loading: boolean = false;
  @Output() public selectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public removeChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


}
