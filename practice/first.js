// const product={

//     name:'Pen',
//     rating:4,
//     price:270,
//     offer:5,
// }

// console.log(product)

// const profile={
//     name:'arya',
//     isFollow:true,
//     followers:900,
//     following:9,
//     bio:''
// }
// console.log(profile)

// let num=prompt('Enter any number');
// if(num%5===0){
//     alert(`${num} is divisible by 5`)
// }else{
//     alert(`${num} is not divisible by 5`)
// }

// let score = 86;
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// } else {
//   grade = "Invalid Score!";
// }

// console.log(`Grade = ${grade}`);
// confirm('this is a confirm message')

// for(let i=0; i<=100;i++){
//     if(i%2===0){

//         console.log(i)
//     }
// }

// let gameNum = 18;
// let result;
// let userNum = prompt("Enter the Game Number:");
// while (gameNum != userNum) {
//   if (userNum < gameNum) {
//     result = `Your number is less than game number`;
//     userNum = prompt(`Your number is less than game number. Guess again`);
//   } else if (userNum > gameNum) {
//     result = `Your number is greater than game number`;
//     userNum = prompt(`Your number is greater than game number. Guess again`);
//   }
// }
// if (userNum == gameNum) {
//   alert(`You guessed it right! the number is ${gameNum}`);
//   result = `You guessed it right! the number is ${gameNum}`;
// }
// console.log(result);

// let fullName=prompt('Enter Your Fullname :');
// let len=fullName.length
// let userName= `@${fullName}${len}`
// console.log(userName)

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let mark of marks){
//     sum=sum+mark;
// }
// let average=sum/marks.length;
// console.log(average)

// let items=[250,645,300,900,50];
// // for(let item of items){
// //     let offer=item/10;
// //     item=item-offer
// // }
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer
// }
// console.log(items)

// let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// console.log(companies)
// companies.shift()
// console.log(companies);
// companies.splice(2,1,'Ola')
// console.log(companies);
// companies.push('Amazon')
// console.log(companies)

// let mul=(a,b)=>{
//     return a*b
// }
// console.log(mul(2,4))

// function vowelCount(str) {
//   let count = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"||i === "A" || i === "E" || i === "I" || i === "O" || i === "U") {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(vowelCount("sOundarya"));

// const vowelCounter=(str)=>{
//     let count = 0;
//     for (let i of str) {
//       if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"||i === "A" || i === "E" || i === "I" || i === "O" || i === "U") {
//         count++;
//       }
//     }

//     return count;
// }
// console.log(vowelCounter("sri"));

// let arr=[1,2,3,4,5]
// let squareArr=[];
// arr.forEach((val)=>{
// val=val*val;
// squareArr.push(val)
// console.log(val)
// })
// console.log(squareArr)

// let marks=[89,87,93,64,99,92];
// let filterMarks=marks.filter((val)=>{
//     return val>90
// })
// console.log(filterMarks)

// let num = prompt("Enter number n:");
// let arr = [];

// for (let i = 0; i < num; i++) {
//   arr.push(i + 1);
// }
// console.log(arr);

// let sum = arr.reduce((pre, cur) => {
//   return pre + cur;
// });
// console.log(`Sum of ${arr} is ${sum}`);

// let product = arr.reduce((pre, cur) => {
//   return pre * cur;
// });
// console.log(`Product of ${arr} is ${product}`);

// let ele=document.querySelector('h2');
// console.log(ele)
// console.dir(ele)
// ele.innerText=`${ele.innerText} from Apna College students`

// let divs=document.querySelectorAll('.box');
// console.log(divs)
// for(let i=0;i<divs.length;i++){
// divs[i].innerText=`Unique text ${i+1} `
// }

// let button = document.createElement("button");
// button.innerText = "click me";
// button.style.backgroundColor = "red";
// button.style.color = "white";
// document.querySelector("body").prepend(button);

// let para=document.querySelector('p');

// console.log(para.getAttribute('class'))
// console.log(para.setAttribute('class','altPara'))
// console.log(para.getAttribute('class'))

// console.log(para.getAttribute('class'))
// para.classList.add('altPara');
// console.log(para.getAttribute('class'))

let toggleBtn = document.querySelector("#toggle");
let mode = "light";
let body = document.querySelector("body");
toggleBtn.addEventListener("click", () => {
  if (mode === "light") {
    body.classList.add("dark");

    mode = "dark";
  } else {
    body.classList.remove("dark");

    mode = "light";
  }
  console.log(mode);
});

let hovered=false;
let message=document.querySelector('#mssg');
document.addEventListener('mouseover',()=>{
    if(hovered===false){

        message.innerText='Ouch!!'
        hovered=true
    }else{
        message.innerText=''
        hovered=false

    }
})