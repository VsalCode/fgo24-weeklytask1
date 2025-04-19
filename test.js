function deteksiPalindrom(inputKata) {
  
  kata = inputKata.trim().toLowerCase(); 
  let palindrom = "";
  
  // Membalikkan kata manual dengan loop
  for (let i = kata.length - 1; i >= 0; i--) {
    palindrom += kata[i];
  }
  
  // Bandingkan kata asli dengan hasil balikan
  if (kata === palindrom) {
    console.log("palindrom");
  } else {
    console.log("bukan palindrom");
  }
}

deteksiPalindrom("siang");

// ------------------------------------------------

// test nyoba
const text = "saya belajar javascript"
const arr = text.split(" ")
console.log(arr);

// -------------------------------------

function reverseWords(inputKalimat) {
  const kalimat = inputKalimat.split(' ');
  const reserve = [];
  
  // reverse kalimat
  for (let i = 0; i < kalimat.length; i++) {
      const indexTerbalik = kalimat.length - 1 - i;
      reserve.push(kalimat[indexTerbalik]);
  }
  // Gabung kalimat
  return reserve.join(' ');
}

console.log(reverseWords("saya belajar js")); 

