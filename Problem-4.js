function meanMedian(arrayInput) {
    // mean kalkulasi
    const tambah = arrayInput.reduce((accumulator, values) => accumulator + values, 0); // untuk menghitung semua jumlah angka
    const mean = tambah / arrayInput.length;

    // median kalkulasi
    arrayInput.sort((a, b) => a - b); // untuk mengurutkan angka
    const tengah = Math.floor(arrayInput.length / 2);
    const median = arrayInput.length % 2 === 0 ? (arrayInput[tengah - 1] + arrayInput[tengah]) / 2 : arrayInput[tengah];

    return { mean, median };
}

console.log(meanMedian([1, 2, 3, 4]));
console.log(meanMedian([1, 2, 3, 4, 5]));
console.log(meanMedian([7, 8, 9, 13, 15]));
