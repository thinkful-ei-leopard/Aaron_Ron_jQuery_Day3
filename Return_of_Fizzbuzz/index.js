
// fizz if divis by 3
// buzz if divis by 5
// fizzbuzz if divis by 15

// if element is FizzBuzz then insert element into .js-results that looks like 
// <div class="fizz-buzz-item">
//   <span>1</span>
//  </div>


// create an event listener that listens for when a user submits 
// a form indicating how high to count
// count up to the number of the sequence
// output <div> <span> NUMBER </span> </div>
// where NUMBER interates up to the max of sequence
// if divis by 3, <span> Fizz </span> instead of number and apply .fizz 
// if divis by 5, <span> Buzz </span> instead of number and apply .buzz
// if divis by 15, <span> FizzBuzz </span> instead of number and apply .fizzbuzz
// Your function should append each resulting HTML to the .js-results DOM element

// <form id="number-chooser" action="/some-server-endpoint">
function returnFizzBuzz() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    const num = $('#number-choice').val();
        
    for(let i = 0; i <= num; i++) {
            

      if(i % 15 === 0) {
        $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"><span>FizzBuzz</span></div>'); 
      }
      else if(i % 5 === 0){
        $('.js-results').append('<div class="fizz-buzz-item buzz"><span>Buzz</span></div>');
      }
      else if(i % 3 === 0) {
        $('.js-results').append('<div class="fizz-buzz-item fizz"><span>Fizz</span></div>');  
      }
      else{
        $('.js-results').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
      }
         
    }
  })
}

$(returnFizzBuzz());