const arrayOne = [11, 4926, 27, 3, 72];

const add = (a, b) => a + b;

const getAverage = someArray => {
    return someArray.reduce(add) / someArray.length
}

getAverage(arrayOne);
