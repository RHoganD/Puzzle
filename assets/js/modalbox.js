
// Get the modal
let modal = document.getElementById("modalbox");

// Get the button that opens the modal
let btn = document.getElementById("rule");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let w = 480, h = 340;


function openWindow(){
if (document.getElementById) {
   w = screen.availWidth;
   h = screen.availHeight;
}  

let popW = 650, popH = 650;

let leftPos = (w-popW)/2;
let topPos = (h-popH)/2;



msgWindow = window.open('','popup','width=' + popW + ',height=' + popH + 
                         ',top=' + topPos + ',left=' + leftPos + ',       scrollbars=yes');

msgWindow.document.write 
    ('<HTML><HEAD><TITLE>Reveal Puzzle</TITLE></HEAD><BODY><FORM  NAME="form1">' +
    '<img src="./assets/images/elsa_and_anna_frozen.jpg"/>'+
    ' <H1>Completed Puzzle Image.</H1>' + ' Click the button below to close the window.<br />' +
    '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY>   </HTML>');
}


