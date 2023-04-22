// we can easily do it with use of set()

function removeDuplicates(arr){
    let myset = new Set(arr);
    
    arr = Array.from(myset);

    return arr;
}

let array1 = [1,2,3,4,2,3,1,2];
arr2 = removeDuplicates(array1);
console.log(arr2);