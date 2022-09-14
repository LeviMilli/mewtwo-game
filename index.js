
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
let mewX =  50
let mewY = canvas.height - 110
let mewVX = -7
let mewVY = 3
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

// let eggs = [
//     {x: 600 , y: canvas.height - 200         } ,
//     {x:1000 , y: canvas.height - 200          }
// ]


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
        // if(eggs[i].x <= (mewX + 150) && mewY >= eggs[i].y){
        //         gameOver = true
        //     }
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
        gravity = 0.1
        mewVX += gravity
        mewY += mewVX 
        mewVY = 3
        grounded = false
    }
    if (!jumping && (mewY <= (canvas.height -115) )){
        // gravity = 0.1
        mewVY += gravity
        mewY += mewVY
        mewVX = -7
        grounded = true
    } 
    
    
    // if (grounded){
    //     mewVX = -7
    //     gravity = 0
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
 