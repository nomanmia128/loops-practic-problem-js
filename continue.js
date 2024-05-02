var numbers = [45, 48, 87, 44, 38, 59, 88, 90, 100];
for(var i = 0; i < numbers.length; i++){
var number = numbers[i];
if(number > 50){
    continue;
}
console.log(number)
}