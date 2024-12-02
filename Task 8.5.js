var i = 0;  
var sum = 0;
var num = [];
while (true) {
    num [i] = prompt('Put number', ' ');
    if(num[i] == null) { 
        break;
    } 
    
    sum = sum + parseInt(num[i]);
    i++;
}
console.log(sum);