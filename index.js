
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');
let move = canvas.style

let parentStyle = canvas.parentElement.style;
parentStyle.textAlign = "center";
parentStyle.width = "100%";



// load all images

let sb = new Image()
sb.src = '/images/SCARY (1).png';
let mr = new Image()
mr.src = "/images/mewtwo-run.png"
let mb = new Image()
mb.src = "/images/masterball.png"
let egg = new Image()
egg.src = "/images/eggs.png"


// CLASSES -------------------//
let gravity = 0.1
let score = 0
let player
let mewY = canvas.height - 110
let mewX =  50
let eggs = [
    {x: 600 , y: canvas.height - 200         } ,
    {x:1000 , y: canvas.height - 200          }
]
let eggsX = 600
let eggsY = canvas.height - 200
let maxX = 100
let maxY = 600
let maxIncrement = 0
let gameOver = false
let jumping = false
let grounded = true



// let fg = new Image();
// fg.src = './images/fg.png';

// let bird = new Image();
// bird.src = './images/bird.png'




function draw(){
    ctx.drawImage(sb, 0 ,0 , 2000, 500)
    ctx.drawImage(mr, mewX , mewY, 150, 110)
    // ctx.drawImage(egg, eggsX, eggsY, 100, 200)


    for(let i = 0; i <eggs.length; i++){
        ctx.drawImage(egg, eggs[i].x, eggs[i].y, 100, 200)
        eggs[i].x = eggs[i].x - 3


        if (eggs[i].x + 100 < 0) {
                eggs[i].x = 1000
                
                
            }
    }





    eggsX = eggsX - 2
   
   
    intervalId = requestAnimationFrame(draw)
   
   
    if(gameOver){
        cancelAnimationFrame(intervalId)
     
    }
    


    if(mewY >= (canvas.height -109)){
        mewY = canvas.height-110
    }

    if(jumping){
        mewY = mewY -3
        
    }
    if (!jumping ){
        mewY = mewY +3
    }
    // if(mewH <= 331){
    //     birdY = birdY - 10
    //     jumping = false
    // }


    


}





window.addEventListener('load', () => {
    
    draw()
    document.addEventListener('mousedown', (event) => {
        
            jumping = true
            console.log("hello")
                    
        
    })
    
    document.addEventListener('mouseup', () => {
        
            jumping = false
        
        
    
    }) 
})
 