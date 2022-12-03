let growX = document.getElementById("deltaX")
growX.addEventListener("input" , function(e) 
{
    e.preventDefault
    console.log(`velocià sull'asse x è cambiata --> ${growX.value}`)
    deltaX = parseFloat(growX.value)
    vx = deltaX

})

let growY = document.getElementById("deltaY")
growY.addEventListener("input", function(e)
{
    e.preventDefault
    console.log(`velocità sull'asse y è cambiata --> ${growY.value}`)
    deltaY = parseFloat(growY.value)
    vy = deltaY

})

/*ay = parseFloat(AccelerazioneV.value);
	console.log(typeof ay, ay)*/