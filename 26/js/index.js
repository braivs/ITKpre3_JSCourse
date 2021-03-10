function Dog(name) {
  // var this = {}; 

  this.myname = name;
  this.voice = function() {
    console.log('Hey, my name is ' + this.myname);
  }
}

var chauchau = new Dog('Laika') ;
var buldog = new Dog('Bobik') ;
var dog3 = {
  myname: name,
  voice : function() {
    console.log('Hey');
  }
};

chauchau.voice();
buldog.voice();