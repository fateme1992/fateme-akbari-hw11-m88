let fs = require('fs')

fs.writeFile('second-text.txt', 'second text content', (err) => {
    if (err) console.log(err.message);
})
