let fs = require('fs');

fs.unlink('third-text.txt', function () {
    console.log('File Deleted Successfully.');
});
