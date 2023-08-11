

var list =document.getElementById("list")







function addTodo(){
    var toddo_item=document.getElementById("todo-item")
 
 
    var li= document.createElement('li')
   var liText =document.createTextNode(toddo_item.value)
   li.setAttribute("class","li")
   li.appendChild(liText)
  
  
  
  

var delbtn=document.createElement('button')
var delText=document.createTextNode('DELETE')
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(delText)



 var editbtn=document.createElement('button')
var editText=document.createTextNode('EDIT')
editbtn.setAttribute("class","Btn")
editbtn.setAttribute("onclick","editItem(this)")
editbtn.appendChild(editText)
  
   
   li.appendChild(delbtn)
   li.appendChild(editbtn)
   list.appendChild(li)

toddo_item.value = ""


}



function deleteItem(e){
e.parentNode.remove()

}

function delAll(){
    list.innerHTML = ""
}

function editItem(e){
   var val = e.parentNode.firstChild.nodeValue;
    var editValue =prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue= editValue
}