let w = 600
let h = 400
let d = 50
let r = d/2

let ax = 0.02
let x = 0
let vx = 0

let ay = 0
let y = h/2
let vy = 0


function setup()
{
    createCanvas(w,h)
    background("green")
}

function draw()
{
    background("green")
    fill(255, 0, 0)
    circle(x, y, d)

 //velocità sull'asse x
   vx = vx + ax
    x = x + vx


    if(x >= w+r)
    {
        x = r //modifichiamo la posizione del cerchio non la vx
    }
    
    if(x <= -r)
    {
        x = w+r
    }

//velocità sull'asse y
    vy = vy + ay;
    y = y + vy;

    if (y >= w+r)
    {
        y = r
    }

    if(y <= -r)
    {
        y = h+r
    }
}