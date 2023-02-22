score = 0;
cross = true;

audio = new Audio('backgroundmusic.mp3');
//audiogo = new Audio('');

setTimeout(() => {
    audio.play()
},1000);

document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode);
    if(e.keyCode == 38){//keycode are keyboard events, e here stands for a property of events which is created by keyup and keydown
        dino = document.querySelector('.dino');//query selector is a method which will return the first element which matches to a css selector, it is a jquery funtion which helps us to get the html element to be passed by the parameter by using the css class or id 
        //if you need more selectors we can go with querySelectorAll
        dino.classList.add('animateDino')//classList in javascript is a DOM property which allows you to style the css classes of an element, it is a read only property which will return the name of the css class
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));//getComputedStyle is a method to return the object containing the value of all the css properties of an element.
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));//getPropertyValue 
        dino.style.left = dinoX - 112 + "px";
    }
}

setInterval(() => { //setInterval is used to call a function after a specific time interval
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));// parseInt is how you will parse a particular string into integer
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    //console.log(offsetX);

    if(offsetX < 73 && offsetY < 53){
        gameOver.innerHTML = "Game Over! Play Again.";
        obstacle.classList.remove("obstacleAni");
        // audiogo.play();
         setTimeout(() => {
        //     audiogo.pause();
               audio.pause();
         }, 1000);
    }
    else if(offsetX < 145 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration - newDur + 's';
            console.log("New Animation Duration", newDur);
        }, 500);
    }

}, 10);


function updateScore(score){
    scoreCont.innerHTML = "Your score: " + score;
}