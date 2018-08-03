import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() defaultClass: string;
 
  @HostBinding('class.open') isOpen: boolean = false;

  constructor() {}

  @HostListener('click') toggleOpen(eventData:Event) {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    
  }
}