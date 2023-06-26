function abrirMenu(){
    var navbar = document.querySelector(".menu-mobile");

    if(navbar.classList.contains('ativo')){
        navbar.classList.remove('ativo');
        document.getElementById('btn-icone').src = '../img/menu_fechar.svg';
    }
    else{
        navbar.classList.add('ativo');
        document.getElementById('btn-icone').src = '../img/menu_hamburguer.svg';

    }
}