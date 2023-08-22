document.querySelector('.control-button span').onclick = function (){

    let yourName = prompt("Whats Your Name?");

    if (yourName == null || yourName == ''){

        document.querySelector('.info-container .name span').innerHTML = "Unknown"

    }else{
        document.querySelector('.info-container .name span').innerHTML = yourName
    }

    document.querySelector('.control-button').remove()

}

let duration = 1000

let bloksCotainer = document.querySelector('.meomory-game-block')
// console.log(bloksCotainer )

let blocks = Array.from(bloksCotainer.children)
// console.log(blocks )

let orderRange = [...Array(blocks.length).keys()]
// console.log(orderRange)
console.log(orderRange)
shuffle(orderRange)
console.log(orderRange)

blocks.forEach((block, index) => {

    block.style.order = orderRange[index]

    block.addEventListener('click' , function () {

        flipBlock(block)
        
    })

})


function flipBlock(selectblock){

    selectblock.classList.add("is-flipped")

    let allflippedblocks = blocks.filter(flippBlock => flippBlock.classList.contains('is-flipped'))


    if (allflippedblocks.length === 2){

        stopClicking()

        checkmatchblok(allflippedblocks[0], allflippedblocks[1])

    }

}

function stopClicking(){

    bloksCotainer.classList.add('no-clicking')

    setTimeout(() =>{

        bloksCotainer.classList.remove('no-clicking')

    },duration)

}

function checkmatchblok (firstblock, secondblock){

    let triesElement = document.querySelector('.tries span')

    if (firstblock.dataset.technology === secondblock.dataset.technology){

        firstblock.classList.remove('is-flipped')
        secondblock.classList.remove('is-flipped')

        firstblock.classList.add('is-match')
        secondblock.classList.add('is-match')

    }else{

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1

        setTimeout(()=>{
            firstblock.classList.remove('is-flipped')
            secondblock.classList.remove('is-flipped')
        },duration)

    }

}

function shuffle(array) {

    // Settings Vars
    let current = array.length,
        temp,
        random;
  
    while (current > 0) {
  
      // Get Random Number
      random = Math.floor(Math.random() * current);
  
      // Decrease Length By One
      current--;
  
      // [1] Save Current Element in Stash
      temp = array[current];
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
    
    }
    return array;
}