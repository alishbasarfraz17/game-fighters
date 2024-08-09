var character = document.getElementById("character");
var character = document.getElementById("characters")
var right = 0;
var left = 0;

function animation(event) {
    console.log(event.keyCode);




    // CHARACTER 1




    // FORWARD

    if (event.keyCode === 68) {
        character.src = "images/hoahmaru-tornado.gif"
        right += 10;
        character.style.left = right + "px";
        character.style.height = "190px"
        character.style.width = "160px"
        setTimeout(function () {
            character.src = "images/haoh-maru-standing.gif"
        }, 2000)
    }




    //    BACKWARD

    if (event.keyCode === 65) {
        character.src = "images/haoh-walkback.gif"
        right -= 10;
        character.style.left = right + "px";
        character.style.height = "190px"
        character.style.width = "160px"
        setTimeout(function () {
            character.src = "images/haoh-maru-standing.gif"
        }, 3000)

    }


    // JUMP

    if (event.keyCode === 87) {
        character.src = "images/haoh-maru-jumpup.gif"
        character.style.height = "190px"
        character.style.width = "160px"
        setTimeout(function () {
            character.src = "images/haoh-maru-standing.gif"
        }, 2000)
    }


    //  CHARACTER 2


    // FORWARD


    if (event.keyCode === 37) {
        character.src = "images/ryu-forward.gif"
        left += 10;
        character.style.left = left + "px";
        character.style.height = "180px"
        character.style.width = "100px"
        setTimeout(function () {
            character.src = "images/ryu-standing.gif"
        }, 1000)
    }





    //    BACKWARD

    if (event.keyCode === 39) {
        character.src = "images/ryu-backward.gif"
        right -= 10;
        character.style.left = left + "px";
        character.style.height = "190px"
        character.style.width = "160px"
        setTimeout(function () {
            character.src = "images/ryu-standing.gif"
        }, 3000)

    }





}

window.onkeydown = animation;