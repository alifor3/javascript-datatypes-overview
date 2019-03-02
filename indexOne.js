var foo = "bar";
foo;
foo = "hello";
foo;

var string = "hey";
var stringOne = "yo";

var number = 23;
var numberOne = 6;
number = "false"
number;

var truthy = true;

var comment = "";

var objectZero = {
    num: 0,
    "12string": 'abcd',
  
}

// dot notation
console.log(objectZero.num);

// bracket notation console.log(objectZero["12string"])

var iceCreamStore = {
    orders: {
        tom: {
            icecream: "vanilla"
        }
    }
}

var tomsOrder =iceCreamStore.orders.tom

console.log(tomsOrder.icecream)

var array = [1, 2, 3, 4, 5, 6];
console.log(array[1]);
console.log(array[3]);

var won5Students = [
    {
        name: 'Ali',
        email: '@email.com'
    },
    {
        name: 'Shah',
        email: '@email.com'
    }
];

var ali = won5Students[0];
console.log(ali)
console.log(ali.name)

var myPhone = {
    model: "Apple iPhone X",
    manufacturer: "Apple",
    processor: {
        model: "iOS 10xx",
        manufacturer: "Apple Dev team",
        powerLimit: "9000ghz",
    },
    screen: {
        width: 10,
        height: 11,

    }
}
var myProcessor = myPhone.processor;
console.log(myProcessor.powerLimit)

var name = "king";

function myNewFunc() {
    name = "prince"
    return "something"
}

myNewFunc();
name;
// ecma script = javascript = es 6

const hey = 'sup';
let hola = 'hiii';
// block scoped, always use const and let NEVER USE VAR
//const if you will never change the variable - use let if you will
//use const if you're unsure - if you get an error use let