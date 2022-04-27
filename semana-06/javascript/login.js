
    
window.onload = function() {
      


    var FormLogIn = document.getElementById("formLogIn");
    FormLogIn.addEventListener("submit", validate)


        //var email = document.getElementById("mail").value;

        


    
    function validate(e){

 e.preventDefault();

    var email = document.getElementById("mail").value;
    var expMail = /\w+@\w+\.+[a-z]/;
    var password = document.getElementById("passwordLogIn").value;
    //var expPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

        if(email === "") {
            alert("insert email");
            return false;
        }

            if (!expMail.test(email)) {
            alert("email error");
            return false;
        }
        if (password === ""){
            alert("insert passwors");
            return false;
         }

        if (!validNumLetr(password)){
            alert("password must contain letters and numbers ");
            return false;
        }

        if (password.length < 7) {
            alert("passwors must contain 8 characters or more")
        }

        
        else{
            alert("Enviados")
        }
    return validate
        }


    var ValidLetra = function(prueba) {
 

    for(var i = 0; i <prueba.length; i++ ) {

      

        if ((prueba[i] >= "a" && prueba[i] <= "z") || prueba[i] >= "A" && prueba[i] <= "Z")  {
             
        }
        else { return false}

    }
    return true
} 


var ValidNum = function(mys) {

    var numArray = ["0","1","2","3","4","5","6","7","8","9"]

   for( var i =0 ; i < mys.length; i++ ) {
       if(!numArray.includes(mys[i])){
           return false
       }
   }

   return true

}


var validNumLetr = function(muy) {
    var letra = false 
    var numero = false 
    for (var i = 0; i< muy.length;i++ ){
        if(ValidNum(muy[i])){
            numero = true
        }
        else if(ValidLetra(muy[i])){
            letra = true
        }
        else{
            return false
        }
    }
   return letra && numero
}




    


        function MostrarMje() {
            var emailError = document.getElementById("errorMail")
            var email = document.getElementById("mail").value;
            var expMail = /\w+@\w+\.+[a-z]/;
            var password = document.getElementById("passwordLogIn").value;
            //var expPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
            var passwordError = document.getElementById("errorPassword");

            if(email === "" || !expMail.test(email) ) {
            emailError.style.display="block";
        }
             if(!validNumLetr(password) || password === "" ){
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

