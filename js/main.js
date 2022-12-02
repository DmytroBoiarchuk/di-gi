$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        margin: 700,
        loop:true,
        items:1,
})
    $('.bot-arrow').click(function() {
        owl.trigger('next.owl.carousel', [2000]);
    })

    $('.top-arrow').click(function() {
        owl.trigger('prev.owl.carousel', [2000]);
    })
});
