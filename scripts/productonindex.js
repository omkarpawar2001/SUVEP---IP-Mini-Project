import { db, storage } from "./firebase_config.js";

window.onload = indexpr;

function indexpr() {
    var img1 = document.getElementById("img1");
    var title1 = document.getElementById("title1");
    var desc1 = document.getElementById("desc1");
    var price1 = document.getElementById("price1");
    
    img1.setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    );
    
    title1.innerHTML = "Hello123";
    desc1.innerHTML = "nsjjwnd kjns nka dc nscdjnjan";
    price1.innerHTML = "₹ "+233+" /-";
    
    var listRef = firebase.storage().ref();
    var urlarray = [];
    // Find all the prefixes and items.
    listRef
      .listAll()
        .then((res) => {
          console.log(res)
            res.prefixes.forEach((folderRef) => {
                folderRef.listAll().then((res) => {
                    console.log(res.prefixes)
                    res.prefixes.forEach((x) => {
                        console.log(x.listAll)
                        x.listAll().then((img) => {
                            img.prefixes.forEach((x) => {
                                x.child("/productimg1").getDownloadURL().then((url) => {
                                    console.log(url)
                                    urlarray.push(url);
                                    console.log(urlarray);
                                });
                            })
                          
                        });
                    })
                })
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
        
        // .then((url) => {
        // console.log("url", url);
        // // document.getElementById("picsm").setAttribute("src", url);
        // // document.getElementById("piclg").setAttribute("src", url);
        // });
}
