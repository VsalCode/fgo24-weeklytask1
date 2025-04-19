// 1. printSquare

const printSquare = 5

if(typeof printSquare == "number"){
  for (let i = 0; i < 5; i++) {
    let row = ""
    for (let x = 1; x <= printSquare; x++) {
      row += x
    }
    console.log(row);
  }
} else {
  console.log("Data yang dimasukkan harus angka !");
}


// 2. combinedArrays

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const combinedArrays = [
  ...arr1,
  ...arr2
]

console.log(combinedArrays);
