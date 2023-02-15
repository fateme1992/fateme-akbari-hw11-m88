let fs = require('fs')

fs.appendFile('text.txt', 'addition text', (err) => {
    if (err) console.log(err.message);
})
