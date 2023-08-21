// document.getElementById(count-el).innerText = 5




// let countEl = document.getElementById("count-el")
// let count = 0
// const button = document.getElementById('increment-btn');
// button.addEventListener('click', () => {
//     count ++;
//     countEl.innerText = count;
//     console.log(count)
// })

const counter = document.getElementById("count-el")
let countEl = document.getElementById("count-el")
let count = 0
const button = document.getElementById('increment-btn');
button.addEventListener('click', () => {
    count ++;
    countEl.innerText = count;
    console.log(count)
})
