//download with npm i {module name}

const _ = require('lodash')

const array = [1,2,[3,4,[5,[6,7]]]]

const newArray = _.flattenDeep(array)

console.log(newArray);
