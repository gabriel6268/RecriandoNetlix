$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function abrirModal(){
    document.getElementById("modal").style.margin = "0px";
}

function fecharModal(){
    document.getElementById("modal").style.margin = "-100%";
}