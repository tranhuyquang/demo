// let name = "Hung";
// let name2 = 'Hung1';
// let name3 = `Hoang`;
// let hello = `xin chào ${name}`;


// let number = prompt("nhập vào số lần 1")
// let number2 = prompt("nhập vào số lần 2")
// sum=Number(number)+Number(number2);
// console.log(sum);
// console.log(number - number2);
// console.log(number + number2);
// console.log(number * number2);
// console.log(number / number2);
// let R;
// R=Math.pow(number,2)*Math.PI;
// d=2*number*Math.PI;
// console.log(" bán kính "+number);
// console.log(" diện tích " + R.toFixed(3));
// console.log(" chu vi "+d.toFixed(3));

let tien= prompt("nhập vào số tiền ")
so1= (tien)/100000;
sodu1 =(tien)%100000;
console.log("được " + so1 + " tờ 100000vnd");
so2=(sodu1)/50000;
sodu2=(sodu1)%50000;
console.log("được "+ so2 +"tờ tiền 50000vnd");
so3=(sodu2)/20000;
sodu3=(sodu2)%20000;
console.log("được "+ so3 +"tờ 20000vnd");
so4=sodu3/10000;
console.log("được "+ so4 +"tờ 10000vnd");