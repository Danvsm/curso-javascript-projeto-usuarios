let nome = document.querySelector("#exampleInputName")
let gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
let birth = document.querySelector("#exampleInputBirth")
let country = document.querySelector("#exampleInputCountry")
let email = document.querySelector("#exampleInputEmail")
let password = document.querySelector("#exampleInputPassword")
let photo = document.querySelector("#exampleInputFile")
let admin = document.querySelector("#exampleInputAdmin")
let user = {};

const fields = document.querySelectorAll("#form-user-create [name]")

function addLine(dataUser) {
    console.log("addline", dataUser)
}


document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault()
    
    fields.forEach(function(field, index) {

        if(field.name == "gander"){
            if(field.checked) {
                user[field.name] = field.value
            } 
    
        } else {
           user[field.name] = field.value
        }
    })

    addLine(user)

    console.log(user)

})

