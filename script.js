
const button = document.getElementsByClassName("contact");
const cntct= document.getElementById("contactlist");
const overlay=document.getElementById("overlay");//.onclick = function(){
for(let i = 0; i<button.length ; i++ )
{ button[i].onclick = function(){



     cntct.classList.toggle("visible");
     overlay.classList.toggle("visible");
     };
    
    }
//if (button.style.display==="none" || button.style.display==="")
   //{
   //  button.style.display="block";
    // overlay.style.display="block";
  //  }
//else{
   // button.style.display="none"
    //overlay.style.display="none";
//}


/*document.getElementById("cross").onclick = function(){

const button= document.getElementById("contactlist");
const overlay=document.getElementById("overlay");
if (button.style.display==="block")
   {
     button.style.display="none";
     overlay.style.display="none";
     
    }
else{
    button.style.display="block"
    overlay.style.display="block";
}

};
*/
