const title = document.querySelector("h1");

function handleTitleClick() {
    // const clickedClass = "clicked";
    // if(title.classList.contains(clickedClass)){
    //     title.classList.remove(clickedClass);    
    // }
    // else {
    //     title.classList.add(clickedClass);
    // }

    /*토글은 toggle은 토큰이 존재하면 토큰제거,
    토큰이 존재 하지않으면 토큰 추가 (위의 코드와 같은 역할을 하고 있다)*/
    title.classList.toggle("clicked");      // 토글 = "신" supercoolbeautifulcode!
}

title.addEventListener("click", handleTitleClick);
