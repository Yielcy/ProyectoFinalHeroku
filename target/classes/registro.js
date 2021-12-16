var btnRegistrar = document.getElementById("registrar")
btnRegistrar.addEventListener("click", function () {
    axios.post("https://sw-forms.herokuapp.com/usuario", {
        nombre : document.getElementById("nombre").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    })
    .then(function (response) {
        alert("mensaje: usuario creado "+response.data.status+" con id: "+response.data.id);
        id = response.data.id;
        estado=response.data.status;
    })
    .catch(function (error) {
        console.log(error);
    })
})