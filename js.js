const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 10;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue - currentValue,
  initialValue
);

console.log(sumWithInitial);

const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];
let reversed;
let result;
let search = "Marek";
    
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

const zad4 = ((arr, var1) => {return arr.reduce()});

console.log(zad4(arr2, 3));