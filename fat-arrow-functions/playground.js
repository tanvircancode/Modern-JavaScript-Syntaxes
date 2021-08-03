let searchInput = document.querySelector(".search");
let display = document.querySelector(".result");
let thanks = document.querySelector(".thanks");

function show() {

    display.innerHTML = this.value;

    let x = this;
    setTimeout(function () {
        thanks.innerHTML = `You have typed: ${x.value}`;
    }, 1000);
}

// const show = () => display.innerHTML = this.value;

searchInput.addEventListener("keyup", show);

