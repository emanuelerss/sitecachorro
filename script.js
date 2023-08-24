var free = document.getElementById('free')
function base() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(data=> {
        return data.json();
    })
    .then(data => {
        console.log(data.message);
        free.src=data.message
    });
}