import { db } from "./firebase_config.js";
document.getElementById("submit").onclick = display;
var user;
function display() {
  var email = document.getElementById("email").value;
  console.log(email);

  db.collection("users")
    .doc(email)
    .get()
    .then((querySnapshot) => {
      let data = querySnapshot.data();
      // const user = data.Name;
      user = data.Name;
        console.log(user);
        var url = "/dash.html?name=" + user;
        document.location.href = url;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  
  // return user;

  // window.location.href = "/dash.html";
  // document.getElementById("data").innerHTML = email;
  // console.log(email);
}
export { display };
