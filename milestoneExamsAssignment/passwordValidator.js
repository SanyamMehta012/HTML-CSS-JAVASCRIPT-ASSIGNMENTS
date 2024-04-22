// QUESTION.NO - Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console. Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console 


let password = "sanyam mehta";
// let confirmPasssword = "sanyam mehta"; // expected output =  Password match !! Password validation sucessfully
 let confirmPasssword = "you are robot"; // expected output =  Password didn't match !! Password validation unsucessfully


checkValidate(password,confirmPasssword);

 function checkValidate() {
if (password === confirmPasssword) {
    console.log("Password match !! Password validation sucessfully");
} else {
    console.log("Password didn't match !! Password validaation unsucessfully");
}
}
















