var rand = Math.floor(Math.random()*100)+1;
var previous = [];
var guesses = 10;


//created element here and added to natural flow
var p = document.createElement('p');

$("button").click(function() {
  var value = $("input").val();
  previous.push(value);
  if(value) {
    guesses--;
    $("input").val("");
    if(value == rand) {
      $("#hint").text("You Guessed Correctly !!");
      $("#rem-guess").text("");
      $("#prev-guess").text("Previous Guesses: " + previous);
      startOver("win");
    }
    else if(value < rand) {
      $("#hint").text("Too Low!! Try Again !!");
      $("#rem-guess").text("Guesses Remaining: " + guesses);
      $("#prev-guess").text("Previous Guesses: " + previous);
    }
    else {
      $("#hint").text("Too High!! Try Again !!");
      $("#rem-guess").text("Guesses Remaining: " + guesses);
      $("#prev-guess").text("Previous Guesses: " + previous);
    }
  }

  if(guesses === 0) {
    startOver("lose");
  }

});

function startOver(result) {
  if(result === "lose") {
    $("#hint").text("Game Over !!");
  }
  $("input").attr("disabled","disabled");
  p.classList.add('title');
  p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
  $(".container").append(p);
  newgame();
}

function newgame() {
  $("#newGame").click(function() {
    guesses = 10;
    previous = [];
    rand = Math.floor(Math.random()*100)+1;
    $("input").removeAttr("disabled");
    $("#hint").text("");
    $("#rem-guess").text("Guesses Remaining: " + guesses);
    $("#prev-guess").text("Previous Guesses: " + previous);
    $("p").remove();
  })
}
