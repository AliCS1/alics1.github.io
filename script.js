console.log("alibu before 1")
screen.orientation.lock("landscape")
console.log("alibu after")

setTimeout(function() {
  screen.orientation.unlock();
}, 60000);
