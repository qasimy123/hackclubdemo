$(document).ready(()=>{
    
   $("#exp").hide();
    $("#easy").on("click",explosion
)
})

function explosion(){
     var audio = new Audio("./Explosion_Ultra_Bass-Mark_DiAngelo-1810420658.mp3");
        audio.play();
        $("#exp").fadeIn(0,function(){
             $("#exp").fadeOut(1500);
        });
       
        

}