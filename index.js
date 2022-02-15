const http = require('http');
const moment = require('moment');
const homepage = require('./homepage')
const { fstat } = require('fs');


const server = http.createServer((req, res) => {
    // res.statusCode= 200;
    // res.setHeader('Content-type', 'text/html');
    // const fs = require('fs');
    // res.write(fs.readFileSync('./index.html'));
    // res.write(homepage.home())
    // res.write(homepage.page())
    // res.write(moment().calendar())
    // res.end();
    if(req.url === "/about")
    {
        const date = moment().format();
        res.write(JSON.stringify({
            'Status' : 'success',
            'Message': "response success",
            'Description': "Group Exercise #03",
            'Date': date,
            'Data': about.data
        }));
    }
    else if(req.url === "/users"){
        res.write(JSON.stringify({
            'user': users
        }))
    }
    else {
        const fs = require('fs');
        res.write(fs.readFileSync('./index.html'));
    }
})/*.listen(3000)*/;

const hostname = '127.0.0.1' // atau localhost
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});