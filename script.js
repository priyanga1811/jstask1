function validate(){
     var name;
     var dofb;
     var em;
     var pw;
     name=document.getElementById("nam").value;
     dofb=document.getElementById("dob").value;
     em=document.getElementById("mail").value;
     pw=document.getElementById("pass").value;
     if(name==""){
        document.getElementById("res").innerHTML="Please Enter your Name";
     }
     else if(pw.length<6){
        document.getElementById("res").innerHTML="Enter a Strong Password with more than 8 characters";
     }
     else if(dofb==""){
        document.getElementById("res").innerHTML="Please Enter your Date of Birth";
     }
      else if (em === "") {
        document.getElementById("res").innerHTML ="Please enter your email";
    }
     else{
        document.getElementById("res").innerHTML="Login Completed";
     }
}