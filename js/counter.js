let count = 1;

function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}

function decrease() {
    if (count > 1)
    count--;
    document.getElementById("counter").innerText = count;
}