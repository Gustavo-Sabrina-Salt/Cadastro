
  function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    event.preventDefault()
    let url = "https://help-system-api.onrender.com/user"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let setor = document.getElementById("setor").value
    console.log(nome)
    console.log(email)

    body = {
      "email": email,
      "name": nome,
      "password": senha,
      "setor": setor
    }

    fazPost(url, body)
}  
