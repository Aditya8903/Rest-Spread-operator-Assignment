function swapVal(v1,v2){
    [v1,v2] = [v2,v1];
    return [v1,v2];
}

let x = 10;
let y = 20;
console.log(`Before swapping: x = ${x}, y = ${y}`);

[val1,val2] = swapVal(x,y);
console.log(`Before swapping: x = ${val1}, y = ${val2}`);