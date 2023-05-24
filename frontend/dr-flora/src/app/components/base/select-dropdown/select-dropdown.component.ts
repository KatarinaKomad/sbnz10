import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent{
  @Input() options? : string[] ;
  @Input() defaultOption? : string;
  @Output() newSelectEvent = new EventEmitter<string>();
  @Input() selectOptionControl? : FormControl;

  hideOptions: boolean = true;

  changeSelectedValue(value: string) {
    this.hideOptions = true;
    if(this.selectOptionControl){
      this.selectOptionControl.setValue(value);
    }
    this.newSelectEvent.emit(value);
  }

  showOptions() {
    this.hideOptions = !this.hideOptions;
  }
}
