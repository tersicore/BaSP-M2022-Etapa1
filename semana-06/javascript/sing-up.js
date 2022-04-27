window.onload = function() {

var formSignUp = document.getElementById("formSignUp");
formSignUp.addEventListener("submit",validateS )

var name = document.getElementById("name").value;
var nameError = document.getElementById("nameError")
var lastnameError = document.getElementById("errorLastName")
var errorDNI = document.getElementById("errorDNI")
var errorDate = document.getElementById("errorDate")
var errorTel = document.getElementById("errorTel")
var errorAddress = document.getElementById("errorAddress")
var errorLocality = document.getElementById("errorLocality")
var errorpostalCode = document.getElementById("errorpostalCode")
var errormailS = document.getElementById("errormailS")
var errorPasswordS = document.getElementById("errorPasswordS")
var errorPasswordR = document.getElementById("errorPasswordR")


function validateS(e) {
 
    e.preventDefault();

    var name = document.getElementById("name").value;
    var lastname =document.getElementById("lastname").value;
    var DNI =document.getElementById("DNI").value;
    var telephone = document.getElementById("telephone").value
    var Bdate = document.getElementById("Bdate").value
    var postalCode = document.getElementById("postalCode").value
    var address =document.getElementById("address").value
    var locality = document.getElementById("locality").value
    var emailSignUp = document.getElementById("mailS").value
    var passwordSignUp =document.getElementById("passwordSignUp").value
    //var ExpSoloLetras = /^[A-Za-z]/;
    var expMail = /\w+@\w+\.+[a-z]/;
    //var expPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    


    if(name === "") {
        alert("insert name");
        return false;
    }
     if (name.length < 2){
        alert("name must contain more than 3 characters")
        return false
        }
    if(ValidLetra(name)){
        alert("name must contain only letters");
        return false;
        }
     if (lastname === ""){
        alert("insert last name");
        return false;
        }
     if (lastname.length < 3){
        alert("lastname must contain more than 3 characters")
        return false
        }
    if(ValidLetra(lastname)){
        alert("lastname must contain only letters");
        return false;
        }

    if(DNI === "") {
            alert("insert DNI");
            return false;
        }
    if( ValidNum(DNI)) {
            alert("DNI must be a number");
            return false;
        }
    if (DNI.length < 7) {
        alert("DNI must contain more tha 7 characters")
        return false;
    }
    if(telephone === "") {
            alert("insert Telephone");
            return false;
        }
    if( ValidNum(telephone)) {
            alert("Telephone must be a number");
            return false;
        }
    if (telephone.length < 9) {
        alert("Telepghone must contain more than 10 characters")
        return false;
    }

    if (Bdate === ""){
        alert("insert date")
        return false;
    }

    if(postalCode === "") {
            alert("insert Postal Code");
            return false;
        }
    if(ValidNum(postalCode)) {
            alert("Postal Code must be a number");
            return false;
        }
    if ( !(postalCode.length == 4 || postalCode.length ==5) ) {
        alert("Postal code must haver 4 or 5 characters")
        return false;
    }

     if (address === ""){
        alert("insert address");
        return false;
        }
     if (address.length < 4){
        alert("address must contain more than 5 characters")
        return false
        }

       /*if (address = 'string' + '/s' + 'string')   {
        alert("caca")
        return false
        }*/


    
    if (locality === ""){
        alert("insert locality");
        return false;
        }
     if (locality.length < 3){
        alert("locality must contain more than 3 characters")
        return false
        }

     if(emailSignUp === "") {
            alert("insert email");
            return false;
        }

    if (!expMail.test(emailSignUp)) {
            alert("email error");
            return false;
        }

    if (passwordSignUp === ""){
            alert("Insert password");
            return false;
    }
    if (!validNumLetr(passwordSignUp)){
            alert("password must contain numbers and letters");
            return false;
    
    }

    if (ValidLetra(passwordSignUp)){
        alert("tiene solo letras");
        return false;
    }



    if (passwordSignUp.length < 7){
        alert("password must contain at least 8 characters or more")
        return false
    }

     else{
        alert("enviado")
    }

return validateS

}





var ValidLetra = function(prueba) {
 

    for(var i = 0; i <prueba.length; i++ ) {

      

        if ((prueba[i] >= "a" && prueba[i] <= "z") || prueba[i] >= "A" && prueba[i] <= "Z")  {
             
        }
        else { return false}

    }
    return true
} 

var probando = ValidLetra("kfkf")

console.log(probando)


var ValidNum = function(mys) {

    var numArray = ["0","1","2","3","4","5","6","7","8","9"]

   for( var i =0 ; i < mys.length; i++ ) {
       if(!numArray.includes(mys[i])){
           return false
       }
   }

   return true

}

//console.log(ValidNum("f565"))




//probando = ValidLetraNum("fgfd")
//console.log(probando)

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


function mostrarMje() {

if(name === "" || name.length < 2  || ValidLetra(name) ) {
            errormailS.style.display="block";
        }

    
}



}
