function checkerboard() {
    // Loop and set param for board
    for (var i = 0; i < 64; i++) {
        if (i % 2 === 0) {
            var even = document.createElement('even')
            document.body.appendChild(even);
            even.style.width = `11.1%`;
            even.style.height = `11.1%`;
            even.style.paddingBottom = `11.1%`;
            even.style.backgroundColor = "red"
            even.style.float = "left";
        } else {
            var odd = document.createElement('odd')
            document.body.appendChild(odd);
            odd.style.width = `11.1%`;
            odd.style.height = `11.1%`;
            odd.style.paddingBottom = `11.1%`;
            odd.style.backgroundColor = "black"
            odd.style.float = "left";
            console.log('test')
        }
    }
}

checkerboard()