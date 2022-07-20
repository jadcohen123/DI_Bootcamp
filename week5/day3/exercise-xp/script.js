//Exercise I
 function compareToTen(num) {
  const checkNum = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (num <10){
        resolve(`${num} is less than 10`)
      } else {
        reject(`${num} is a huge number`)
      }
    }
    , 100)
  })

  return checkNum;
}
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
  

  //Exercise II
  function exercise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (1+1 == 2 && 2+2 == 4) {
          resolve("success");
        } else {
          reject("Oops something went wrong");
        }
      }, 4000);
    });
  }
  exercise2()
    .then((res) => console.log(res)) 
    .catch((error) => console.log(error)); 


//Exercise III
Promise.resolve(3)
.then(
    (value) => {
      console.log(value); 
    }
  );
  Promise.reject('Boo!')
    .catch((Error) => console.log(Error));