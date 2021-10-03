// import { display } from "./display.js";

import { db } from "./firebase_config.js";

let user="abc";
document.onload = fetchprofile;

function fetchprofile(email) {
    db.collection("users")
        .doc(email)
        .get()
        .then((querySnapshot) => {

            let data = querySnapshot.data();
            // const user = data.Name;
            user = "Rohan PAdhye";
            console.log(user);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
    // return user;
}

// document.getElementById("data").innerHTML = fetchprofile(email,user);

// function returnuser() {
//     // document.getElementById("data").innerHTML = user;
// }
// returnuser()


export { fetchprofile, user };