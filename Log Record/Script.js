
var readline=require('readline-sync');
fs = require('fs')


function add(x,y){
    if(x<0 && y<0)
        throw new Error('You Entered wrong Numbers');
    else   
        console.log(`Addition is ${x+y}`);
}
function sub(x,y){
    if(x<y)
        throw new Error('subtraction will give negative value');
    else   
        console.log(`substraction is ${x-y}`);
}
function mul(x,y){
    if(x==0 || y==0)
        throw new Error('multiplication will give zero');
    else   
        console.log(`Multiplication is ${x*y}`);
}
function div(x,y)
{
    if(y==0)
        throw new Error('can not divide by Zero');
    else   
        console.log(`Division is ${x/y}`);
}


var a=parseInt(readline.question("Enter the First number:"));
var b=parseInt(readline.question("Enter the Second number:"));


try {
    add(a,b);
} catch (err) {
    fs.appendFileSync('Errors.txt',err.toString()+'\n');
     console.log("Error ocerd:"+err);

}
try {
    sub(a,b); 
} catch (err) {
    fs.appendFileSync('Errors.txt',err.toString()+'\n');
     console.log("Error ocerd:"+err);

}
try {
    mul(a,b);
} catch (err) {
    fs.appendFileSync('Errors.txt',err.toString()+'\n');
     console.log("Error ocerd:"+err);
}
try {
    div(a,b);
} catch (err) {
    fs.appendFileSync('Errors.txt',err.toString()+'\n');
     console.log("Error ocerd:"+err);
}