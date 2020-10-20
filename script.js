var btn = document.getElementById("btn");
var input = document.getElementById("classnum")
btn.addEventListener("click",(e)=>{
    if(input.value==="3"){
        window.location.href="https://docs.google.com/document/d/1gXZ6Tna7bkElSf6fSsYNuRM8JT-oSwP06swFWj_Lw4M/edit?usp=sharing"
    }
    else{
        alert("that homework that you are trying to get is not in the website or you wrote letters instead of numbers.")
        console.log(input)
    }
})