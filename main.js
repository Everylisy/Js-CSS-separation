const title = document.querySelector("h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);    
    }
    else {
        title.classList.add(clickedClass);
    }
}

title.addEventListener("click", handleTitleClick);
