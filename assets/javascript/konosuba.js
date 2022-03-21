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

konosubaJson.map(function(item, index){
    let capa = document.querySelector('.area-mangas .manga-mp').cloneNode(true);

    capa.querySelector('.image').src = item.img;
    capa.querySelector('.nome').innerHTML = item.name;
    capa.querySelector('.valor').innerHTML = `R$ ${item.price}`;
    capa.querySelector('.comprar').href = item.link;

    document.querySelector('.inicial-mangas').append(capa);
});


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