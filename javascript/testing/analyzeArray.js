function analyzeArray(arr = []){
    if(typeof arr !== "object" || arr.length == 0){
        return arr;
    }
    // average
    let average = arr.reduce((total, currentVal) => {
       return total + currentVal
    })
    average = average / arr.length;

    // min & max value
    let min = arr[0];
    let max = arr[0];
    arr.forEach((entry) => {
        min = entry < min ? entry : min;
        max = entry > max ? entry : max;
    })
    const arrObject = {
        average,
        min,
        max,
        length: arr.length
    }
    return arrObject;
}


export default analyzeArray;