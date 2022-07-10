// файл для тестов
const arr = [1, 2, 2, 3];
const arr2 = [];

// let arr3 = arr.split('');
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1]) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);
