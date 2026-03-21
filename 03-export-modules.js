

const names = require("./01-create-module")

console.log(names);

names.sayHi(names.ayush);
names.sayHi(names.kashish);


try {
    if (names.secret === undefined) {
        throw new Error("secret is not defined in exports");
    }
    names.sayHi(names.secret);
} catch (err) {
    console.log(`error occurred - ${err.message}`);
}

///////////////////////////////////////////////////////////////
console.log("////////////////////////////////////////////////");
///////////////////////////////////////////////////////////////


const {items, newPerson} = require("./2-alternate-export")

console.log(items);
console.log(newPerson);


