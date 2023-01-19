import bcrypt from 'bcrypt'

const saltRounds = 10;
const pass = "hello"
let pass_enc = ""
let pass_temp = "$2b$10$8W6U/sKEtpqB26Rgo6o3heAQqkFMXLMSUG5JerAma8gQnXPas/Fvm"
let pass_temp2 = "$2b$10$Y8.XuzW6.XOFRxGLKNmH6e1Eetyq25uqR8cGVYAlakWzdCqLs/O6C"
let pass_nine_rounds = "$2b$09$dVmQcXx3UEreEGHqAUDueuk2eD6RCUejrrUWqN1I.ahmj2D55GI8S"
bcrypt.genSalt(saltRounds,(err,salt)=>{
    console.log(`salt :${salt}`);
    bcrypt.hash(pass, salt, function(err, hash) {
        pass_enc = hash
        // console.log(hash)
    });
})
bcrypt.hash(pass, saltRounds).then(value => console.log(value))
bcrypt.compare(pass,pass_temp).then(value => console.log(value))
// bcrypt.compare(pass_temp,pass).then(value => console.log(value))
// bcrypt.compare(pass_temp2,pass_temp).then(value => console.log(value))
// bcrypt.compare(pass_nine_rounds,pass_temp).then(value => console.log(value))