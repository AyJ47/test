// lastly with async await
const {readFile,writeFile} = require('fs').promises;

const start = async() => {
        try{
            const first = await readFile('./content/10-first.txt','utf8');
            const second = await readFile('./content/10-second.txt','utf8');
            console.log(`readings are ${first} and ${second}`);
            
            await writeFile('./content/10-result.txt','done dana done!!',{flag:'a'});
        }
        catch(err){
            console.log(`error - ${err}`);
        }
    }

    start();

//old method below


// const { log } = require('console');
// const {readFile,writeFile} = require('fs');

// const getData = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) reject(err);
//             else resolve(data);
//         });
//     });
// };

// const writeData = (path, content) => {
//     return new Promise((resolve, reject) => {
//         writeFile(path, content, (err) => {
//             if (err) reject(err);
//             else resolve();
//         });
//     });
// };

// const start = async() => {
//     try{
//         const first = await getData('./content/10-first.txt');
//         const second = await getData('./content/10-second.txt');
//         console.log(`readings are ${first} and ${second}`);
        
//         await writeData('./content/10-result.txt','done dana done!!');
//     }
//     catch(err){
//         console.log(`error - ${err}`);
//     }
// }

// start();


