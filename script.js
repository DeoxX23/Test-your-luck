

function generateNumber(min, max) {
    const inputMin = document.getElementById("input-min").value
    const inputMax = document.getElementById("input-max").value
    min = Math.ceil(inputMin);
    max = Math.floor(inputMax);
    const result = Math.floor(Math.random() * (max - min) + min)
    alert(result)
}
