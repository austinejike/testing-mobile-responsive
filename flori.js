var x = document.getElementById("topnavMnue")
function dropdownManu(){
if(x.className === "topnav"){
    x.className += " mobile";  
} else{
    x.className = "topnav";
}


}