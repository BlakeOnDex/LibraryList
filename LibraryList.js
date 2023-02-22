var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var B = ["g" , "k" , "p"];
var C= [];
console.log(combine(A,B,C));
console.log(find(4, A));
console.log(find(6, A));
console.log(find(8, A));
console.log(find(0, A));
function combine(listA,listB,listC) {
    for(var i = 0; i < listA.length; i++) {
        listC.push(listA[i]) 
        
        
    }
   for (var j = 0; j < listB.length; j++) {
    listC.push(listB[j])
   }
   return listC;
}   
function find(item,list) {
    var a;
   a= item+" is not in "+list;
    for (var i = 0; i < list.length; i++) {
      if (item==list[i]) {
        a = item+" is found in "+list;
      }
    }
    return a;
}