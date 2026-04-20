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