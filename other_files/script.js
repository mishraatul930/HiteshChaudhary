var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 10);

setTimeout(() => {
    followers.innerText = "You have achieved a milestone"
}, 12000);