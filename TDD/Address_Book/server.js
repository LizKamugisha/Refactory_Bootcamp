var json = require('json');

const data = fs.readFileSync('./addressBook.json');
cost contacts = JSON.parse(data)
console.log(contacts);

const express = require('express')

const app = express();

app.listen(3000, () => console.log('listening on port 3000'));
