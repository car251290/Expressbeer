const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000;

let beers = [{
    "id: 192",
    "name: Punk IPA 2007 - 2010",
    "tagline: Post Modern Classic.Spiky.Tropical.Hoppy",
    "first_brewed": "04/2007",
    "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    "image_url": "https://images.punkapi.com/v2/192.png",
    "abv": 6.0,
    "ibu": 60.0,
    "target_fg": 1010.0,
    "target_og": 1056.0,
    "ebc": 17.0,
    "srm": 8.5,
    "ph": 4.4,
    "attenuation_level": 82.14,
    "volume": {
        "value": 20,
        "unit": "liters"
    },
    "boil_volume": {
        "value": 25,
        "unit": "liters"
    },
    "method": {
        "mash_temp": [{
            "temp": {
                "value": 65,
                "unit": "celsius"
            },
            "duration": 75
        }],
        "fermentation": {
            "temp": {
                "value": 19.0,
                "unit": "celsius"
            }
        },
        "twist": null
    },
    "ingredients": {
        "malt": [{
            "name": "Extra Pale",
            "amount": {
                "value": 5.3,
                "unit": "kilograms"
            }
        }],
        "hops": [{
                "name": "Ahtanum",
                "amount": {
                    "value": 17.5,
                    "unit": "grams"
                },
                "add": "start",
                "attribute": "bitter"
            },
            {
                "name": "Chinook",
                "amount": {
                    "value": 15,
                    "unit": "grams"
                },
                "add": "start",
                "attribute": "bitter"
            }
        ],
        "yeast": "Wyeast 1056 - American Ale™"
    },
    "food_pairing": [
        "Spicy carne asada with a pico de gallo sauce",
        "Shredded chicken tacos with a mango chilli lime salsa",
        "Cheesecake with a passion fruit swirl sauce"
    ],
    "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
    "contributed_by": "Sam Mason <samjbmason>"
}]

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('https://api.punkapi.com/v2/', (req, res) => {
    const beers = req.body;

    // output the book to the console for debugging
    console.log(beers);
    beers.push(beers);

    res.send('Beers is added to the database');
});

app.get('https://api.punkapi.com/v2/', (req, res) => {
    res.json(beers);
});

app.get('https://api.punkapi.com/v2/:id', (req, res) => {
    // reading isbn from the URL
    const id = req.params.id;

    // searching books for the isbn
    for (let beers of beers) {
        if (beers.id === id) {
            res.json(beers);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('beer not found');
});

app.delete('https://api.punkapi.com/v2/:id', (req, res) => {
    // reading isbn from the URL
    const id = req.params.id;

    // remove item from the beers array
    beers = beers.filter(i => {
        if (i.id !== id) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('beers is deleted');
});

app.post('https://api.punkapi.com/v2/:id', (req, res) => {
    // reading isbn from the URL
    const id = req.params.id;
    const newBeer = req.body;

    // remove item from the books array
    for (let i = 0; i < beers.length; i++) {
        const beers = beers[i]

        if (beers.id === id) {
            beers[i] = newBeer;
        }
    }

    // sending 404 when not found something is a good practice
    res.send('beers is edited');
});

app.listen(port, () => console.log(`on port ${port}!`));