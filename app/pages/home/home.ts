import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MathJaxDirective} from '../mathjax/mathjax.implementation';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [MathJaxDirective]
})
export class HomePage {
  formulae : String ;
  laplace : String;
  sinat : String;
  sqrtt : String;
  constructor(public navCtrl: NavController) {
 // this.formulae= new String();
  this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
  this.laplace="`f(t)=L^-1{F(s)}`";
  this.sinat="`sin(at)=a/(s^2 + a^2)`"
  this.sqrtt="`sqrt t= sqrt pi/(2s^(3/2))`"
  }

  


}
