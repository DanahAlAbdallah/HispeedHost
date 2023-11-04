import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {

  isSelectOpen: boolean = false;

  @Input() type:string = "";
  @Input() items:string[] = [];
  @Input() isNothingSelected = false;
  @Input() icon:string = "";
  @Output() itemValue = new EventEmitter<string>();

  public itemSelected = "";

  selectItem() {
    this.isSelectOpen = false;

    this.itemValue.emit(this.itemSelected);
    if(this.itemSelected !== ""){
      this.isNothingSelected = false;
    }
  }

  toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  close(){
    this.isSelectOpen = false;

  }
}
