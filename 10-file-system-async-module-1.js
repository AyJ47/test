const {readFile,writeFile} = require('fs')

//async read write functions require a callback function (callback helll!!)

console.log('start');

readFile('./content/10-first.txt','utf8',(err,result)=>{
    if(err){
        console.log('error 1');
        return;
    }
    console.log(result);
    const first = result;
    readFile('./content/10-second.txt','utf8',(err,result)=>{
        if(err){
            console.log('error 2');
            return;
        }
        console.log(result);
        const second = result;
        writeFile('./content/10-result.txt', `First file says - ${first} and Second file says - ${second}`,(err,result)=>{
            if(err){
                console.log('error 3');
                return;
            }
            console.log('written succesfully');
        })
    })
    
})

console.log('done - this will show up early because of async nature');