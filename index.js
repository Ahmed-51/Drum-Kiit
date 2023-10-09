

var num = document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var y = this.innerHTML;
    makesound(y);
    animation(y);
  });
}


document.addEventListener("keydown", function(event){
  makesound(event.key);
  animation(event.key);
});



function makesound(x){
  if(x==="w"){
    var w = new Audio("sounds/tom-1.mp3");
    w.play();
  }
  else if(x==="a"){
    var a = new Audio("sounds/tom-2.mp3");
    a.play();
  }
  else if(x==="s"){
    var s = new Audio("sounds/tom-3.mp3");
    s.play();
  }
  else if(x==="d"){
    var d = new Audio("sounds/tom-4.mp3");
    d.play();
  }
  else if(x==="j"){
    var j = new Audio("sounds/snare.mp3");
    j.play();
  }
  else if(x==="k"){
    var k = new Audio("sounds/crash.mp3");
    k.play();
  }
  else if(x==="l"){
    var l = new Audio("sounds/kick-bass.mp3");
    l.play();
  }
}




function animation(x){
    var activebutton = document.querySelector("." + x);
    activebutton.classList.add("pressed");
    setTimeout(function(){
      activebutton.classList.remove("pressed");
    }, 100);
}







// end of script
