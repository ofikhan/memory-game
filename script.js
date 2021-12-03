document.addEventListener('DOMContentLoaded', () => {

    // Card options

    const cardArray = [{
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'python',
            img: 'images/python.png'
        },
        {
            name: 'python',
            img: 'images/python.png'
        },
        {
            name: 'python',
            img: 'images/python.png'
        },
        {
            name: 'python',
            img: 'images/python.png'
        },
        {
            name: 'node',
            img: 'images/node.png'
        },
        {
            name: 'node',
            img: 'images/node.png'
        },
        {
            name: 'node',
            img: 'images/node.png'
        },
        {
            name: 'node',
            img: 'images/node.png'
        },
        {
            name: 'sass',
            img: 'images/sass.png'
        },
        {
            name: 'sass',
            img: 'images/sass.png'
        },
        {
            name: 'sass',
            img: 'images/sass.png'
        },
        {
            name: 'sass',
            img: 'images/sass.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsMatched = [];

    // Create board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard)
            grid.appendChild(card);
        }
    }

    // Check for matches

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            //alert("You have found a match");
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].style.pointerEvents = "none";
            cards[optionTwoId].style.pointerEvents = "none";
            cardsMatched.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            //alert("Sorry! not matched. Try again.");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsMatched.length;
        if (cardsMatched.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You have found all matches';
        }
    }

    // Flip card

    function flipcard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }

    }

    createBoard();
});