//PATH

const path = require('path')

console.log(path.sep);

const filePath = path.join('\\folder\\','subfolder','content.text')

console.log(filePath);

console.log(path.basename(filePath));

console.log(path.resolve(__dirname, 'bomb', 'a', 'clattt.ttt'));

