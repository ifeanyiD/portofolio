import emailjs from "emailjs-com"


export function validation(values, e) {
    let errors = {}
    let emailPattern = /\w{3,}@(yahoo|gmail).com/g
    if(values.name.length <3){
        errors.name="! Please enter name atleast 3 characters long"
    }

    else if(!(emailPattern.test(values.email))){
        errors.email= "! Please enter a valid email address"
    }

    else if(!values.message){
        errors.message= "! Please type a message"
    }
    else  {
        emailjs.sendForm("service_bd22a4b", "template_xl0btz9", e.target,
        "user_bNruc9qLyCf5GXdlT0vUm").then(res=>{
        console.log(res);
       }).catch(err=>{
       console.log(err);
       });
    
    }
    return errors
}
