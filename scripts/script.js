let regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g;
document.getElementById("loginform").addEventListener("submit", event =>{
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
})

document.getElementById("username").addEventListener("input", () => {
    let usrname = document.getElementById("username").value;
    if(regexp.test(usrname)){
        let runame = usrname.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "")
        document.getElementById("username").value = runame;
    }else{
        return true;
    }
})