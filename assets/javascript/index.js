//inicio do menu

let menu = document.querySelector('.menu');
let nav = document.getElementById('nav');

menu.addEventListener('click', function(){
    if(nav.classList.contains('none')){
        nav.classList.remove('none');
        nav.classList.add('flex');
    } else {
        nav.classList.remove('flex');
        nav.classList.add('none');
    }
});

//fim do menu

//inicio da programação do banner

let anterior = document.querySelector('.anterior');
let proximo = document.querySelector('.proximo');
let b1 = document.querySelector('.baner1');
let b2 = document.querySelector('.baner2');
let b3 = document.querySelector('.baner3');
let b4 = document.querySelector('.baner4');

anterior.addEventListener('click', function(){
    let banner1 = 'Demon Slayer é uma coleção de mangas, completa em 23 volumes.';
    let banner2 = 'Jujutsu Kaisen é uma coleção que esta em publicação desde 2018, e já conta com 18 volumes publicados.';
    let banner3 = 'Tensei Shitara Slime Data Ken é uma coleção que esta em publicação desde 20016, e já conta com 16 volumes publicados.';
    let banner4 = 'Shuumatsu no Valkyrie é uma coleção de mangas que esta em publicação desde 2020, e ja conta com 6 volumes publicados.';

    if(document.getElementById('banner').classList.contains('banner1')){
        document.querySelector('#banner').classList.remove('banner1');
        document.querySelector('#banner').classList.add('banner4');
        document.querySelector('.baner1').classList.remove('active');
        document.querySelector('.baner4').classList.add('active');
        document.querySelector('.text-banner').innerHTML = banner4;
    } else if(document.getElementById('banner').classList.contains('banner4')){
        document.querySelector('#banner').classList.remove('banner4');
        document.querySelector('#banner').classList.add('banner3');
        document.querySelector('.baner4').classList.remove('active');
        document.querySelector('.baner3').classList.add('active');
        document.querySelector('.text-banner').innerHTML = banner3;
    } else if(document.getElementById('banner').classList.contains('banner3')){
        document.querySelector('#banner').classList.remove('banner3');
        document.querySelector('#banner').classList.add('banner2');
        document.querySelector('.baner3').classList.remove('active');
        document.querySelector('.baner2').classList.add('active');
        document.querySelector('.text-banner').innerHTML = banner2;
    } else if(document.getElementById('banner').classList.contains('banner2')){
        document.querySelector('#banner').classList.remove('banner2');
        document.querySelector('#banner').classList.add('banner1');
        document.querySelector('.baner2').classList.remove('active');
        document.querySelector('.baner1').classList.add('active');
        document.querySelector('.text-banner').innerHTML =  banner1;
    }
});

proximo.addEventListener('click', function(){
    let banner1 = 'Demon Slayer é uma coleção de mangas, completa em 23 volumes.';
    let banner2 = 'Jujutsu Kaisen é uma coleção que esta em publicação desde 2018, e já conta com 18 volumes publicados.';
    let banner3 = 'Tensei Shitara Slime Data Ken é uma coleção que esta em publicação desde 20016, e já conta com 16 volumes publicados.';
    let banner4 = 'Shuumatsu no Valkyrie é uma coleção de mangas que esta em publicação desde 2020, e ja conta com 6 volumes publicados.';

    if(document.getElementById('banner').classList.contains('banner1')){
        document.querySelector('#banner').classList.remove('banner1');
        document.querySelector('#banner').classList.add('banner2');
        document.querySelector('.baner1').classList.remove('active');
        document.querySelector('.baner2').classList.add('active');
        document.querySelector('.text-banner').innerHTML = banner2 ;
    } else if(document.getElementById('banner').classList.contains('banner2')){
        document.querySelector('#banner').classList.remove('banner2');
        document.querySelector('#banner').classList.add('banner3');
        document.querySelector('.baner2').classList.remove('active');
        document.querySelector('.baner3').classList.add('active');
        document.querySelector('.text-banner').innerHTML = banner3 ;
    } else if(document.getElementById('banner').classList.contains('banner3')){
        document.querySelector('#banner').classList.remove('banner3');
        document.querySelector('#banner').classList.add('banner4');
        document.querySelector('.baner3').classList.remove('active');
        document.querySelector('.baner4').classList.add('active');
        document.querySelector('.text-banner').innerHTML = banner4 ;
    } else if(document.getElementById('banner').classList.contains('banner4')){
        document.querySelector('#banner').classList.remove('banner4');
        document.querySelector('#banner').classList.add('banner1');
        document.querySelector('.baner4').classList.remove('active');
        document.querySelector('.baner1').classList.add('active');
        document.querySelector('.text-banner').innerHTML = banner1 ;
    }
});

