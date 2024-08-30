let btns = ["blue", "green", "yellow", "orange"];
let started = false;
let level =0;
let i=0;

let h2 = document.querySelector("h2");
let game_seq = [];

//start game
document.addEventListener("keydown", function(event){
    if(event.key=="s"){
        /* if(started==false){
            started=true;
            level_up();
        } */
       level_up();
    }
}); 

//flash button
function btn_flash(button){
    button.classList.add("flash");
    setTimeout(function(){
        button.classList.remove("flash");
    }, 250);
}

//start and level up 
function level_up(){
    level++;
    h2.innerText = `Level ${level}`; //display level number

    //random button flash
    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randIndex];
    let button = document.querySelector(`.${randColor}`);

    console.log(randColor);
    console.log(randIndex);

    //store game sequence
    game_seq[i++] = randColor;
    console.log(game_seq);

    //enter user sequence
   
    //store user sequence

    //check user sequence




    btn_flash(button);
}























