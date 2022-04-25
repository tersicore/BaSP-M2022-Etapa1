
    
window.onload = function() {


    var FormLogIn = document.getElementById("formLogIn");
    FormLogIn.addEventListener("submit", validate)


        //var email = document.getElementById("mail").value;

        


    
    function validate(e){

    e.preventDefault();
    var email = document.getElementById("mail").value;
    var expMail = /\w+@\w+\.+[a-z]/;
    var password = document.getElementById("passwordLogIn").value;
    var expPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

        if(email === "") {
            alert("insert email");
            return false;
        }

            if (!expMail.test(email)) {
            alert("email error");
            return false;
        }

            if (!expPassword.test(password))
        {
            alert("debe tener numerods y letras, y un maximo de 8 caracteres ");
            return false;
        }

            if (password === ""){
            alert("Insert password");
            return false;
        }
        else{
            alert("Enviados")
        }
        return validate
        }


    


        function MostrarMje() {
            var emailError = document.getElementById("errorMail")
            var email = document.getElementById("mail").value;
            var expMail = /\w+@\w+\.+[a-z]/;
            var password = document.getElementById("passwordLogIn").value;
            var expPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
            var passwordError = document.getElementById("errorPassword");

            if(email === "" || !expMail.test(email) ) {
            emailError.style.display="block";
        }
             if(!expPassword.test(password) || password === "" ){
            passwordError.style.display="block";
        }
        return false;
        }
         


    var passwordEvent = document.getElementById("passwordLogIn");
    var emailEvent = document.getElementById("mail"); 
    

    function Clear() {
        var emailError = document.getElementById("errorMail");
        var passwordError = document.getElementById("errorPassword");
        emailError.style.display = "none";
        passwordError.style.display="none";
        return Clear
    }



    emailEvent.addEventListener("blur",MostrarMje);
    emailEvent.addEventListener("focus",Clear);
    passwordEvent.addEventListener("focus",Clear)
    passwordEvent.addEventListener("blur",MostrarMje);
    


}

