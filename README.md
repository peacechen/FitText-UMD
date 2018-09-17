# FitText-UMD, a standalone library for inflating web type
FitText makes font sizing flexible. Use this library on your fluid or responsive layout to achieve scalable headlines that fill the width of a parent element.

Now supporting [UMD](https://github.com/umdjs/umd), and of course no jQuery requirement.

## How to use
FitText-UMD supports UMD and may be loaded as a module.  In this example, "responsive_headline" is the id of an element that we want the text to dynamically size to.
```javascript
    var fitText = require("FitText-UMD");
    fitText( document.getElementById("responsive_headline") );
```
FitText-UMD may optionally be loaded globally in the HEAD, making it accessible via the window object.

## See it in action
    npm install
    npm run example

Open http://localhost:8080 in the browser.

### The Compressor
The default setting works pretty well, but when it doesn't FitText has one setting you can adjust. If your text resizes poorly or is resizing all hurdy gurdy, you'll want to turn tweak up/down the compressor. It works a little like a guitar amp.
```javascript
fitText( document.getElementById("responsive_headline"), 1.2 ); // turn the compressor up (font will shrink a bit more aggressively)
fitText( document.getElementById("responsive_headline"), 0.8 ); // turn the compressor down (font will shrink less aggressively)
```
This will hopefully give you a level of "control" that might not be pixel perfect, but scales smoothly & nicely.

## minFontSize & maxFontSize
FitText now allows you to specify two optional pixel values: `minFontSize` and `maxFontSize`. Great for situations when you want to preserve hierarchy.

```javascript
fitText( document.getElementById("responsive_headline"), 1, { minFontSize: '20px', maxFontSize: '40px' });
```

These options are passed to the `fitText` function right after the compressor value (here `1`).

### To Do
With the removal of jQuery, element resize events are no longer available. jQuery uses an inefficient polling method to detect element resizing so a better solution is needed anyway.  One potential candidate:  
https://github.com/marcj/css-element-queries

### Thanks
Thanks to adactio for eliminating the need for jQuery: https://github.com/adactio/FitText.js  
Thanks to Trent, Dave and Reagan for original FitText.js: https://github.com/davatron5000/FitText.js  
http://fittextjs.com/  
