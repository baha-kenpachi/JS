//работа чтения и записи с файлом.txt
const fs = require('fs');
const path = require('path');
let arr;
let a = 'Baha, you are great!!!';
//запись
fs.writeFile('output.txt', `${a}`, (err) => {
  if (err) console.log('error');
});
//чтение асинхрон
fs.readFile('input.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//синхронное чтение
// arr = fs.readFileSync('input.txt');
// arr = arr.toString();
// console.log(arr);
