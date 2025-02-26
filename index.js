let timer = document.getElementById("timer");
let defuser = document.getElementById("defuser");
let count = 10;
let uniqueId = setInterval(function(){
    count = count-1;
    timer.textContent = count;
    if(count===0){
        timer.textContent = "Boom!";
        clearInterval(uniqueId);
    }
},1000);

defuser.addEventListener("keydown",function(event){
    console.log(event.key);
     if(event.key === "Enter" && defuser.value === "defuse" && count!==0){
        timer.textContent = "You did it!";
        clearInterval(uniqueId);
    }
});