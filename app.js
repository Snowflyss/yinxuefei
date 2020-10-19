const http = require('http');


http.createServer((req, res) => {
    req.on('data', (data) => {
        let strs = decodeURIComponent(data.toString());
        console.log(strs)
    })
    res.write('<head><meta charset="utf-8"/></head>');
    res.end('发的撒ds');
}).listen(3001, () => {
    console.log('3001...');
})