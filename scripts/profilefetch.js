import { display } from "./display.js";

import { db } from "./firebase_config.js";

let user="abc";
document.onload = fetchprofile;

function fetchprofile(email,user) {
    db.collection("users")
        .doc(email)
        .get()
        .then((querySnapshot) => {

            let data = querySnapshot.data();
            // const user = data.Name;
            user = "Rohan PAdhye";
            document.getElementById

            
            // console.log(ret);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
    // return user;
}

// document.getElementById("data").innerHTML = fetchprofile(email,user);

function returnuser(user) {
    return user;
}


export { fetchprofile, returnuser, user };