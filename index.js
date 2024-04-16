let form = document.querySelector("#form");
let tbody = document.querySelector("#tbody")

let data = []

function handleSubmit(event){
    event.preventDefault() 
    let name = document.querySelector("#name").value;
    let department = document.querySelector("#department").value;
    let exp= document.querySelector("#exp").value;
    let email  = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;

    let obj = {
        name : name,
        id : (Math.random).toString,
        department : department,
        experience : exp,
        email : email,
        number : number
    }
     data.push(obj)

     showData(data)
}

function showData(arr){
    tbody.innerHTML = "";

    arr.forEach(function(ele , i){
       let tr = document.createElement("tr")

        let name = document.createElement("td")
        name.innerText = ele.name;

        let id = document.createElement("td")
        id.innerHTML = i+1;

        let department = document.createElement("td")
        department.innerHTML = ele.department;

        let exp = document.createElement("td")
        exp.innerHTML = ele.experience;

        let email = document.createElement("td")
        email.innerHTML = ele.email;

        let number = document.createElement("td")
        number.innerHTML = ele.number;

        let role;
        ele.exp >=5? role = "Senior" : ele.exp < 5 && ele.exp >= 2 ? role = "Junior" : role = "Freshar"
        let rol = document.createElement("td")
        rol.innerHTML = role;

        let dltBtn = document.createElement("button")
        dltBtn.innerHTML = "Delete";

        dltBtn.addEventListener("click" , function(){
            deleteData(i)
        })

        tr.append(name , id , department , exp , email , number , rol , dltBtn)

        tbody.append(tr)
    })

}

function deleteData(index){
     data.splice(index , 1)

     showData(data)
}

form.addEventListener("submit" , function(event){
       handleSubmit(event)
})

showData(data)