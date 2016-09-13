import {Directive, ElementRef, Input, Component} from '@angular/core';

@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {

    @Input('MathJax') MathJaxInput: string;

    constructor(private el: ElementRef) {
    }
    
    ngOnChanges() {
      console.log('>> ngOnChanges');
       //this.el.nativeElement.style.backgroundColor = 'yellow';
       this.el.nativeElement.innerHTML = this.MathJaxInput;
       console.log(this.MathJaxInput);
       //MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement]);
       //MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement]);
    }
}