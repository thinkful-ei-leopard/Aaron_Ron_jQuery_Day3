$(function() {
    $('.js-form').submit(event => {
      // this stops the default form submission behavior
      event.preventDefault();
      const userTextElement = $(event.currentTarget).find('#user-text');
      $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
      //userTextElement.val() gets the value from the userTextElement Object. Otherwise
      // we would just get {Object object}
      userTextElement.val(""); // clears the input box and puts it back to the placeholder value
    });  
  })
  
  