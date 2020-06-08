function select(params) {
   return document.querySelector(params)
}
let text= select('.h3');
let container=select('.container')
let totalTime=7500;
let breathIn =(totalTime/5)*2
let hold=totalTime/5
// console.log(text);

function relaxa() {
    text.textContent="Breath in"
    container.className='container grow'
    setTimeout(() => {
       text.textContent="Hold" 

      setTimeout(() => {
        text.textContent="Breath out"
        container.className='container shrink'
        
      }, hold);

    }, breathIn);
}

setInterval(relaxa,totalTime)
