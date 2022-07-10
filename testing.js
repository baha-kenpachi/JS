// Array.prototype.sum = function () {
//     let s = 0;
//     for (let i = 0; i<this.length; i++){
//         if (isNaN(this[i]) == true){
//             continue;
//         } else{
//             s += Number(this[i]);
//         }
//     }
//     return s;
// };

function isIsogram(str) {
  if (str.length == 0) {
    return console.log('true');
  } else {
    let Arr = str.toLowerCase().split('').sort();
    console.log(Arr);
    let check1 = 0;
    for (let i = 0; i < Arr.length; i++) {
      Arr[i] != Arr[i + 1] ? (check1 = check1 + 0) : (check1 = check1 + 1);
    }
    console.log(check1);
    check1 < 1 ? console.log('true') : console.log('false');
  }
}

isIsogram('Obo');
