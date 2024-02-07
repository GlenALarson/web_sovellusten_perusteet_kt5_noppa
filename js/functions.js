const dice = document.querySelector('#dice img')

const getRandomIntNumberInRAnge = (min,max) => {
    return Math.floor(Math.random() * max) +min;
}

dice.addEventListener('click',()=> {
    const randomized_number = getRandomIntNumberInRAnge(1,6)
    const imagename = randomized_number + '.png'
    dice.src = 'img/' + imagename
})