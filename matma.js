const imie = document.querySelector('.imie')
const powitanie = document.querySelector('#powitanie')
const nr1 = document.querySelector('#nr1')
const nr2 = document.querySelector('#nr2')
const guess = document.querySelector('#twojWynik')
const btn = document.querySelector('#btn')
let score = 0
const zl = document.querySelector('#zl')
const main = document.querySelector('main')
const aside = document.querySelector('aside')
const zlotych = document.querySelector('.zlotych')
// losowannie liczb
const start = () => {
    const a = Math.floor(Math.random()*(10-2)+2)
    const b = Math.floor(Math.random()*(10-2)+2)
    if(a>b){
        nr1.textContent = a
        nr2.textContent = b
    }else{
        nr1.textContent = b
        nr2.textContent = a
    }
}
// on load event
document.addEventListener('DOMContentLoaded',() => {
  start()
  imie.focus()
})
imie.addEventListener('change',(e) => {
  powitanie.textContent = 'witaj '+imie.value
  main.removeChild(imie)
  guess.focus()
})
document.addEventListener('keydown',(e) => {
  if(guess.value == ''){
    return
  }  
  if (e.key=='Enter') {
    cal()
    spr()
    guess.value = ''
  }
})
function check(){
    if(guess.value == ''){
        guess.focus()
        return
    }
    cal()
    spr()
    guess.value = ''
    guess.focus()
}
function cal() {
    const a = +nr1.textContent
    const b = +nr2.textContent
    let sum = a - b
    return sum
}
function spr() {
    const fcalc = +guess.value
    if (fcalc === cal()){
        win()
    }else{
        lose()
    }
    switch (score) {
        case 5:
            zl.textContent = 1
            aside.replaceChildren('')
            break;
        case 10:
            zl.textContent = 3
            aside.replaceChildren('')
            break;
        case 15:
            zl.textContent = 5
            zlotych.classList.add('anima')
            final_win()
        break;
        default:
            break;
    }
}
function win() {
    score++
    start()
    guess.classList.add('win')
    guess.classList.replace('lose','win')
    const pic = document.createElement('img')
    pic.setAttribute('src','star.png')
    pic.className = 'star'
    aside.appendChild(pic)
}
function lose() {
    guess.classList.replace('win','lose')
    guess.classList.add('lose')
}
function final_win() {
    main.innerHTML = ''
    main.classList.add('final')
}