const darkTheme = document.querySelector("#darktheme");

darkTheme.addEventListener("change", changeTheme);

function changeTheme(){
    if(darkTheme.checked){
        document.body.style.background= "rgb(31, 36, 41)"
        document.body.style.color = "#05B993"
        document.querySelector(".left-box").classList.add("dark-left-box")
        document.querySelector("img").classList.add("dark-img")
        document.querySelector("#create").classList.add("dark-create")
        document.querySelector("#button").style.background = "black";
        document.querySelector("#button").style.color = "#05B993";
        document.querySelector("#button").style.border = "none";
        document.querySelector(" .fa-facebook-square").classList.add("dark-fa")
        document.querySelector(" .fa-twitter").classList.add("dark-fa")
        document.querySelector(" .fa-instagram").classList.add("dark-fa")
        document.querySelector(" .fa-github").classList.add("dark-fa")
        document.querySelector(" .fa-linkedin").classList.add("dark-fa")
    }else{
        document.body.style.background= "white"
        document.querySelector(".left-box").classList.remove("dark-left-box")
        document.body.style.color = "black"
        document.querySelector("#button").style.background = "white";
        document.querySelector("#button").style.color = "black";
        document.querySelector("#button").style.border = "none";
        document.querySelector(".left-box").classList.remove("dark-left-box")
        document.querySelector("img").classList.remove("dark-img")
        document.querySelector("#create").classList.remove("dark-create")
        document.querySelector(" .fa-facebook-square").classList.remove("dark-fa")
        document.querySelector(" .fa-twitter").classList.remove("dark-fa")
        document.querySelector(" .fa-instagram").classList.remove("dark-fa")
        document.querySelector(" .fa-github").classList.remove("dark-fa")
        document.querySelector(" .fa-linkedin").classList.remove("dark-fa")
    }
}