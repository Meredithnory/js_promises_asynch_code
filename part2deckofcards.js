//PART 2: Deck of Cards -- STEP 1 
function getOneCard() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then((response) => response.json())
        .then(json => {
            const card = json.cards[0];
            console.log(`${card.value} of ${card.suit}`);
        })
        .catch(error => console.error('Error!:', error));
    return;
}

//STEP 2 
function getCardSameDeck() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then((response) => response.json())
        .then(json => {
            const deck_id = json.deck_id;
            //now we have the deck id, now we could use that for the second call to use it for the same deck of card
            fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
                .then((response) => response.json())
                .then(json => {
                    const card = json.cards[0];
                    console.log(`${card.value} of ${card.suit}`);
                })
                .catch(error => console.error('Error!:', error));
        }
        );
    return;
}
//STEP 3 
let deckID = null;

function initiateDeck() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then((response) => response.json())
        .then(json => {
            deckID = json.deck_id;
            const card = json.cards[0];
            console.log('Deck intialized with ID:', deckID);
            console.log(`${card.value} of ${card.suit}`);
            console.log(json);

            // // Create a new image element
            // const img = document.createElement('img');
            // // Set the image source 
            // img.src = json.cards[0].image;
            // // Append the image to the image div with id 'card-images'
            // document.getElementById('card-images').appendChild(img);

            makeImage(json.cards[0].image);

        })
        .catch(error => console.error('Error!', error));

};

function makeImage(url) {
    const img = document.createElement('img');
    img.src = url;
    const randomNum = Math.floor(Math.random() * 91) - 45;
    console.log(randomNum);
    img.style.transform = `rotate(${randomNum}deg)`;
    document.getElementById('card-images').appendChild(img);
    return;
}
// document.getElementById('myButton').addEventListener('click', function ());
function drawCard() {
    console.log(deckID);
    if (deckID === null) {
        initiateDeck();
        return;
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
            .then((response) => response.json())
            .then(json => {
                makeImage(json.cards[0].image);

            })
            .catch(error => console.error('Error!:', error));
    }
    return;
}