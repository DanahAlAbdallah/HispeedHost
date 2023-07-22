import { Component } from '@angular/core';
import { AfterSearch } from '../classes/afterseatch';

@Component({
  selector: 'app-aftersearch',
  templateUrl: './aftersearch.component.html',
  styleUrls: ['./aftersearch.component.css']
})
export class AftersearchComponent {

  public Items:AfterSearch[] = [
    new AfterSearch(0,"Ali Mrad", 20, "Nabatieh, Beirut", "81674951","pr.alimrad@outlook.com"),
    new AfterSearch(0,"Ali Mrad", 20, "Nabatieh, Beirut", "81674951","pr.alimrad@outlook.com")

  ];
}
