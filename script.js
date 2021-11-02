"use strict"


function split4(pointerEvent)
{
    if(pointerEvent.shiftKey)
    {
        this.parentNode.addEventListener("click",split4)
        this.parentNode.innerHTML=""
    }
    else
    {
        addQuarter(this)
        addQuarter(this)
        addQuarter(this)
        addQuarter(this)
    }
    pointerEvent.stopPropagation()
}

function addQuarter(intoDiv)
{
    let q = document.createElement("div")
    q.classList.add("flexy")
    q.classList.add("quarter")

    q.addEventListener("click",split4)

    intoDiv.appendChild(q)

    q.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}

// function deleteQuarters(parentDiv)
// {
//     let p = parentDiv.childNodes
//     for(let x of p)
//     {
//         x.remove()
//     }
// }

document.body.addEventListener("click",split4)