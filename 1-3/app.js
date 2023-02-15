let fs = require('fs')

fs.exists('text.txt', (exist) => {
    if (exist) console.log('found');
    else console.log('not found');
})
