const num1 = 5;
const num2 = 10;


function addValues(){
    console.log(`the sum is ${num1+num2}`)
}

addValues()

//kemlteredakwo require aga nbl we are invoking it kulushai slezi it executes abti lelewo koinu when we erite node (require lgeberklu module name). antewoy sayHi error lhbena lnebere ab kalie koinna(abti require lbelnalu module) neti function call lagebernayo sle lnbere eyu (export keytegebere kemu aykaln). abzi gn ab balu abzi kelo ina tfunction call gernayo hence we can access it 
//Normally when node exports it wraps it in a function. But here we are not talking about executing. when we require a module thus invoking it it does some cool stuff behind the scenes. Same way this executes here not in app.js.