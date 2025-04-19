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
