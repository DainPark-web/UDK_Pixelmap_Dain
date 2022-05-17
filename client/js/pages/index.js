import { pathListData } from "../../../libs/listData.mjs";


const homePathList = document.getElementById("home_pathList");

for( let i = 0; i < pathListData.length; i++){
    const li = document.createElement("li");
    const a = document.createElement("a");
    const span = document.createElement("span");
    const div = document.createElement("div");

    div.classList.toggle("black_screen")
    span.innerText = pathListData[i].title;
    a.setAttribute("href", pathListData[i].path )
    a.style.backgroundImage = `url(${pathListData[i].img})`
    a.appendChild(span)
    a.appendChild(div)
    li.appendChild(a);
    homePathList.appendChild(li);
}



