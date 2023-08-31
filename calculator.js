let typedString = "";
let btns = document.querySelectorAll('.myBtn');
Array.from(btns).forEach((singleBtn)=>{
    singleBtn.addEventListener('click',(e)=>{
        // console.log(e.target.innerHTML); 
        const displayInput = document.getElementById('display');
        if(e.target.innerHTML === 'AC'){
            typedString = "";
        }
        else if(e.target.innerHTML === '='){
            typedString = eval(typedString);
        }
        else{
            let incomingVal = e.target.innerHTML;
            typedString += incomingVal;
        }
        displayInput.value = typedString;
        console.log(typedString);
    })
})
