
/*loop usage in javascript
*/

var  num = new Array();

for(var i =0; i<5; i++){
    num[i]= perseInt(prompt("Enter a number: "));
}
var sum=0;

for(var i=0; i<5; i++){
    console.log(num[i]);
    sum=sum+num[i];
}

console.log("Sum = "+sum);