const { readFileSync, writeFileSync} = require('fs')

console.log('start');

const firstFile = readFileSync("./content/9-readFile.txt",'utf8')

console.log(firstFile);

//will replace file content if that file exists already
writeFileSync("./content/9-createdFile.txt","writing into this file");

writeFileSync("./content/9-createdFile.txt"," writing into this file again",{flag : 'a'});

console.log('done');


