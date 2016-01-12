// When using this as an npm dependency, require("FitText-UMD")
var fitText = require("../fittext");

fitText(document.getElementById("fittext"), 1.2);

// document.getElementById("headerslider").oninput = function(ev, p) {
//     var val = +this.value;
//     document.getElementById("fittext").style.width = val + "%";
//     // Initial release can only listen for window resize events, not element resize.
//    fitText(document.getElementById("fittext"), 1.2);
// };
