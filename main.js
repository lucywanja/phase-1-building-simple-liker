// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// selects all elements with the class "like-glyph" and stores them in the getHearts variable.
const getHearts = document.querySelectorAll(".like-glyph");;
//console.log(document.querySelectorAll(".like-glyph"));


// This function is executed when a heart is clicked. It toggles the heart between empty and full states, changes the color, and handles any errors.
function likeCallBack(e) {
  const heart = e.target;// this e.target refers to the heart icon element which is triggered.
  mimicServerCall()
  .then(function(){
    if(heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;//sets the inner text of the heart icon (heart) to the FULL_HEART constant, effectively filling the heart.
      heart.className = "activated-heart";//adding a class to indicate the haert has been activated or filled
    }else{
      heart.innerText = EMPTY_HEART;
      heart.className = "";//it resets the stylying to its default state
    }

  })
  .catch(function(error) {
    const modal = document.getElementById("modal");
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000);

  });
}
// for of 
for (const glyph of getHearts) {
  glyph.addEventListener("click", likeCallBack);
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
