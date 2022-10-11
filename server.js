const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res){
    let html = '';
    fs.readFile('./json/json','utf8',function (err,dataJson){
         dataJson = JSON.parse(dataJson);
         console.log(dataJson)

        dataJson.forEach((value, index) => {
            html += '<tr>';
            html += `<td>${value.id}</td>`
            html += `<td>${value.name}</td>`
            html += `<td>${value.price}</td`
            html += `<td><button class="btn btn-danger">Delete</button></td>`
            html += `<td><button class="btn btn-primary">Update</button></td>`
            html += '</tr>';
        })

        fs.readFile('./templates/index.html','utf8',function (err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            data= data.replace('{list-user}',html)
            res.write(data)
            res.end();
        })
    })
})

server.listen('8080',function (err){
    console.log("ok")
})
