let clicks = 0 ;
function plus(){
    const audio = new Audio("./kamunanya.mp3")
    audio.play()
    clicks += 1
    document.getElementById("clicks").innerHTML = "Kamu telah nanya : " + clicks
    document.getElementById("img-kamunanya").src = "./2.jpeg"
    audio.addEventListener("ended", function(){
        document.getElementById("img-kamunanya").src = "./1.jpeg"
    })
}
function minus(){
    const audio = new Audio("./kamunanya.mp3")
    audio.play()
    clicks--
    document.getElementById("clicks").innerHTML = "Kamu telah nanya : " + clicks
    document.getElementById("img-kamunanya").src = "./2.jpeg"
    audio.addEventListener("ended", function(){
        document.getElementById("img-kamunanya").src = "./1.jpeg"
    })
}