b1.addEventListener('click', function(){
    let banner1 = 'Demon Slayer é uma coleção de mangas, completa em 23 volumes.';
    
    b1.classList.add('active');
    b2.classList.remove('active');
    b3.classList.remove('active');
    b4.classList.remove('active');
    document.querySelector('#banner').classList.remove('banner2');
    document.querySelector('#banner').classList.remove('banner3');
    document.querySelector('#banner').classList.remove('banner4');
    document.querySelector('#banner').classList.add('banner1');
    document.querySelector('.text-banner').innerHTML = banner1 ;
});

b2.addEventListener('click', function(){
    let banner2 = 'Jujutsu Kaisen é uma coleção que esta em publicação desde 2018, e já conta com 18 volumes publicados.';

    b2.classList.add('active');
    b1.classList.remove('active');
    b3.classList.remove('active');
    b4.classList.remove('active');
    document.querySelector('#banner').classList.remove('banner1');
    document.querySelector('#banner').classList.remove('banner3');
    document.querySelector('#banner').classList.remove('banner4');
    document.querySelector('#banner').classList.add('banner2');
    document.querySelector('.text-banner').innerHTML = banner2 ;
});

b3.addEventListener('click', function(){
    let banner3 = 'Tensei Shitara Slime Data Ken é uma coleção que esta em publicação desde 20016, e já conta com 16 volumes publicados.';

    b3.classList.add('active');
    b1.classList.remove('active');
    b2.classList.remove('active');
    b4.classList.remove('active');
    document.querySelector('#banner').classList.remove('banner1');
    document.querySelector('#banner').classList.remove('banner2');
    document.querySelector('#banner').classList.remove('banner4');
    document.querySelector('#banner').classList.add('banner3');
    document.querySelector('.text-banner').innerHTML = banner3 ;
});

b4.addEventListener('click', function(){
    let banner4 = 'Shuumatsu no Valkyrie é uma coleção de mangas que esta em publicação desde 2020, e ja conta com 6 volumes publicados.';

    b4.classList.add('active');
    b1.classList.remove('active');
    b2.classList.remove('active');
    b3.classList.remove('active');
    document.querySelector('#banner').classList.remove('banner1');
    document.querySelector('#banner').classList.remove('banner2');
    document.querySelector('#banner').classList.remove('banner3');
    document.querySelector('#banner').classList.add('banner4');
    document.querySelector('.text-banner').innerHTML = banner4 ;
});

//fim da programação do banner




mpJson.map(function(item, index){
    let capa = document.querySelector('.area-mangas .manga-mp').cloneNode(true);

    capa.querySelector('.image').src = item.img;
    capa.querySelector('.nome').innerHTML = item.name;
    capa.querySelector('.valor').innerHTML = `R$ ${item.price}`;
    capa.querySelector('.comprar').href = item.link;

    document.querySelector('.inicial-mangas').append(capa);
});




function adicionartexto() {
    document.querySelector('.text-banner').classList.remove('none');
}



function retirartexto() {
    document.querySelector('.text-banner').classList.add('none');
}

function subirtela() {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

function decidirbotaoscroll() {
    if(window.scrollY === 0) {
        document.querySelector('.subir').style.display = 'none';
    } else {
        document.querySelector('.subir').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirbotaoscroll);