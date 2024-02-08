function merge(arrOne, arrTwo) {
    let arrThree = [] // Pushing sorted elements into new array.

    let arrOneSize = arrOne.length
    let arrTwoSize = arrTwo.length

    let i = 0 // iterator for array one,
    let j = 0 // iterator for array two,

    while(i < arrOneSize && j < arrTwoSize)
    {
        if(arrOne[i] < arrTwo[j]) {
            arrThree.push(arrOne[i])
            i++
        } else {
            arrThree.push(arrTwo[j])
            j++
        }
    }

    // Pushing remaining elements into new array.
    for(;i < arrOneSize; i++) {
        arrThree.push(arrOne[i])
    }

    for(;j < arrTwoSize; j++) {
        arrThree.push(arrTwo[j])
    }

    return arrThree
}

function mergeSort(array) {
    const half = array.length / 2

    // Base case or terminating case
    if(array.length < 2){
        return array
    }

    const left = array.splice(0, half)

    return merge(mergeSort(left),mergeSort(array))
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(arr))
