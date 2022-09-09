

const btn = document.querySelector(".btn")

btn.onclick = function(){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Success"
        this.style = "background: #242933e6; color: #fff; pointer-events: none;"
    }, 2000);
}