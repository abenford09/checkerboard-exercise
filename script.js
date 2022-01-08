function checkerboard() {
    // let body = document.getElementsByTagName('body')[0]
    // let tiles = document.createElement('tiles');
    console.log('this is a div called tiles');
    for (var i = 0; i < 64; i++) {
        if (i % 2 === 0) {
            
            let even = document.createElement('even')
            even.style.width = `11.1%`;
            even.style.height = `11.1%`;
            even.style.paddingBottom = `11.1%`;
            even.style.backgroundColor = "red"
            even.style.float = "left";
            document.body.appendChild(even);
        } else {
            let odd = document.createElement("odd")
            even.style.width = `11.1%`;
            tiles.style.height = `11.1%`;
            tiles.style.paddingBottom = `11.1%`;
            tiles.style.backgroundColor = "black"
            tiles.style.float = "left";
            document.body.appendChild(odd);
        }
    }
}

checkerboard()