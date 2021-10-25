import { db, storage } from "./firebase_config.js";

window.onload = allproducts;

function allproducts() {
    
  // Working Code Down here
  // db.collection("products")
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       const userdata = doc.data();
  //       img1.setAttribute(
  //         "src",
  //         userdata.ProdPic
  //       );
  //       title1.innerHTML = userdata.ProdName;
  //       desc1.innerHTML = userdata.ProdDesc;
  //       price1.innerHTML = "₹ " + userdata.ProdPrice + " /-";
  //       console.log(userdata);
  //     });
  //   })
  //   .catch((error) => {
  //     console.log("Error getting documents: ", error);
  //   });
}
{
  /* <div class="col-12 col-md-6 col-lg-4">
                        <div class="card mb-4">
                            <img class="card-img-top" src="img/penstand1.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title" style="overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap;"><a href="product.html" title="View Product">Product title</a></h4>
                                    <p class="card-text" align="justify" style="overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap;">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <div class="row mr-1 ml-1"
                                        style="align-items: end; justify-content: space-between;">
                                        <!-- <div class="row"> -->
                                        <h5 class="font-weight-bold">₹220 </h5>
                                        <!-- </div>
                                <div class="col"> -->
                                        <a href="#" class="btn btn-success">Add to cart</a>
                                        <!-- </div> -->
                                    </div>
                            </div>
                        </div>
                    </div> */
}
