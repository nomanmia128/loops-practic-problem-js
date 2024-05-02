// for in use break
// for(var i = 0; i < 20; i++){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
// }

// while in use break
// var numbers = 0;
// while(numbers < 10){
//     console.log('number den prem korbo');
//     numbers++;
//     if(numbers > 5){
//         break;
//     }
// }

var items = ['botole', 'mouse', 'sunglass', 'pen'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }console.log(item);

}