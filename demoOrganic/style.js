document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        breakpoints: {
            1024: {
                perPage: 2
            },
            540: {
                perPage: 1
            },
        },
        autoplay: true,
    } );
    splide.mount();
  } );