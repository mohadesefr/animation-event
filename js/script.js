const inputUser = document.querySelector('.title');

document.addEventListener('keyup', (event) => {
    let elemKey = document.getElementById(event.key.toUpperCase());
    elemKey.classList.add('hit');

    elemKey.addEventListener('animationend', () => {
        elemKey.classList.remove('hit');
    });

    if (event.key === 'Backspace') {
        inputUser.innerHTML = inputUser.innerHTML.slice(0, -1);
    }else {
        inputUser.innerHTML += event.key;
    }
    console.log(event);
});

