import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';


export class MultiSelectModel {
  constructor(public id: number, public name: string) { }
}
@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit,OnChanges {
  @Input() list: MultiSelectModel[];
  @Input() label: string;

  selectedItem: number;

  @Output() SelectionChanged: EventEmitter<number[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log(this.list);
  }

  ngOnChanges(){
    // console.log(this.list);
  }

  selectionChange(matSelectChange: MatSelectChange) {
    this.SelectionChanged.emit(matSelectChange.value);

  }
}
