// Add your functions here
 function map(arr, func) {
    return arr.map(i => func(i))      
 }

 function reduce(arr, func, start) {
    let a = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < arr.length; i++) {
      a = func(arr[i], a)
    }
  
    return a;
 }