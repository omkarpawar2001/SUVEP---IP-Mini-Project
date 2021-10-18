import { db, storage } from "./firebase_config.js";
db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
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
      //Edit this for price
      col3.appendChild(btnclose);

      // col2
      btnminus.setAttribute("class", "btn-outline-secondary plus-minus");
      counttag.setAttribute("class", "border");
      //Edit this for quantity
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
      //Edit this for product title
      col1.appendChild(divtitle);
      // divcol2
      imgtag.setAttribute("class", "img-fluid");

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

      // doc.data() is never undefined for query doc snapshots
      const userdata = doc.data();
      divtitle.innerHTML = userdata.Name;
      counttag.innerHTML = 4;
      col3.innerHTML = "&#8377; " + "999" + " /-";
      storage
        .ref(userdata.Email + "/profileimg")
        .getDownloadURL()
        .then((url) => {
          imgtag.setAttribute(
            "src",
            url //Edit this for product picture
          );
        });
    });

    // console.log(emails);
    // console.log($("#table td").closest("tr").length);
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
