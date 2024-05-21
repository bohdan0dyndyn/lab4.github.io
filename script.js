
let randomArr = function(kilkElem,withUndefinedEl=false){
    let arr = new Array(kilkElem);
    let kUnd = Math.floor(Math.random() * 100);
    for(let i=0;i<kilkElem;i++){
        arr[i]=Math.floor(Math.random() * 100)
    }

    if(withUndefinedEl){
        for(let i=0; i<kUnd;i++){
            arr[Math.floor(Math.random() * 99)]=undefined;
        }
    }

    return arr;
}

let array1 =randomArr(100);

console.log("Початковий масив без Undefined  ");
console.log(array1);
let array2 = sort.obmin(array1,false);
console.log(array2);
let array3 = sort.minElement(array1,true);
console.log(array3);
let array4 = sort.vstavka(array1);
console.log(array4);
let array5 = sort.shell(array1);
console.log(array5);
let array6 = sort.hoar(array1, false);
console.log(array6);

console.log("\n\n\n\n\n");
let array11 =randomArr(100, true);

console.log("Початковий масив з Undefined  ");
console.log(array11);
let array21 = sort.obmin(array11,false);
console.log(array21);
let array31 = sort.minElement(array11,true);
console.log(array31);
let array41 = sort.vstavka(array11,false);
console.log(array41);
let array51 = sort.shell(array11);
console.log(array51);
let array61 = sort.hoar(array11, false);
console.log(array61);