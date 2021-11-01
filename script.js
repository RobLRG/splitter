"use strict"


function split4()
{
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)


}

function addQuarter(intoDiv)
{
    let q = document.createElement("div")
    q.classList.add("flexy")
    q.classList.add("quarter")

    q.addEventListener("click",split4)

    intoDiv.appendChild(q)

    // let randomColor = Math.floor(Math.random()*16777215).toString(16);

    // q.style.backgroundColor= "#" + randomColor

    q.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}

document.body.addEventListener("click",split4)