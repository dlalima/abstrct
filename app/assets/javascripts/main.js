if(window.addEventListener) {
window.addEventListener('load', function () {
  var canvas, context, tool;

  function init () {
    // Finds the canvas element
    canvas = document.getElementById('actualCanvas');
    // Gets the 2D canvas context
    context = canvas.getContext('2d');
    // Pencil tool
    tool = new tool_pencil();
    // Attach the mousedown, mousemove and mouseup event listeners
    canvas.addEventListener('mousedown', ev_canvas, false);
    canvas.addEventListener('mousemove', ev_canvas, false);
    canvas.addEventListener('mouseup',   ev_canvas, false);
  }

    // Painting tool works like a drawing pencil (tracks mouse movements)
    function tool_pencil () {
      var tool = this;
      this.started = false;

    // Starts the pencil drawing
      this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // Function is called every time mouse is moved
    this.mousemove = function (ev) {
      if (tool.started) {
        context.strokeStyle = "white"
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // Function is called when mouse button is released
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
      }
    };
  }

  // Determines the mouse position relative to the canvas element
  function ev_canvas (ev) {
    if (ev.layerX || ev.layerX == 0) { // Firefox
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }

  // Calls the event handler of the tool
    var func = tool[ev.type];
    if (func) {
      func(ev);
    }
  }

  init();

  }, false); 


  // Clears the canvas
  function clearCanvas() {
    var canvas = document.getElementById('actualCanvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

}

// Generates a new word
function generateWord() {
  $.ajax({
    url: "/words/",
    type: "GET", 
    dataType: "json"
  }).done(function(words) {
    var randLength = Math.floor(Math.random() * words.length) + 1;
    $.ajax({
      url: "/words/" + randLength,
      type: "GET",
      dataType: "json"
    }).done(function(word) {
      $("#rubyWord").html(word.word);
      $("#randomWord").data("word-id", word.id)
    })
  })
}


// Launch screen log-in form
$(window).on('load', function(){
  $('.logInButton').on('click', function(event){
    event.preventDefault();
    $('.logInForm').show();
    $('.signUpButton').hide();
    $('.logInButton').hide();
  })  
})


// Launch screen sign-in form
$(window).on('load', function(){
  $('.signUpButton').on('click', function(event){
    event.preventDefault();
    $('.submitForm').show();
    $('.logInButton').hide();
    $('.signUpButton').hide();
  })  
})

