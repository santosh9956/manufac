export  const findMean = (array) => {
    return array.reduce((acc, val) => acc + val, 0) / array.length;
};

export const findMode = (array) => {
    let modeMap = {};
    let maxCount = 0;
    let mode = [];

    array.forEach((item) => {
        // console.log(item , 'item ----');

        modeMap[item] = (modeMap[item] || 0) + 1;
        
        if (modeMap[item] > maxCount) {
        maxCount = modeMap[item];
        mode = [item.toFixed(3)];
        } else if (modeMap[item] === maxCount) {
        mode.push();
        }
    });
    // console.log('mode---', mode);
    return mode;
};

export const findMedian = (array) => {
    const sortedArr = array.sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
        return sortedArr[middle];
    }
}; 