import { db} from "./firebase_config.js";

window.onload = allproducts;



function allproducts() {
  db.collection("products")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userdata = doc.data();
        console.log(userdata.ProdPic)
        createCard(userdata.ProdPic, userdata.ProdName, userdata.ProdDesc, userdata.ProdPrice);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  

  // Working Code Down here
  //
}

function createCard(img1, title, desc, price) {
  var htmldiv = document.getElementById("mainrow");
  var maindiv = document.createElement("div");
  var carddiv = document.createElement("div");
  var img = document.createElement("img");
  var cardbody = document.createElement("div");
  var h5 = document.createElement("h5");
  var h52 = document.createElement("h5");
  var atag = document.createElement("a");
  var pcardtext = document.createElement("p");
  var divrow = document.createElement("div");
  var divcol = document.createElement("div");
  var pricetag = document.createElement("p");

  maindiv.setAttribute("class", "col-12 col-md-6 col-lg-4");
  carddiv.setAttribute("class", "card mb-4");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("src", img1);
  img.setAttribute("style", "    height: 400px;");
  cardbody.setAttribute("class", "card-body");
  h5.setAttribute("class", "card-title");
  h5.setAttribute("style", "overflow: hidden;  text-overflow: ellipsis; white-space: nowrap;");
  pcardtext.setAttribute("class", "card-text");
  pcardtext.setAttribute("style", "overflow: hidden;  text-overflow: ellipsis; white-space: nowrap;");
  divrow.setAttribute("class", "row");
  divcol.setAttribute("class", "col");
  pricetag.setAttribute("class", "font-weight-bold");

  pricetag.innerHTML = "₹ " + price + " /-";
  h52.appendChild(pricetag);
  divcol.appendChild(h52);
  
  divrow.appendChild(divcol);
  pcardtext.innerHTML = desc;

  atag.innerHTML = title;
  atag.setAttribute("href","product.html?product="+title)
  h5.appendChild(atag);

  cardbody.appendChild(h5);
  cardbody.appendChild(pcardtext);
  cardbody.appendChild(divrow);

  

  carddiv.appendChild(img);
  carddiv.appendChild(cardbody);

  maindiv.appendChild(carddiv);

  htmldiv.appendChild(maindiv);



}