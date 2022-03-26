let list = []
const items=document.querySelector(".items")
const submit=document.querySelector(".submit")
const input=document.querySelector(".input")

function update(){
    let item = ""
    cnt=0
    for(let i of list){
        cnt++
        item += "<div class=item>"+
        "<div class=left>"+cnt+".   "+i+"</div>"+
        "<div class=right>delate</div>"+
        "</div>"
    }
    items.innerHTML=item
}
update()

submit.addEventListener("click", function(){
   list.push(input.value)
   update()
   input.value=""
})
