let arr = [{count:35,price:12},{count:56,price:3}];
arr.reduce(function (prev,next) {
    return prev+next.count*next.price;
},0);
console.log(arr);
let num = [[1,386,68],[23,56,968],[1,9,6]];
num.reduce(function (prev,next) {
   return prev.concat(next);
});
console.log(num);
let a = b => c => b+c;
console.log(a(1)(2));



