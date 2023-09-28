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

  public itemSelected = "";

  selectItem() {
    this.itemValue.emit(this.itemSelected);
    if(this.itemSelected !== ""){
      this.isNothingSelected = false;
    }
  }

}
