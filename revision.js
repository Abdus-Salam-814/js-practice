console.log(5 > 10); // false
console.log(5 < 10); // true
console.log(5 == 10); // false
console.log(10 == 10); // true
console.log(15 >= 10); // true
console.log(15 <= 10); // false
console.log(100 <= 10); // false
console.log(10 == 10); // true
console.log(10 == 10.1); // false
console.log(0 == false); // true
console.log(1 == false); // false
console.log(1 == true); // true
console.log(0 == true); // false

console.log('========================')
let peyaraPrice = 40;
let applePrice = 250;
console.log(peyaraPrice > applePrice) // false
console.log(peyaraPrice < applePrice) // false



console.log('============(== VS ===)=================')

console.log(10 == '10') // true
console.log(10 === '10') // false

console.log('============(!= VS !==)=================')

console.log(10 != '10') // false
console.log(10 !== '10') // true


console.log('=========(if Else Condition)========')

const name = 'Jason';
if (name === 'Jason'){
    console.log('Hello Jason, Welcome')
}else{
    console.log("Sorry, I don't know You")
}

console.log('=========(More if Else Condition)========')

const age = 10;
if(age > 10){
    console.log('আপনি মেলাই ঢুকতে পারবেন')
}else if(age === 10){
console.log('একটু অপেক্ষা করুন, পতিনিধির শাথে কথা বলুন')
}else{
    console.log(`দুখিত, আপনার বয়স কম, ফিরে জান `)
}

console.log(`========(Multi Level Condition)===========`);

const price = 2000;

if (price >= 5000){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log('aponi discount apichen', discount, "Taka", 'Akhon Pament korun', payAmount, 'Tak')
}else if (price > 2500){
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log('aponi discount apichen', discount, "Taka", 'Akhon Pament korun', payAmount, 'Tak')
}else{
    console.log('Sorry, Not approval Discount!', 'Please Pay', price, 'Taka')
}

console.log('=============(Ternary operator)===================')

const marksObject ={
    bangla: 79,
    english: 80,
    math: 95,
    arabic: 100
}
// console.log(marksObject)
const objectValue = Object.values(marksObject);

console.log(objectValue);

let marksum = 0;

for(let i = 0; i < objectValue.length; i++){
    // console.log(i);
    const mark = objectValue[i];
    // console.log(mark);

    marksum = marksum + mark;



}

const markAvg1 = marksum / objectValue.length;
console.log(markAvg1, 'This is marks avg');
const markAvg = 40;

if (markAvg >= 80){
    console.log('Your Grade is (A+)')
}else if(markAvg < 80){
    console.log('Your Grade is (A)')

}else if(markAvg < 70){
    console.log('Your Grade is (B)')
    
}else if(markAvg < 60){
    console.log('Your Grade is (C)')
    
}else if(markAvg < 50){
    console.log('Your Grade is (D)')
    
}
else if(markAvg < 40){
    console.log('Your Grade is (B)')
    
}
