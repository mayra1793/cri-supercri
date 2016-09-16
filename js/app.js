window.addEventListener("load", function(){
    var botonUno = document.getElementById("cri");
    var conta = 1;
    botonUno.addEventListener("click", function(){
        if(conta == 1){
            document.getElementsByClassName("circle")[0].style.borderColor = "red";
            document.getElementById("input").placeholder = "orange";
            document.getElementsByClassName("circle")[1].style.borderColor = "black";
            document.getElementsByClassName("circle")[2].style.borderColor = "black";
        }
        if(conta == 2){
            document.getElementsByClassName("circle")[1].style.borderColor = "red";
            document.getElementById("input").placeholder = "skyblue";
            document.getElementsByClassName("circle")[0].style.borderColor = "black";
            document.getElementsByClassName("circle")[2].style.borderColor = "black";
        }
        if(conta == 3){
            document.getElementsByClassName("circle")[2].style.borderColor = "red";
            document.getElementById("input").placeholder = "pink";
            document.getElementsByClassName("circle")[1].style.borderColor = "black";
            document.getElementsByClassName("circle")[0].style.borderColor = "black";
            conta = 0;
        }
        conta++;
    });
    
    var cri = document.getElementById("cri");
    cri.addEventListener("click", function() {
        
    });
    var superCri = document.getElementById("superCri");
    superCri.addEventListener("click", function() {
        var color = document.getElementById("input").value;
        if(color == "orange"){
            document.getElementsByClassName("orange").style.borderColor = "red";
            document.getElementsByClassName("skyblue").style.borderColor = "black";
            document.getElementsByClassName("pink").style.borderColor = "black";
        }
        if(color == "skyblue"){
            document.getElementsByClassName("orange").style.borderColor = "0px";
            document.getElementsByClassName("skyblue").style.borderColor = "5px solid yellow";
            document.getElementsByClassName("").style.borderColor = "0px";
        }
        if(color == "pink"){
            document.getElementsByClassName("color-1").style.borderColor = "0px";
            document.getElementsByClassName("color-2").style.borderColor = "0px";
            document.getElementsByClassName("color-3").style.borderColor = "5px solid yellow";
        }
    });
});