function login(event){
    event.preventDefault();

    const rm = document.getElementById('rm').value;
    const senha = document.getElementById('password').value;

    if(rm === "26587" && senha === "Astro2024@"){
        window.location.href = "home.html";
    }else{
        alert("RM ou senha incorretos");
    }
}