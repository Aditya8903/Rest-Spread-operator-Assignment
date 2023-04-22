function MinMax(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const obj = {
        max : max,
        min : min
    };

    console.log(obj);
}

let arr1 = [1,2,3,4];
let arr2 = [-1,12,3,4];
let arr3 = [89,2,23,4];
MinMax(arr1);
MinMax(arr2);
MinMax(arr3);