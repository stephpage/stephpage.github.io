var styleChanged = false;
    function doSomething() {
      if (styleChanged) {
        document.getElementById('cool-paragraph').setAttribute('style', 'background-color: darkgray;');
        styleChanged = false;
      } else {
        document.getElementById('cool-paragraph').setAttribute('style', 'background-color: magenta; max-width: 200px;');
        styleChanged = true;
      }
      
    }