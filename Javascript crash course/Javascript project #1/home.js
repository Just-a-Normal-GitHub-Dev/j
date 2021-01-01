console.log('hello');


//alert('Your message here')

//This is how to comment on Javascript the alert commands and console.log commands are the same on html and javascript.

//Variables
//var (something) = 'something';
var A = 'ABC';
console.log(A);
//Now the computer will print ABC because A is the varible of ABC don't forget to not include the ' because it is a variable.
//You can also store/put numbers into variables which is totally fine. Also don't forget to not inculde ' which is very important or it will just print out the text in the ' not the variable.
var somenumber = '69';
console.log(somenumber);
//You can also get script from the html file by doing document.getElementByid=('your id's name')
//To change what the document id says you can simply do this document.getElementById('your id name here').innerHTML = 'your text here'; don't forget to do HTML all capital here or it won't work.
document.getElementById('sometext').innerHTML = 'Hey guys';


//We can even store information that the user types in. To ask a simple question just do prompt('Your question here'); Pretty simple, but we can't store that information. 
//To store information you must do  the following: var age = prompt('Your question here');
var age = prompt('What is your age?');

//Now we could also print out the age that the user inputed by doing the following: document.getElementById('your id name here').innerHTML = (your var name here);
//But then if we do this we will also have to start a new paragraph on the html to do so. The new Html id would be: SOMETEXT of which I will change it to. Go to the Html section, now.
document.getElementById('SOMETEXT').innerHTML = age;


//Numbers in Javascript
//There are a lot of numbers in Javascript you could have a simple var number like: var num1 = 5; which is just and example.
var num1 = 5;
