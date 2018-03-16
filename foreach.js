let arr = [1,3,235,358,6,67868];
for(let i=0;i<arr.length;i++){
    console.log('<p>'+arr[i]+'</p>');
}
arr.forEach(function (item,index) {
    console.log('<h1>'+item,index+'</h1>');
});
for(let key in arr){
    console.log(key);
    console.log(typeof key);//key变为string
}
for(let num of arr){
    console.log(num);//不能遍历对象
}
let people ={
    name:'春芽',
    age:12,
    sex:'nan'
};
for(let per of Object.keys(people)){
    console.log(people[per]);//遍历数组
}
let arrs = arr.filter(function (item) {
   return item<300&&item>1;
});
console.log(arrs);
let arr1 = arr.map(function (item) {
    return `<li>${item}</li>`;
});
console.log(arr1);
let result = arr.find(function (item) {
    return item.toString().indexOf(6)>-1
});
console.log(result+'123');
let result1 = arr.some(function (item,index) {
   return  item.toString().indexOf(358)>-1;
});
console.log(result1);
let result2 = arr.every(function (item,index) {
   return item.toString(2);
});
console.log(result2);
let result3 = arr.reduce(function (prev,next,index,item) {//prev数组第一项，next数组第二项
   console.log(arguments);
   return prev+next;
});
console.log(result3);
arr.forEach(item=> console.log(item)
);
buy().then(function () {

},function () {

});
