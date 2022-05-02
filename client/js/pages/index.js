import { pathListData } from "../../../libs/listData.mjs";


const homePathList = document.getElementById("home_pathList");

for( let i = 0; i < pathListData.length; i++){
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.innerText = pathListData[i].title;
    a.setAttribute("href", pathListData[i].path )
    li.appendChild(a);
    homePathList.appendChild(li);
}



