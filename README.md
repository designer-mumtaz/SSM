"attribute" and "property"
===========================

What's the difference between an "attribute" and a "property"?

In general terms (and in normal English usage) the terms mean the same thing.
In the specific context of HTML / Javascript the terms get confused because the HTML representation of a DOM element has attributes (that being the term used in XML for the key/value pairs contained within a tag) but when represented as a JavaScript object those attributes appear as object properties.

Four way to use "This" in Javascript
===========================

function test(){
　　　　this.x = 1;
　　　　alert(this.x);
　　}
　　test(); // 1
  
///////////////////

var x = 1;
　　function test(){
　　　　alert(this.x);
　　}
　　test(); // 1
  
///////////////////

var x = 1;
　　function test(){
　　　　this.x = 0;
　　}
　　test();
　　alert(x); //0

///////////////////

　　function test(){
　　　　alert(this.x);
　　}
　　var o = {};
　　o.x = 1;
　　o.m = test;
　　o.m(); // 1

///////////////////

　　function test(){
　　　　this.x = 1;
　　}
　　var o = new test();
　　alert(o.x); // 1

///////////////////

var x = 2;
　　function test(){
　　　　this.x = 1;
　　}
　　var o = new test();
　　alert(x); //2

///////////////////

　　var x = 0;
　　function test(){
　　　　alert(this.x);
　　}
　　var o={};
　　o.x = 1;
　　o.m = test;
　　o.m.apply(); //0
  
///////////////////

　　o.m.apply(o); //1
