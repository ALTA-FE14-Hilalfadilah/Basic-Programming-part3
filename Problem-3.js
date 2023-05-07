function removeDuplicates(array) {
    let obj = {};
    let ret_arr = [];
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = true;
    }
    for (let key in obj) {
        ret_arr.push([key]);
    }
    return ret_arr;
}


console.log(removeDuplicates([2, 2, 2, 11]));