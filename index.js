// document.getElementById(count-el).innerText = 5







const countEl = document.getElementById("count-el")
const button = document.getElementById('increment-btn');
const savetEl = document.getElementById("save-el")


let count = 0
button.addEventListener('click', () => {
    count ++;
    countEl.textContent = count;
    console.log(count)
})

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // countEl.textContent = 0
    // count = 0
}
