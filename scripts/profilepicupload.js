import { db, storage } from "./firebase_config.js";
import { getCookieLogin } from './cookiestore.js';


document.getElementById("fileUpload").onchange = uploadFile;
window.onload = fetchprofilepic;

function uploadFile() {
    
    var file = document.getElementById("fileUpload").files[0];
    console.log(file);
    var email = getCookieLogin("email");
    const storeageref = storage.ref();

    const upload = storeageref.child(email + "/" + "profileimg");
    const task = upload.put(file);

    task.then(
        (file) => {
            file.ref.getDownloadURL().then((url) => {
                // console.log("url", url);
                document.getElementById("imgid").setAttribute("src", url);
                Swal.fire(
                    "Status",
                    "Profile photo updated succesfully..!",
                    "success"
                ).then(() => {
                    const url = fetchprofilepic();
                    console.log(url);
                    location.reload();
                    document.getElementById("imgid").setAttribute("src", url);
                });
            });

        },
        (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
        }
    );
}
function fetchprofilepic() {
    document.getElementById("data").innerHTML = getCookieLogin("username");
    const email = getCookieLogin("email");
    storage
      .ref(email + "/profileimg")
      .getDownloadURL()
      .then((url) => {
        console.log("url", url);
        document.getElementById("picsm").setAttribute("src", url);
      });

    var photo = storage
        .ref(email + "/profileimg")
        .getDownloadURL()
        .then((url) => {
            console.log("url", url);
            document.getElementById("imgid").setAttribute("src", url);
        });
    db.collection("users")
      .doc(email)
      .get()
      .then((querySnapshot) => {
        let data = querySnapshot.data();
        if (data.Type == "Admin") {
          var mypro = document.getElementById("myproducts");
          mypro.parentNode.removeChild(mypro);
          var mydash = document.getElementById("mydashboard");
          mydash.parentNode.removeChild(mydash);
          var mycart = document.getElementById("mycart");
          mycart.parentNode.removeChild(mycart);
        } else if (data.Type != "Seller") {
          var mypro = document.getElementById("myproducts");
          mypro.parentNode.removeChild(mypro);
          var mydash = document.getElementById("mydashboard");
          mydash.parentNode.removeChild(mydash);
        } else if (data.Type == "Seller") {
          var mycart = document.getElementById("mycart");
          mycart.parentNode.removeChild(mycart);
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
}
