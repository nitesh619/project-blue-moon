import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.open') open: boolean = false;

  @HostListener('click') toggleDropDown() {
    this.open = !this.open;
  }

}
