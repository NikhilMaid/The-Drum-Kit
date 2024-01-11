var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for ( i=0 ; i<document.querySelectorAll ( ".drum" ).length; i++ ){



    function makeSound(letter) {
        switch (letter) {
            case "w":
                var tom1 = new Audio ("sounds/tom-1.mp3");
                tom1.play();   
                break;
            
            case "a":
                var tom2 = new Audio ("sounds/tom-2.mp3");
                tom2.play();   
                break;
    
            case "s":
                var tom3 = new Audio ("sounds/tom-3.mp3");
                tom3.play();   
                break;
    
            case "d":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();   
                break;
    
            case "j":
                var snare = new Audio ("sounds/snare.mp3");
                snare.play();   
                break;
    
            case "k":
                var crash = new Audio ("sounds/crash.mp3");
                crash.play();   
                break;
    
            case "l":
                var kick = new Audio ("sounds/kick-bass.mp3");
                kick.play();   
                break;
        
            default:
                alert("The key uhh pressed is not an assign to any instrument")
                break;
        }
    }


    document.querySelectorAll("button")[i].addEventListener("click",function handleClick( ){
        
        var clickedLetter = this.innerHTML;
        console.log(clickedLetter);
        makeSound(clickedLetter);


        
        
});

}

document.addEventListener( "keydown" , function ( event ){
    
    var pressedLetter = event.key;
    console.log(pressedLetter);
    makeSound(pressedLetter);


});




    
// var playDom = document.getElementsByClassName("domdomdom");
// console.log (playDom);

    // document.getElementsByClassName("domdomdom")[0].addEventListener("click", (   )  => {
        // document.body.innerHTML = 'dedededee'
    // });

// var audio = new Audio ("sounds/kick-bass.mp3");
// audio.play();   



// Constructor Function Code

/*
function HouseKeeper (yearsOfExperience, name, whatDoYouLoveToClean) {
    this.name = name ;
    this.yearsOfExperience = yearsOfExperience;
    this.whatDoYouLoveToClean = whatDoYouLoveToClean;
    console.log ("ok");
} 

var houseKeeper1 = new HouseKeeper (18, "vadapav", ['ha bhai','achha thike','BKL']);
*/



var sample = {abc:123, ABC:"achha", xyz:"okay", XYZ:"Done"};

    // function AnimationOnEvent(letter) {
    //     this.style.color = "yellow" ;
    // }