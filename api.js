import fetch from 'node-fetch';

const response = await fetch('https://api.covidtracking.com/v1/us/daily.json');
const data = await response.json();
const response2 = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR');
const data2 = await response2.json();

console.log(
    " Le nombre de cas Covid est de : " + data[0]["positive"] + " et le cours de l'Ethereum est de : " + data2["EUR"]
);