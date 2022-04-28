window.onload = function() {

var formSignUp = document.getElementById("formSignUp");
formSignUp.addEventListener("submit",validateS )

var name = document.getElementById("name").value;



function validateS(e) {
 
    e.preventDefault();

    var name = document.getElementById("name").value;
    var lastname =document.getElementById("lastname").value;
    var dNI =document.getElementById("DNI").value;
    var telephone = document.getElementById("telephone").value
    var bdate = document.getElementById("Bdate").value
    var postalCode = document.getElementById("postalCode").value
    var address =document.getElementById("address").value
    var locality = document.getElementById("locality").value
    var emailSignUp = document.getElementById("mailS").value
    var passwordSignUp =document.getElementById("passwordSignUp").value
    var passwordRep =document.getElementById("passwordRepeat").value
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
    if(!ValidLetra(name)){
        alert("name must contain only letters");
        return false;
        }
     if (lastname === ""){
        alert("insert last name");
        return false;
        }
     if (lastname.length < 2){
        alert("lastname must contain more than 3 characters")
        return false
        }
    if(!ValidLetra(lastname)){
        alert("lastname must contain only letters");
        return false;
        }

    if(dNI === "") {
            alert("insert DNI");
            return false;
        }
    if( !ValidNum(dNI)) {
            alert("DNI must be a number");
            return false;
        }
    if (dNI.length < 7) {
        alert("DNI must contain more tha 7 characters")
        return false;
    }
    if(telephone === "") {
            alert("insert Telephone");
            return false;
        }
    if( !ValidNum(telephone)) {
            alert("Telephone must be a number");
            return false;
        }
    if (telephone.length < 9) {
        alert("Telepghone must contain more than 10 characters")
        return false;
    }

    if (bdate === ""){
        alert("insert date")
        return false;
    }

    if(postalCode === "") {
            alert("insert Postal Code");
            return false;
        }
    if(!ValidNum(postalCode)) {
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

    if( !(passwordRep === passwordSignUp)){
        alert("Passwords don't coincide")
        return false
    }


     else{
        alert("Name: "+ name +" "+"Lastname: "+lastname+" "+"DNI "+ dNI +" "+"  Telephone "+telephone+ +"Address "+ address +" "+"Locality: "+locality +" "+"Postal Code: "+ postalCode +" "+"Email: "+ emailSignUp )
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


var nameEvent = document.getElementById("name")
var lastnameEvent =document.getElementById("lastname");
var dNIEvent =document.getElementById("DNI");
var telephoneEvent = document.getElementById("telephone")
var bdateEvent = document.getElementById("Bdate")
var postalCodeEvent = document.getElementById("postalCode")
var addressEvent =document.getElementById("address")
var localityEvent = document.getElementById("locality")
var emailSignUpEvent = document.getElementById("mailS")
var passwordSignUpEvent =document.getElementById("passwordSignUp")
var passwordRepEvent = document.getElementById("passwordRepeat")

function mostrarMje() {

    var name = document.getElementById("name").value;
    var lastname =document.getElementById("lastname").value;
    var dNI =document.getElementById("DNI").value;
    var telephone = document.getElementById("telephone").value
    var bdate = document.getElementById("Bdate").value
    var postalCode = document.getElementById("postalCode").value
    var address =document.getElementById("address").value
    var locality = document.getElementById("locality").value
    var emailSignUp = document.getElementById("mailS").value
    var passwordSignUp =document.getElementById("passwordSignUp").value
    var passwordRep =document.getElementById("passwordRepeat").value
    var expMail = /\w+@\w+\.+[a-z]/;
    var nameError = document.getElementById("errorName")
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


    if(name === "" || name.length < 2  || !ValidLetra(name) ) {
                nameError.style.display="block";
            }
    if(lastname === "" || lastname.length < 2  || !ValidLetra(lastname)){
        lastnameError.style.display="block" 
    }
     if(dNI === "" || dNI.length < 7  || !ValidNum(dNI)){
        errorDNI.style.display="block"
    }
    if(telephone === "" || telephone.length < 9  || !ValidNum(telephone)){
        errorTel.style.display="block"
    }
    if(postalCode === "" || !(postalCode.length == 4 || postalCode.length ==5)  || !ValidNum(postalCode)){
        errorpostalCode.style.display="block"
    }
     if(address === "" || address.length < 4)  {
            errorAddress.style.display="block";
        }
    if(bdate==="") {
        errorDate.style.display="block"
    }
    if(locality === "" || locality.length < 4){
        errorLocality.style.display="block"
    }
      if(emailSignUp === "" || !expMail.test(emailSignUp)){
        errormailS.style.display="block"
    }
    if(passwordSignUp === "" || passwordSignUp.length < 7  ||  !validNumLetr(passwordSignUp)){
        errorPasswordS.style.display="block"
    }   
     if( !(passwordRep === passwordSignUp)){
        errorPasswordR.style.display="block"
     }

    


return false    
}

function Clear(){
    var nameError = document.getElementById("errorName")
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
    nameError.style.display = "none";
    lastnameError.style.display="none";
    errorDNI.style.display="none";
    errorTel.style.display="none";
    errorAddress.style.display="none";
    errorLocality.style.display="none";
    errorDate.style.display="none";
    errorpostalCode.style.display="none";
    errormailS.style.display="none";
    errorPasswordS.style.display="none";
    errorPasswordR.style.display="none";

return Clear
}

nameEvent.addEventListener("blur",mostrarMje);
nameEvent.addEventListener("focus",Clear);
lastnameEvent.addEventListener("blur",mostrarMje);
lastnameEvent.addEventListener("focus",Clear)
dNIEvent.addEventListener("blur",mostrarMje);
dNIEvent.addEventListener("focus",Clear);
telephoneEvent.addEventListener("blur",mostrarMje);
telephoneEvent.addEventListener("focus",Clear);
bdateEvent.addEventListener("blur",mostrarMje);
bdateEvent.addEventListener("focus",Clear);
postalCodeEvent.addEventListener("blur",mostrarMje);
postalCodeEvent.addEventListener("focus",Clear);
addressEvent.addEventListener("blur",mostrarMje);
addressEvent.addEventListener("focus",Clear);
localityEvent.addEventListener("blur",mostrarMje);
localityEvent.addEventListener("focus",Clear);
passwordSignUpEvent.addEventListener("blur",mostrarMje);
passwordSignUpEvent.addEventListener("focus",Clear);
emailSignUpEvent.addEventListener("blur",mostrarMje);
emailSignUpEvent.addEventListener("focus",Clear);
passwordRepEvent.addEventListener("blur",mostrarMje);
passwordRepEvent.addEventListener("focus",Clear);



}
