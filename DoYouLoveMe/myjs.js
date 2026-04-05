
function dongY() {
    let hopThoai = document.getElementById("hopThoai");
    hopThoai.innerHTML = `<h1>Mình Biết Mà!</h1>
                        <img src="https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif" width="300" style="border-radius: 15px;">`;
}


function chayTron() {
    let nutNo = document.getElementById("btnNo");

    let max_X = window.innerWidth - nutNo.offsetWidth;
    let max_Y = window.innerHeight - nutNo.offsetHeight;

    let toaDoX = Math.random() * max_X;
    let toaDoY = Math.random() * max_Y;

    nutNo.style.left = toaDoX + "px";
    nutNo.style.top = toaDoY + "px";
}