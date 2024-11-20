// TERNARY ---> Three Partes

// ? :

//  Condition ? do something when true : do something when false

const age = 11;

// normal if else 
if(age >= 18){
    console.log("'your can Vote.")
}else{
    const opekkha = 18 - age;
    if(opekkha > 1){
        console.log(opekkha, 'Years opekha koro')
    }else{
        console.log(opekkha, 'Year opekha koro')

    }
    
}

console.log('===================(Ternary Operator)=================');

age >= 18 ? console.log("You Can Vort") : console.log(18 - age, 'year Opekkha koro',);



