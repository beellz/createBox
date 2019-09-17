const buttPress = document.querySelector('.button-on');
const buttonAttach = document.querySelector('.but');
const numberAttach = document.querySelector('.boxNumber');
const resetallon = document.querySelector('.resetallon');


buttPress.addEventListener("click", makeBox );
// resetallon.addEventListener('click', resetAllOnAndClearScreen);

function reset(){
    var resetButton = document.querySelector(".boxNumber");
    if(resetButton){
        resetButton.value= "";
   }
}


function makeBox () {
    numberToSelect = numberAttach.value;
    
    let i ;
    for ( i=0 ; i < numberToSelect ; i++){
        (makeelement());
    };

    function makeelement () {    

    const div = document.createElement("div");
    const buttonCreate = document.createElement("button");
    buttonCreate.classList = "buttonMade";
    
    
     
     

    buttonCreate.textContent = "hello New Here"

    div.appendChild(buttonCreate);

    buttonAttach.appendChild(div);
    
    }
    var press = document.querySelector('.buttonMade');
    if (press){
        press.addEventListener('click', () => {console.log("click")});
    }

    reset();

   
    
};
    
   

