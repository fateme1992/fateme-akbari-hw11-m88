let fs = require('fs')

let userData = fs.readFile('user-data.json', 'utf8', (err, data) => {
    if (err) return console.log(err.message);
    else {
        console.log(JSON.parse(data));
        console.log(JSON.parse(data).filter(item => item.age > 18));
    }
})

