function cartData(pic, title, quantity, price) {
  //   db.collection("users")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         const userdata = doc.data();
  //         storage
  //           .ref(userdata.Email + "/profileimg")
  //           .getDownloadURL()
  //           .then((url) => {
  //             console.log("url", url);
  //             //img src code
  //           });
  //       });
  //       // console.log(emails);
  //       // console.log($("#table td").closest("tr").length);
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });

  var cartdata = document.getElementById("cartdata");
  var divborder = document.createElement("div");
  var divalign = document.createElement("div");
  var divtitle = document.createElement("div");
  var divcol2 = document.createElement("div");
  var col1 = document.createElement("div");
  var col2 = document.createElement("div");
  var col3 = document.createElement("div");
  var imgtag = document.createElement("img");
  var btnplus = document.createElement("button");
  var btnminus = document.createElement("button");
  var counttag = document.createElement("a");
  var btnclose = document.createElement("button");

  // col3
  btnclose.setAttribute("class", "close btn-danger");
  btnclose.innerHTML = "&#10005;";
  col3.setAttribute("class", "col");
  col3.innerHTML = "&#8377; " + price + " /-"; //Edit this for price
  col3.appendChild(btnclose);

  // col2
  btnminus.setAttribute("class", "btn-outline-secondary plus-minus");
  counttag.setAttribute("class", "border");
  counttag.innerHTML = quantity; //Edit this for quantity
  btnplus.setAttribute("class", "btn-outline-success plus-minus");
  btnplus.innerHTML = "+";
  btnminus.innerHTML = "-";
  col2.setAttribute("class", "col");
  col2.appendChild(btnminus);
  col2.appendChild(counttag);
  col2.appendChild(btnplus);

  // col1
  col1.setAttribute("class", "col");
  divtitle.setAttribute("class", "row");
  divtitle.innerHTML = title; //Edit this for product title
  col1.appendChild(divtitle);
  console.log("pic", pic);
  // divcol2
  imgtag.setAttribute("class", "img-fluid");
  imgtag.setAttribute(
    "src",
    pic //Edit this for product picture
  );
  divcol2.setAttribute("class", "col-2");
  divcol2.appendChild(imgtag);

  divborder.setAttribute("class", "row  border-bottom");
  divborder.appendChild(divalign);

  divalign.setAttribute("class", "row main align-items-center");
  divalign.appendChild(divcol2);
  divalign.appendChild(col1);
  divalign.appendChild(col2);
  divalign.appendChild(col3);

  cartdata.appendChild(divborder);
}

export { cartData };
