const buttPress = document.querySelector('.button-on');
const buttonAttach = document.querySelector('.but');
const numberAttach = document.querySelector('.boxNumber');


buttPress.addEventListener("click", makeBox );

function makeBox () {
    numberToSelect = numberAttach.value;
    console.log(numberToSelect);
    const div = document.createElement("div");
    const buttonCreate = document.createElement("button");
    buttonCreate.classList = "buttonMade";
    
    
    // var press = document.querySelector('.buttonMade');
    // press.addEventListener('click', () => { console.log('clicked me like hell')});
   


    buttonCreate.textContent = "helloNewHere"

    div.appendChild(buttonCreate);

    buttonAttach.appendChild(div);


};
