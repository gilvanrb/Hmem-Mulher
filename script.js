document.getElementById("btnMulher").addEventListener("click", function(){
    document.getElementById("header").style.backgroundColor = "rgb(228, 95, 218)";
    document.getElementById("img3").src = "img/mulher.png";
    let img = document.getElementById("img3");
    img.src ="img/mulher.png";
    img.width = 150; //largura para imagem mulher
    img.height = 200; //altura para imagem mulher

});


document.getElementById("btnHomem").addEventListener("click", function(){
    document.getElementById("header").style.backgroundColor = "rgb(12, 26, 221)";
    document.getElementById("img3").src = "img/homem.png";
    let img = document.getElementById("img3");
    img.src ="img/homem.png";
    img.width = 180; //largura para imagem homem
    img.height = 220; //altura para imagem homem

});