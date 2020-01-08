function catCarousel() {
  $('.thumbnail').on('click', function(event) {
    const newCat = $(event.currentTarget).find('img').attr('src');
    const catAlt = $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr('src', newCat).attr('alt', catAlt);
  });
}

$(catCarousel());