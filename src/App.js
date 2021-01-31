async function fetchText() {
    let response = await fetch('https://api.punkapi.com/v2/beers');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    } else {

        console.log(response.status); // 400

    }
}

fetchText();

const App = () => {


}