function joinArrayRemoveDuplicate(arrayA, arrayB) {
    const combineArray = [...arrayA, ...arrayB]; // gunakan spread operator untuk menggabungkan array
    const newArray = [...new Set(combineArray)]; // gunakan Set untuk menghilangkan duplikat array
    return newArray;
}

console.log(joinArrayRemoveDuplicate(["apel", "nanas", "anggur"], ["apel", "pisang"]));