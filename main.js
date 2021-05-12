// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const Hearts = document.querySelector(".like-glyph");

// Your JavaScript code goes here!
Hearts.addEventListener('click', (e) => {
  // mimicServerCall()
  mimicServerCall("bogusUrl", {forceFailure: true})
  // console.log('success')
  .then(function(message){
    changeHeartStatus(e.target)
  })
  .catch(function(error){
    console.log("error was caught")
    const modal = document.getElementById("modal")
    modal.className = ""
    modal.innerText = error
    setTimeout(() =>  modal.className = "hidden", 3000);
  })
  // changeHeartStatus(e.target)
})

function changeHeartStatus(target){
  console.log(target.innerText)
  if(target.innerText === '♡'){
    target.innerText = '♥'
  }
  else if(target.innerText === '♥'){
    target.innerText = '♡'
  }
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
