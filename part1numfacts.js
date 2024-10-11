//PART 1: Number Facts -- STEP 1

function getNumberFact(num) {
    //String literal - back ticks that help add variables into the string that makes it dynamic (the variables passed through)
    fetch(`http://numbersapi.com/${num}?json`)
        .then((response) => response.json())
        .then(json => {
            //from the given object list, we only want the text, so we access the objects key-value pair by .text to get that specific key
            document.getElementById('contents').textContent += `${json.text}\n`;
        })
        .catch(error => console.error('Error!:', error));


    return;
}

// STEP 2 

function getMultiNumberFactz(arrOfNums) {
    // Turn array of numbers into a comma seperated list so that we could pass in multiple numbers with commas!
    const numbers = arrOfNums.join(',');
    fetch(`http://numbersapi.com/${numbers}?json`)
        .then((response) => response.json())
        .then(json => {
            //In order to access the values we must enter the keys so that we only get the values. So we pass keys to json to get values from the object.
            for (let i = 0; i < arrOfNums.length; i++) {
                const key = arrOfNums[i];
                const fact = json[key];

                document.getElementById('contents').textContent += `${fact}\n`;
            }
        })
        .catch(error => console.error('Error!:', error));

    return;
}

getMultiNumberFactz([1, 2, 3]);

//STEP 3 
function sameNumFactz(num, repfacts) {
    for (let i = 0; i < repfacts; i++) {
        getNumberFact(num);
    }
    return;
}
sameNumFactz(7, 4);

