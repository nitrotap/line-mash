// separate by line

const testString =
    `one
two
three
four four2 four3
five`;

function lineOrganizer(input) {
    let lineArray = input.split('\n');
    let indexArray = [];
    for (let i = 0; i < lineArray.length; i++) {
        indexArray.push(i);
    }

    // randomize items in indexArray
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            // remaining elements at random
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    let shuffArray = shuffle(indexArray);
    let endArray = [];

    for (let i = 0; i < shuffArray.length; i++) {
        endArray.push(lineArray[shuffArray[i]]);
    }

    // console.log(endArray);
    let endString = '';
    let a = '';
    for (let i in endArray) {
        // console.log(endArray[i])
        endString += endArray[i] + ' ';
    }
    console.log(endString);
    let obj = {
        array: endArray,
        string: endString,
        input: lineArray
    };
    return obj;
}


// randomize each element from array
// pick a single element at random from array
function pickLine(arr) {
    let aIndex = Math.floor(Math.random() * arr.length);
    console.log(aIndex);
    let a = arr[aIndex];
    console.log(a);
    return a;
}
