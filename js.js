const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];
let initialValue2 = 0;
let reversed;
let result;
let search = "Marek";
let smol = 1000000;
    
const zad1 = ((arr1, arr2) => {return arr1.concat(arr2);});
console.log(zad1(arr1, arr2));

const zad2 = ((...args) => {
    args.forEach(element => {
        reversed = element.reverse();
        console.log(reversed[0]);
    });
})

zad2(arr1, arr2);

const zad3 = ((arr, arg) => {return arr.filter(a => a==arg)}) 

console.log(zad3(arr2, search));

const zad4 = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue2); 

console.log(zad4);

const zad5 = ((arr) => {return arr.map(a => (a*a)+3)});

console.log(zad5(numbers));

const zad6 = arr2.filter(name => name.length <= 5 && name.includes('ek'));

console.log(zad6);

const zad7 = numbers.filter(number => number%2 == 0);

console.log(zad7);

const zad8 = ((arr, curr) => {
  while (curr < arr.length) {
    if (arr[curr] < smol) {
      smol = arr[curr];
    }
    curr++;
    zad8(arr, curr);
  }
  return smol;
});

console.log(zad8(numbers, 0));