function Random(arr){
    const [v1,v2,...v3] = arr; 
    const last = v3.pop();
    console.log(v1,v2,last);
}
const arr1 = [1,2,3,4];
const arr2 = [10,20,1,2,3,4];
const arr3 = [1,2,3,4,8,9,5];
Random(arr1);
Random(arr2);
Random(arr3);