import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
    
   }
   ngOnInit(){
    var element = this.el.nativeElement;
    element.style.Background = "blue";
   }
}
