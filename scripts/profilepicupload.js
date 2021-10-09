import { storage } from "./firebase_config.js";
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
            console.log("error", error);
        }
    );
}
function fetchprofilepic() {
    const email = getCookieLogin("email");
    var photo = storage
        .ref(email + "/profileimg")
        .getDownloadURL()
        .then((url) => {
            console.log("url", url);
            document.getElementById("imgid").setAttribute("src", url);
        });
}
