// main 4 built-in modules :
// OS
// PATH
// FS - file system
// HTTP
// all can be read about in detail on https://nodejs.org/docs/latest-v24.x/api/index.html

//OS
const os = require('os');

const user = os.userInfo()
console.log(user);

console.log(`system uptime - ${os.uptime()}`);

const osData = {
    type : os.type(),
    releaseDate : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(osData);

///////////////////////////////////////////////////////////////
console.log("////////////////////////////////////////////////");
///////////////////////////////////////////////////////////////

//PATH

const path = require('path')

console.log(path.sep);

const filePath = path.join('\\folder\\','subfolder','content.text')

console.log(filePath);

console.log(path.basename(filePath));

console.log(path.resolve(__dirname, 'bomb', 'a', 'clattt.ttt'));




