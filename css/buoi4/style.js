document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type   : 'loop',
        perPage: 5,
        perMove: 1,
    } );
    splide.mount();
  } );