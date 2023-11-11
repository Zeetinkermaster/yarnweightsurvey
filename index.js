
let answerOne;

document.getElementById("mySubmit").onclick = function(){
    answerOne = document.getElementById("myText").value;
    document.getElementById("answerOne").textContent =  `${answerOne} is a great choice. Thank you for participating!`
 

    
}