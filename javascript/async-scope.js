for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
}

// How would you modify this to create the expected/intuitive functionality?