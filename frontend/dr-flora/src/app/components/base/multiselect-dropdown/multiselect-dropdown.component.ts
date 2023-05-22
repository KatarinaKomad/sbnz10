import { Component, Input } from '@angular/core';
import { Simptom } from 'src/app/model/bolest/simptomi';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.scss']
})
export class MultiselectDropdownComponent {

  isOpenOptions : boolean = false;

  openOptions() : void {
    this.isOpenOptions = !this.isOpenOptions
  }

  @Input()  options? : Simptom[];
  @Input() placeholder? : String;
}
