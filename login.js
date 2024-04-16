let form = document.querySelector("#form")

let data = []

function saveData(){
    localStorage.setItem("data" , JSON.stringify(data))
}

function loadData(){
    let savedData = JSON.parse(localStorage.getItem("data"))

    if(saveData){
        data = savedData
    }
}


function handleSubmit(event){
    event.preventDefault()
    
    let name = document.querySelector("#name").value;
    let role = document.querySelector("#role").value;
    let password = document.querySelector("#password").value


    let narr = data.filter(function(ele , i){
        return ele.name === name;
    })
      
     if(narr.length>0){
        alert("username is already taken")
      }else{
        let obj = {
            name ,
            role, 
            password
        }
    
        data.push(obj)
        console.log(data)
        saveData()
        alert("registration successfully")
      } 
    }

form.addEventListener("submit" , function(event){
      handleSubmit(event)
})


// login pagee

let submit = document.querySelector("#submit")

function loginData(){
  let name = document.querySelector("#loginName").value;
  let password = document.querySelector("#loginpass").value;
   
  let narr = data.filter(function(ele , i){
       return (ele.name === name) && (ele.password === password)
  })

  if(narr.length>0){
     alert("logged in successfully")
     window.location.href = "index.html"; 
  }else{
      alert("Incorrect name and password")
 }
}


submit.addEventListener("click" , loginData)
loadData()