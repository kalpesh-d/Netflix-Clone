let coll = document.getElementsByClassName("header");

for(let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
    
        let content = this.nextElementSibling;

        if (content.style.display == "block"){
            content.style.display = "none";
            icon.sty
        } else {
            content.style.display = "block";
        }
    })
}