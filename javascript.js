/* -----------------------------------------------
JAVACRIPT 1
----------------------------------------------- */

const productName = {
  name: "kemeja pria lengan panjang slimfit kemeja kerja casual tbb39" ,
  rating: 4.5, 
  price: 135000,
  isActive: true,
  images: ["kemejaHitam.jpg", "kemejaNavy.jpg", "kemejaArmy.jpg", "kemejaGrey.jpg", "kemejaCoksu.jpg", "kemejaMaroon.jpg", "kemejaPutih.jpg"],
  description: "kondisi: Baru, Min Pemesanan: 1 Buah",
  variants : { 
    name: "Hitam", 
    options: ["M","L","XL","XXL"],
  },
  storeName: "Fazzttrack Shop"
}

console.log(productName);


/* -----------------------------------------------
JAVACRIPT 2
----------------------------------------------- */

const programDiskon = (totalBelanja) => {

  if(totalBelanja >= 1000000){
    console.log(`Anda mendapat diskon 10%, total belanja anda menjadi Rp.${totalBelanja - (10 / 100)}`);
  } else if( totalBelanja >= 500000 && totalBelanja < 1000000 ){
    console.log(`Anda mendapat diskon 10%, total belanja anda menjadi Rp.${totalBelanja - (5 / 100)}`);
  } else {
    console.log(`Anda tidak mendapat diskon, total belanja anda Rp.${totalBelanja - (5 / 100)}`);
  }
}

programDiskon(175000)

/* -----------------------------------------------
JAVACRIPT 3
----------------------------------------------- */

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


// 2. printSquare

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const combinedArrays = [
  ...arr1,
  ...arr2
]

console.log(combinedArrays);
