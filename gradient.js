var red= 40;
var blue= 120;
var green;
function gradient(i){
      if (i % 2 === 0) {
          red += 3;
          green = 50;
      } else {
          green = 150;
      }
      return "rgb(" + red + "," + green + "," + blue + ")";
  }

  function checkerboard() {
    for (let i = 0; i < 63; i++) {
        if (i % 2 === 0) {
            let even = document.createElement('even')
            document.body.appendChild(even);
            even.style.width = `11.1%`;
            even.style.height = `11.1%`;
            even.style.paddingBottom = `11.1%`;
            even.style.backgroundColor = gradient(i)
            even.style.float = "left";
        } else {
            let odd = document.createElement('odd')
            document.body.appendChild(odd);
            odd.style.width = `11.1%`;
            odd.style.height = `11.1%`;
            odd.style.paddingBottom = `11.1%`;
            odd.style.backgroundColor = gradient(i)
            odd.style.float = "left";
            console.log('test')
        }
    }
}

checkerboard()