function Person() {
    this.fullName = "Kevin";
    this.fav = "Cookies";
    
    this.describe = function() {
        console.log('this is: ', this);
        console.log(this.fullName + " likes " + this.fav);
    };
}

var kevin = new Person();
kevin.describe();

// This is out of context
var describe = kevin.describe;
describe();

// This gives the function a context
describe.call(kevin);