// const myPromise = new Promise(function (resolve, reject) {
//     let success= true;
//     if (success) {
//         resolve( {category: "Food"})
//     }
//     else {
//         reject ("Error !")
//     }
// })

// const myPromise2 = new Promise(function (resolve, reject) {
//     let success= true;
//     if (success) {
//         setTimeout(()=> {
//             resolve( {name: "zeynep"})
//         },2000)
       
//     }
//     else {
//         reject ("Error !")
//     }
// })

// Promise.all([myPromise, myPromise2]).then(data=> {
//     console.log(1)
//     console.log(data)
//  }).catch(err=> console.log(err)) 
// biri bitmeden diğleri de yazdırılmaz..

//  Promise.race([myPromise2, myPromise]).then(data=> {
//     console.log(1)
//     console.log(data)
//  }).catch(err=> console.log(err))


// myPromise.then(data=>{
//     console.log(1)
//     console.log(data)
// }).catch(err=> console.log(err)).finally(()=> console.log("done"))

// fetch("https://northwind.now.sh/api/products").then(response => response.json())
// .then(data => {
//     const length=data.length
//     for(let i=0; i<length; i++){
//         const element=data[i]
//         const myArray = element.name.split(" ");

//         if(myArray.length==1){
//             const liElement= document.createElement("li")
//             liElement.setAttribute('style', 'color:red')
//             liElement.innerText=element.name.toUpperCase()
//             document.querySelector("#products").appendChild(liElement)
//         }
//         else {
//             const liElement= document.createElement("li")
//             liElement.innerText=element.name.toUpperCase()
//             document.querySelector("#products").appendChild(liElement)
//         }

//     }
// })
// .catch(err => console.log(err))

// const addData=()=> {
//     const name=document.querySelector("#name")?.value
//     const unitPrice=document.querySelector("#unitPrice")?.value
//     if(unitPrice && name) {
        
//         const price= +unitPrice
//         let object={
//           name,
//           p: price.toFixed(2)
//         }
//    const requestOptions = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(object),
//         }

//         fetch("https://northwind.now.sh/api/products", requestOptions)
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }

//     else {
//       console.log("required")
//     }
//   }
  
//   const btn= document.querySelector("button")
//   btn.addEventListener("click",addData)
  

// const deleteSupplier = () => {
//     const Id=document.querySelector("#Id")?.value
    
//   if(Id) {

//     const requestOptions = {
//            method: 'DELETE',
//             headers: {
//                'Content-Type': 'application/json',
//            },

//          }

//          fetch(`https://northwind.now.sh/api/suppliers/${Id}`, requestOptions)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             alert("Silme işlemi başarılı")

//         }).catch(e=> console.log(err))
//    }

//     else {
//        console.log("required")
//      }
//  }

//   const btn= document.querySelector("button")
//   btn.addEventListener("click",deleteSupplier)

// let colors = ["red", "green", "yellow", "black", "blue"]

// setInterval(() => {
    
// const randomNumber= Math.floor(Math.random() *10)
// document.querySelector(".box").style.backgroundColor= colors[randomNumber]
    
// },500)


const start = () => {
    const finishLine = 1300 - 200;
    let horse1 = 20;
    let horse2 = 20;
    let horse3 = 20;

    let startTimerInterval = setInterval(startTimer, 200)

    function startTimer() {
        const randomNumber1 = Math.floor(Math.random() * 100);
        const randomNumber2 = Math.floor(Math.random() * 100);
        const randomNumber3 = Math.floor(Math.random() * 100);

        horse1 = horse1 + randomNumber1;
        horse2 += randomNumber2;
        horse3 += randomNumber3;

        document.querySelectorAll('img')[0].style.left = horse1 + "px"
        document.querySelectorAll('img')[1].style.left = horse2 + "px"
        document.querySelectorAll('img')[2].style.left = horse3 + "px"

        if (horse1 > finishLine || horse2 > finishLine || horse3 > finishLine) {
            if (horse1 > horse2 && horse1 > horse3) {
                console.log("İlk at kazandı...");
            } else if (horse2 > horse3) {
                console.log("İkinci at kazandı...");
            } else {
                console.log("Üçüncü at kazandı...");
            }
            clearInterval(startTimerInterval);
        }
    }
}

const btn = document.querySelector("button")
btn.addEventListener("click", start)






