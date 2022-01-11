// build function that gets random colors
function randomColor() {
    // hex color random
    let color = '#';
    for (let i = 0; i < 3; i++) {
        color += ('0' + (Math.random()*256|0).toString(16)).substr(-2);
      }
      return color;
}

function checkerboard() {
    for (let i = 0; i < 64; i++) {
        if (i % 2 === 0) {
            let even = document.createElement('even')
            document.body.appendChild(even);
            even.style.width = `11.1%`;
            even.style.height = `11.1%`;
            even.style.paddingBottom = `11.1%`;
            even.style.backgroundColor = randomColor()
            even.style.float = "left";
        } else {
            let odd = document.createElement('odd')
            document.body.appendChild(odd);
            odd.style.width = `11.1%`;
            odd.style.height = `11.1%`;
            odd.style.paddingBottom = `11.1%`;
            odd.style.backgroundColor = randomColor()
            odd.style.float = "left";
            console.log('test')
        }
    }
}

checkerboard()
