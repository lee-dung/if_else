let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");

function ktGood(){
    if (good.checked && cheap.checked && fast.checked){
        fast.checked = false;
    }
}

function ktCheap(){
    if (good.checked && cheap.checked && fast.checked){
        good.checked = false;
    }
}

function ktFast() {
    if (good.checked && cheap.checked && fast.checked){
        cheap.checked = false;
    }

}
