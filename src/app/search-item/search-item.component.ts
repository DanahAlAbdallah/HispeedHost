import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {


  @Input() type:string = "";
  @Input() items:string[] = [];
  @Input() isNothingSelected = false;
  @Output() itemValue = new EventEmitter<string>();

  public majorSelected = "";

  selectItem(item:string) {
    this.itemValue.emit(item);
  }

}
