const node_for_click = document.getElementById("abc")

function find_edit(){
    const item  = document.getElementById('abc')
    console.log(item.innerText)
    item.innerHTML="<b>2025</b>"
}

node_for_click.addEventListener("click",find_edit)
