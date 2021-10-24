import { db, storage } from "./firebase_config.js";

window.onload = indexpr;

function indexpr() {
    var img1 = document.getElementById("img1");
    var title1 = document.getElementById("title1");
    var desc1 = document.getElementById("desc1");
    var price1 = document.getElementById("price1");
    
    
    
    
    
    var listRef = firebase.storage().ref();
    var urlarray = [];
    // Find all the prefixes and items.
    listRef
      .listAll()
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
                folderRef.listAll().then((res) => {
                    res.prefixes.forEach((x) => {
                        x.listAll().then((img) => {
                            img.prefixes.forEach((x) => {
                                x.child("/productimg1").getDownloadURL().then((url) => {
                                    urlarray.push(url);
                                    // console.log(urlarray);
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
  
  db.collection("products")
    .doc("All Products")
    .collection("d2019omkar.pawar@ves.ac.in")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const userdata = doc.data();
        img1.setAttribute(
          "src",
          userdata.ProdPic
        );
        title1.innerHTML = userdata.ProdName;
        desc1.innerHTML = userdata.ProdDesc;
        price1.innerHTML = "₹ " + userdata.ProdPrice + " /-";
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
        
        // .then((url) => {
        // console.log("url", url);
        // // document.getElementById("picsm").setAttribute("src", url);
        // // document.getElementById("piclg").setAttribute("src", url);
        // });
}
