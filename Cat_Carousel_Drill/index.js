
$( 'main ').on('click', '.thumbnail img', (event) => {

    event.preventDefault();

    let thumbSrc = $(event.currentTarget).attr('src');
    let thumbAlt = $(event.currentTarget).attr('alt');

    console.log('thumbSrc: ', thumbSrc);

    // update the src attribute of large image to match the thumbnail src
    $('.hero img').attr('src', thumbSrc);

    $('.hero img').attr('alt', thumbAlt);

    
    console.log(event.target);
  });
  

// When user clicks on thumbnail:

// update the src attribute of large image to match the thumbnail src

// update the alt attribute of large image to match the thumbnail alt

// selector for thumbnails
// $('.thumbnail img')

//selector for large
