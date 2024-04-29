// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// selects all elements with the class "like-glyph" and stores them in the getHearts variable.
const getHearts = document.querySelectorAll(".like-glyph");
//console.log(document.querySelectorAll(".like-glyph"));

const error = document.querySelector('.hidden');
//console.log(document.querySelector('.hidden'));

getHearts.forEach( heart => heart.addEventListener("click", serverResponse ));


// This function is executed when a heart is clicked. It toggles the heart between empty and full states, changes the color, and handles any errors.
function serverResponse(getHearts) {
  mimicServerCall()
  .then(() => {
    if(getHearts.target.textContent === EMPTY_HEART){
      getHearts.target.textContent = FULL_HEART;
      getHearts.target.classList.add("activated-heart")
    }else if (getHearts.target.textContent === FULL_HEART){
      getHearts.target.textContent = EMPTY_HEART;
    }
  })
  .catch(() => {
    error.classList.remove("#hidden")
    error.textContent = "error occurred"

    setTimeout(() => {
      error.classList = "hidden"}, 3000)
    })
  }



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
