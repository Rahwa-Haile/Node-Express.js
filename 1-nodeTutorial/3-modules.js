//Modules - Encapsulated code (only share minimum)
//CommonJS (this is library name), every file in node is a  module (by default)
const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')//the data type of the variables becomes whatever that was exported
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')//wala export teleygebernayo require aga nbl execute zgebr function tehaliyuwo it will run.



// console.log(names)
 console.log(data)

 sayHi('Rahwa')
//  sayHi(names.john) 
//  sayHi(names.peter)

 sayHi(john)
 sayHi(peter)

