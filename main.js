

const tr = document.querySelectorAll("tr")
const q = document.querySelectorAll(".q")
const modal = document.querySelector(".modal")
const yes = document.querySelector(".yes")
const no = document.querySelector(".no")


modal.style.display  = "none"





q.forEach((item , index)=>{
  item.onclick=(e)=>{
    modal.style.display="flex"
    yes.onclick = ()=>{
      
      
        e.target.style.display="none" 
        tr[index+1].style.background = "grey"
        modal.style.display="none"
        
      
    }
    no.onclick =()=>{
      modal.style.display="none"
    }
    
    
  }
})

