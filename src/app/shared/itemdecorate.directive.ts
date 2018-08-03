import { Directive, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appItemdecorate]'
})
export class ItemdecorateDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = 'transparent';
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
    this.backgroundColor = 'transparent';
  }
}