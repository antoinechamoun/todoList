// header
const Header = document.createElement("div")
Header.className = "header"

// Logo image
const img = document.createElement("span")
img.className = "material-symbols-outlined logo-img"
img.innerHTML="fact_check"

// title
const title = document.createElement("h1")
title.innerText = "TODO List"
title.className = "title-txt"

//add children to header
Header.appendChild(img)
Header.appendChild(title)

// export
export default Header