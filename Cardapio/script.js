// Mostra a quantidade de itens do carrinho
function atualizaQtdeCart(){
    let exibeQtdeCart = document.getElementById("cont-cart");
    let item = JSON.parse(sessionStorage.getItem('items'));
    let qtde = []
    if(item != null){
        item.forEach((item) => {
            qtde.push(parseInt(item.qtd));  
        });
        let total = qtde.reduce((total, qtde) => total + qtde, 0);
        exibeQtdeCart.innerHTML = `${total}`
    }else{
        exibeQtdeCart.innerHTML = `0`
    }
}

$(document).ready(function(){
    atualizaQtdeCart();

    // toggle menu/navbar script
    $("#nav-categoria").hide();
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn .fas.fa-bars').toggleClass("active");
    });

    // applying again smooth scroll on menu items click
    $('#nav-categoria a').click(function(event){
        event.preventDefault();

        let container = $(this).attr('href');
        let containerOffset = $(container).offset().top;
        let menuTopo = $('.navbar').outerHeight(true);

        let scrollPosition = containerOffset - menuTopo;
        $('html, body').animate({scrollTop: scrollPosition}, 400);
    });

    //TOGGLE MENU CATEGORIAS
    const menuTopo = $('.navbar').height();
    $(window).scroll(function(){
        if(this.scrollY > menuTopo) {
            $("#nav-categoria").show()
        }else {
            $("#nav-categoria").hide();
        }
    })
    
    //JQUERY SCROLLSPY
    $(document).scroll(function(){
        let sectionIds = $('#nav-categoria a');
        let menuTopo = $('.navbar').outerHeight(true);
        let categorias = $('#nav-categoria').outerHeight(true);
        sectionIds.each(function(){

            let container = $(this).attr('href');
            let containerOffset = $(container).offset().top;
            let containerHeight = $(container).outerHeight();
            let containerBottom = containerOffset + containerHeight;
            let scrollPosition = $(document).scrollTop()+ menuTopo ;
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
   




});
