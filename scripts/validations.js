function registervalid(name, email, mobile, address, pass, confirmpass) {
    if (name=="" || email=="" || mobile==""||address==""||pass==""||confirmpass=="") {
        alert("Please fill all the fields");
        return false;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter an valid Email-ID");
    } else if (!mobile.match(/^\d{10}$/)) {
      alert("Please enter an valid 10 digit mobile number");
    } else if (!(pass==confirmpass)) {
      alert("Passwords doesn't match!!");
    } else {
      return true;
    }
}

function contactvalid(name,email,queries){
    if (name=="" || email=="" || queries=="") {
        alert("Please fill all the fields");
        return false;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter an valid Email-ID");
    }
    else{
        return true;
    }
}

function emailvalid(email) {
    if (email == "") {
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter an valid Email-ID");
    }
    else {
        return true;
    }
}


export {registervalid,contactvalid,emailvalid}