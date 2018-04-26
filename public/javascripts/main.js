const world = require('./modules/variable');
const { $ } = require('./modules/bling');

const logMe = word => `hello ${word}`;

console.log(logMe(world));

const sample = document.querySelector('.sample');
// const bling = document.querySelector('.bling');

sample.innerHTML = 'Hello';
$('.bling').innerHTML = world;
