// part II
let main = require(`./main.js`);
const b = 5;

main = main.largeNumber;

console.log(main + b);
const http = require(`http`);

const server = http.createServer((req, res)=>{
    console.log("I'm listening");
     res.setHeader('Content-Type', 'text/html')
     res.end(`My Module is ${main+b}\n <html><body><h1>Hi there at the frontend</h1></body></html>`)
    
 });
 server.listen(3000);




 // part III
 const {dateTime}=require(`./main.js`)
console.log(dateTime());
let date = dateTime();
const http = require(`http`);

const server = http.createServer((req, res)=>{
    console.log("I'm listening");
     res.setHeader('Content-Type', 'text/html')
     res.end(`<html><body><h1>${date}</h1></body></html>`)
 });
 server.listen(8080);