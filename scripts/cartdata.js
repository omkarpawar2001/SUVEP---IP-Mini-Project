import { db, storage } from "./firebase_config.js";
var i = 0;
var array = [];
var email = [];
var close = [];
function deleteProduct() {
  db.collection("orders")
    .doc("abc@gmail.com")
    .delete()
    .then(() => {
      alert("deleted");
    });
}
db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      i++;
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
      var pricetag = document.createElement("a");
      var btnclose = document.createElement("button");

      const userdata = doc.data();
      var price = userdata.MobileNo;

      email.push(userdata.Email);
      console.log(email);
      // col3
      btnclose.setAttribute("class", "close btn-danger");
      btnclose.setAttribute("id", "close" + i);
      btnclose.setAttribute("name", i);
      btnclose.innerHTML = "&#10005;";

      btnclose.onclick = function () {
        var index = parseInt(btnclose.getAttribute('name'));
        
        alert(email[index - 1]);
        db.collection("orders")
          .doc(email[index-1])
          .delete()
          .then(() => {
            alert(email[i - 1] +
              "deleted");
          });
      }

      // pricetag.setAttribute("class", "border");
      pricetag.setAttribute("id", "price" + i);
      col3.setAttribute("class", "col");
      //Edit this for price

      col3.appendChild(pricetag);

      // col2
      btnminus.setAttribute("class", "btn-outline-secondary plus-minus");
      btnminus.setAttribute(
        "onclick",
        "console.log(" +
          i +
          ");    \
        \
        var quan = document.getElementById('quan" +
          i +
          "');\
        if(parseInt(quan.innerHTML)>1)\
        {\
          quan.innerHTML = parseInt(quan.innerHTML)-1;\
          var price = document.getElementById('price" +
          i +
          "');\
          price.innerHTML = " +
          price +
          "/(parseInt(quan.innerHTML));\
        }\
        else{ alert('Minimum Count Reached!!')}\
        \
        "
      );
      counttag.setAttribute("class", "border");
      counttag.setAttribute("id", "quan" + i);

      //Edit this for quantity
      btnplus.setAttribute("class", "btn-outline-success plus-minus");
      btnplus.innerHTML = "+";
      btnplus.setAttribute("id", "plus" + i);
      const p = btnplus.getAttribute("id");
      console.log(p);
      btnplus.setAttribute(
        "onclick",
        "console.log(" +
          i +
          ");    \
        var quan = document.getElementById('quan" +
          i +
          "');\
        if(parseInt(quan.innerHTML)<=4)\
        {\
          quan.innerHTML = parseInt(quan.innerHTML)+1;\
          var col3 = document.getElementById('col3');\
          var price = document.getElementById('price" +
          i +
          "');\
          price.innerHTML = " +
          price +
          "*(parseInt(quan.innerHTML)+1);\
        }\
        else{ alert('Maximum Count Reached!!')}\
        \
        "
      );

      btnminus.innerHTML = "-";
      btnminus.setAttribute("id", "minus" + i);
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

      divtitle.innerHTML = userdata.Name;
      array.push(userdata.Name);
      counttag.innerHTML = 1;

      // col3.innerHTML = "&#8377; ";
      pricetag.innerHTML = userdata.MobileNo;

      col3.innerHTML += " /-";
      col3.appendChild(btnclose);
      storage
        .ref(userdata.Email + "/profileimg")
        .getDownloadURL()
        .then((url) => {
          imgtag.setAttribute(
            "src",
            url //Edit this for product picture
          );
        });
      document.getElementById("totalitems").innerHTML = array.length + " items";
      // for (var j = 1; j < array.length; j++) {
      //   // while (parseInt(document.getElementById("quan" + j).innerHTML) > 0) {
      //     document.getElementById("plus" + j).onclick = () => {
      //       document.getElementById("quan" + j).innerHTML =
      //         parseInt(document.getElementById("quan" + j).innerHTML) + 1;
      //     };
      //     document.getElementById("minus" + j).onclick = () => {
      //       document.getElementById("quan" + j).innerHTML =
      //         parseInt(document.getElementById("quan" + j).innerHTML) - 1;
      //     };
      //   // }
      // }
    });

    // console.log(emails);
    // console.log($("#table td").closest("tr").length);
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
