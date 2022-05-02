
const inputEl = document.querySelector('#input');
const outputEl = document.querySelector('#output');
const inputDataEl = document.querySelector('#input-data');
const orderedListEl = document.querySelector('#input-data-ol')
const outputOrderedListEl = document.querySelector('#output-data-ol')


const pHolder = () => {

    pArray = [
        `Life, friends, is boring. We must not say so.
        After all, the sky flashes, the great sea yearns,
        we ourselves flash and yearn,
        and moreover my mother told me as a boy
        (repeatedly) 'Ever to confess you're bored
        means you have no
        Inner Resources.' I conclude now I have no
        inner resources, because I am heavy bored.
        Peoples bore me,
        literature bores me, especially great literature,
        Henry bores me, with his plights & gripes
        as bad as achilles,
        Who loves people and valiant art, which bores me.
        And the tranquil hills, & gin, look like a drag
        and somehow a dog
        has taken itself & its tail considerably away
        into mountains or sea or sky, leaving
        behind: me, wag.`,

        `You may write me down in history
        With your bitter, twisted lies,
        You may trod me in the very dirt
        But still, like dust, I'll rise.
        Does my sassiness upset you?
        Why are you beset with gloom?
        'Cause I walk like I've got oil wells
        Pumping in my living room.
        Just like moons and like suns,
        With the certainty of tides,
        Just like hopes springing high,
        Still I'll rise.
        Did you want to see me broken?
        Bowed head and lowered eyes?
        Shoulders falling down like teardrops.
        Weakened by my soulful cries.
        Does my haughtiness offend you?
        Don't you take it awful hard
        'Cause I laugh like I've got gold mines
        Diggin' in my own back yard.
        You may shoot me with your words,
        You may cut me with your eyes,
        You may kill me with your hatefulness,
        But still, like air, I'll rise.
        Does my sexiness upset you?
        Does it come as a surprise
        That I dance like I've got diamonds
        At the meeting of my thighs?
        Out of the huts of history's shame
        I rise
        Up from a past that's rooted in pain
        I rise
        I'm a black ocean, leaping and wide,
        Welling and swelling I bear in the tide.
        Leaving behind nights of terror and fear
        I rise
        Into a daybreak that's wondrously clear
        I rise
        Bringing the gifts that my ancestors gave,
        I am the dream and the hope of the slave.
        I rise
        I rise
        I rise.`,

        `Weep not, weep not,
        She is not dead;
        She's resting in the bosom of Jesus.
        Heart-broken husband--weep no more;
        Grief-stricken son--weep no more;
        Left-lonesome daughter --weep no more;
        She only just gone home.
        Day before yesterday morning,
        God was looking down from his great, high heaven,
        Looking down on all his children,
        And his eye fell of Sister Caroline,
        Tossing on her bed of pain.
        And God's big heart was touched with pity,
        With the everlasting pity.
        And God sat back on his throne,
        And he commanded that tall, bright angel standing at his right hand:
        Call me Death!
        And that tall, bright angel cried in a voice
        That broke like a clap of thunder:
        Call Death!--Call Death!
        And the echo sounded down the streets of heaven
        Till it reached away back to that shadowy place,
        Where Death waits with his pale, white horses.
        And Death heard the summons,
        And he leaped on his fastest horse,
        Pale as a sheet in the moonlight.
        Up the golden street Death galloped,
        And the hooves of his horses struck fire from the gold,
        But they didn't make no sound.
        Up Death rode to the Great White Throne,
        And waited for God's command. 
        And God said: Go down, Death, go down,
        Go down to Savannah, Georgia,
        Down in Yamacraw,
        And find Sister Caroline.
        She's borne the burden and heat of the day,
        She's labored long in my vineyard,
        And she's tired--
        She's weary--
        Do down, Death, and bring her to me.
        And Death didn't say a word,
        But he loosed the reins on his pale, white horse,
        And he clamped the spurs to his bloodless sides,
        And out and down he rode,
        Through heaven's pearly gates,
        Past suns and moons and stars;
        on Death rode,
        Leaving the lightning's flash behind;
        Straight down he came.
        While we were watching round her bed,
        She turned her eyes and looked away,
        She saw what we couldn't see;
        She saw Old Death.She saw Old Death
        Coming like a falling star.
        But Death didn't frighten Sister Caroline;
        He looked to her like a welcome friend.
        And she whispered to us: I'm going home,
        And she smiled and closed her eyes.
        And Death took her up like a baby,
        And she lay in his icy arms,
        But she didn't feel no chill.
        And death began to ride again--
        Up beyond the evening star,
        Into the glittering light of glory,
        On to the Great White Throne.
        And there he laid Sister Caroline
        On the loving breast of Jesus.
        And Jesus took his own hand and wiped away her tears,
        And he smoothed the furrows from her face,
        And the angels sang a little song,
        And Jesus rocked her in his arms,
        And kept a-saying: Take your rest,
        Take your rest.
        Weep not--weep not,
        She is not dead;
        She's resting in the bosom of Jesus.`
    ]

    let num = getRandom(pArray);

    return pArray[num]


    function getRandom(arr) {
        let randNum = Math.floor(Math.random() * arr.length);
        return randNum;
    }
}


let buttonEl = document.querySelector('#button1');
buttonEl.addEventListener('click', function () {
    let inputText = inputEl.value;
    console.log(inputText);
    let outputTextEl = document.querySelector("#output-text");
    let updatedText = lineOrganizer(inputText);
    console.log(updatedText)
    outputTextEl.textContent = updatedText.string;
    outputEl.appendChild(outputTextEl);


    console.log(updatedText.array.length);
    for (let i = 0; i < updatedText.input.length; i++) {
        let listEl = document.createElement('li');
        listEl.textContent = updatedText.input[i];
        orderedListEl.appendChild(listEl);
    }


    for (let i = 0; i < updatedText.array.length; i++) {
        let listEl = document.createElement('li');
        listEl.textContent = updatedText.array[i];
        outputOrderedListEl.appendChild(listEl);
    }
}
);


let randomPoemButtonEl = document.querySelector('#random-poem')
randomPoemButtonEl.addEventListener('click', function () {
    let inputText = pHolder();
    console.log(inputText);
    let outputTextEl = document.querySelector("#output-text");
    let updatedText = lineOrganizer(inputText);
    console.log(updatedText)
    outputTextEl.textContent = updatedText.string;
    outputEl.appendChild(outputTextEl);


    console.log(updatedText.array.length);
    for (let i = 0; i < updatedText.input.length; i++) {
        let listEl = document.createElement('li');
        listEl.textContent = updatedText.input[i];
        orderedListEl.appendChild(listEl);
    }


    for (let i = 0; i < updatedText.array.length; i++) {
        let listEl = document.createElement('li');
        listEl.textContent = updatedText.array[i];
        outputOrderedListEl.appendChild(listEl);
    }

})






