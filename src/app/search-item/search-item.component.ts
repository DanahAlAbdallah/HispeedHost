import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {

  isSelectOpen: boolean = false;

  @Input() type:string = "";
  @Input() items:any[] = [];
  @Input() isNothingSelected = false;
  @Input() icon:string = "";
  @Output() itemValue = new EventEmitter<string>();
  @Input() isHavingCount = false;
  @Input() isGender = false;

  public itemSelected = "";

  selectItem() {
    this.isSelectOpen = false;

    this.itemValue.emit(this.itemSelected);
    if(this.itemSelected !== ""){
      this.isNothingSelected = false;
    }

    const selectedItem = this.items.find(item => item.gender === this.itemSelected);
  if (selectedItem) {
    this.selectedCount = selectedItem.count;
    // Perform other actions as needed upon item selection
  }
  }

  toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  close(){
    this.isSelectOpen = false;

  }


  // Initialize selectedCount
selectedCount: number | undefined;

}
