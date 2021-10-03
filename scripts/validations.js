function registervalid(name, email, mobile, address) {
    if (name=="" || email=="" || mobile==""||address=="") {
        alert("Please fill all the fields");
        return false;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter an valid Email-ID");
    } else if (!mobile.match(/^\d{10}$/)) {
        alert("Please enter an valid 10 digit mobile number");
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


export {registervalid,contactvalid}