//Same thing but with the help of promises
const { readFile, writeFile } = require('fs');

const getData = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

const writeData = (path, content) => {
    return new Promise((resolve, reject) => {
        writeFile(path, content, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

console.log('start');

getData('./content/10-first.txt')
    .then((first) => {
        console.log(first);
        return getData('./content/10-second.txt')
            .then((second) => ({ first, second })); // pass both forward
    })
    .then(({ first, second }) => {
        console.log(second);
        return writeData(
            './content/10-result.txt',
            `First file says - ${first} and Second file says - ${second}`
        );
    })
    .then(() => console.log('written successfully'))
    .catch((err) => console.log(err));

console.log('done');