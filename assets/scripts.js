console.log("جواب تمرین 1");   //تمرین1
let seasonNumber = 2;   
let seasonName;
switch (seasonNumber) {
  case 1:
    seasonName = "بهار";
    break;
  case 2:
    seasonName = "تابستان";
    break;
  case 3:
    seasonName = "پاییز";
    break;
  case 4:
    seasonName = "زمستان";
    break;
  default:
    seasonName = "عدد نامعتبر است فقط 1 تا 4 مجاز است";
}
console.log(seasonName);



console.log("");   //یک خط فاصله خالی بین جواب تمرین ها
console.log("جواب تمرین 2");   //تمرین2
let x = 5;
let y = 10;
if (x + y * 2 > 20 && !(y + 3 === 1)) {
  console.log("P");
} else {
  console.log("Q");
}


console.log("");   //تمرین3
console.log("جواب تمرین 3");
let x1 = 0;
let y1 = 10;
let z = 20;
let final = x1 || (y1 && z);
console.log(final);  // اینو اضافه کردم برای نمایش خروجی



console.log("");   //تمرین4
console.log("جواب تمرین 4");  
let count = 3;
if (count++ + 2 < 6 && count-- > 3) 
{
  console.log("First");
} 
else
   {
  console.log("Second");
 }




console.log("");   // تمرین 5
console.log("جواب تمرین 5");  

let totalPrice = 150000;  // قیمت کل خرید مشتری
let shippingCost;

if (totalPrice < 100000) {
    shippingCost = 20000;
} 
else if (totalPrice >= 100000 && totalPrice <= 200000) {
    shippingCost = 10000;
} 
else {
    shippingCost = 0;  
}

console.log("هزینه ارسال:", shippingCost);


