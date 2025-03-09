var pattern=[];
var colors=["green","red","yellow","blue"];
var level=0;
var started=false;
function seq(){
    clickpattern=[];
    level++;
    $("h1").text("Level "+level);
    var randnum=Math.floor(Math.random()*4);
    var randcolor=colors[randnum];
    pattern.push(randcolor);
    $("#"+randcolor).fadeOut(100).fadeIn(100);
    var s= new Audio("./sounds/"+randcolor+".mp3");
    s.play();
    
}
var clickpattern=[];
$(".btn").click(function() {
    var clickedbutt=$(this).attr("id");
    clickpattern.push(clickedbutt);
    $(this).addClass("pressed").delay(100).queue(function(next){
        $(this).removeClass("pressed");
        next();
        })
    check(clickpattern.length-1);
    playsound(clickedbutt);
})
function playsound(name){
    var s1= new Audio("./sounds/"+name+".mp3");
    s1.play();
}
$(document).keypress(function(){
    if(!started){
        $("h1").text("Level "+level);
        seq();
        started=true;
    }
});
function check(currentlvl){
    if(pattern[currentlvl]==clickpattern[currentlvl]){
        console.log("correct");
        if(pattern.length==clickpattern.length){
            setTimeout(function () {
                seq();
              }, 1000);}

    } else{
        console.log("wrong");
        var se= new Audio("./sounds/wrong.mp3");
        se.play();
        $("body").addClass("game-over").delay(200).queue(function(next){
            $(this).removeClass("game-over");
            next();
            });
        $("h1").text("Sorry, skill issue 😁. Press any key to retry")
        level=0;
        pattern=[];
        started=false;
    }
}


