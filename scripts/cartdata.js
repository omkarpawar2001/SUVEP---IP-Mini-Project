import { getCookieLogin } from "./cookiestore.js";
import { db, storage } from "./firebase_config.js";

var array = [];
var emails = [];
var prices = [];
function deleteProduct() {
  db.collection("orders")
    .doc("abc@gmail.com")
    .delete()
    .then(() => {
      alert("deleted");
    });
}
var email = getCookieLogin("email");


var i = 0;
db.collection("cart")
  .doc("All Products")
  .collection("email")
  .get()
  .then((doc) => {
    doc.forEach((querySnapshot) => {
      let userdata = querySnapshot.data();
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

      var price = userdata.Price;

      // prices.push(userdata.ProdPrice);
      // console.log(prices)

      emails.push(userdata.ProdName);
      console.log(emails);
      prices.push(price);
      // col3
      btnclose.setAttribute("class", "close btn-danger");
      btnclose.setAttribute("id", "close" + i);
      btnclose.setAttribute("name", i);
      btnclose.innerHTML = "&#10005;";

      btnclose.onclick = function () {
        var index = parseInt(btnclose.getAttribute("name"));

        var remove = db
          .collection("cart")
          .doc("All Products")
          .collection("email")
          .doc(emails[index-1])
          .delete()
          .then(() => {});
        remove.then(() => {
          Swal.fire("Remove Item", "Item removed from cart..!", "success").then(
            () => {
              window.location.reload;
            }
          );
        });
      };

      // pricetag.setAttribute("class", "border");
      pricetag.setAttribute("id", "price" + i);
      col3.setAttribute("class", "col");
      //Edit this for price

      col3.appendChild(pricetag);

      // col2
      btnminus.setAttribute("class", "btn-outline-secondary plus-minus");
      btnminus.setAttribute("name", i);
      // btnminus.onclick = function () {
      //   console.log(this.getAttribute("name"));
      //   var quan = document.getElementById('quan' + i);
      //   if (parseInt(quan.innerHTML) > 0) {
      //     quan.innerHTML = parseInt(quan.innerHTML) - 1;
      //     var price1 = document.getElementById("price" + i);
          
      //     price1.innerHTML = price * parseInt(quan.innerHTML);
      //     prices[i - 1] = price1.innerHTML * parseInt(quan.innerHTML);
      //     console.log(prices);
      //   }
      //   else {
      //     alert("Minimum Count Reached!!");
      //   }
      // }
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
          price.innerHTML =" +
          price +
          "*(parseInt(quan.innerHTML));\
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
      // btnplus.onclick = function () {
      //   console.log(this.getAttribute("name"));
      //   var quan = document.getElementById("quan" + i);
      //   if (parseInt(quan.innerHTML) > 0) {
      //     quan.innerHTML = parseInt(quan.innerHTML) + 1;
      //     var price1 = document.getElementById("price" + i);

      //     price1.innerHTML = price * parseInt(quan.innerHTML);
      //     prices[i - 1] = price1.innerHTML;
      //     console.log(prices);
      //   } else {
      //     alert("Minimum Count Reached!!");
      //   }
      // };
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
          "*(parseInt(quan.innerHTML));\
        for (var j = 0; j <= i - 1; j++) {\
          var quantity = document.getElementById('quan'+i).innerHTML;\
          console.log('quantity' + quantity);\
          console.log(prices);\
          console.log(prices[j]);\
          carttotal += parseInt(prices[j]) * parseInt(quantity);\
          console.log('Carttotal: ', carttotal);\
        }\
        }\
        else{ alert('Maximum Count Reached!!')}\
        \
        "
        
        // prices[i - 1] = parseInt(document.getElementById('quan'+ i).innerHTML)
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

      divtitle.innerHTML = userdata.ProdName;
      array.push(userdata.ProdName);
      counttag.innerHTML = 1;

      // col3.innerHTML = "&#8377; ";
      pricetag.innerHTML = price;

      col3.innerHTML += " /-";
      col3.appendChild(btnclose);

      imgtag.setAttribute("src", userdata.ProdPic); //Edit this for product picture

      document.getElementById("totalitems").innerHTML = array.length + " items";
      document.getElementById("totalcartitems").innerHTML =
        array.length + " items";
      var carttotal = 0;
        for (var j = 0; j <= i - 1; j++) {
          
          var quantity = document.getElementById("quan"+i).innerHTML;
          console.log("quantity" + quantity);
          // quan.push(quantity);
          console.log(prices);
          console.log(prices[j]);
          carttotal += parseInt(prices[j]) * parseInt(quantity);
          console.log("Carttotal: ", carttotal);
        }
        console.log(carttotal);
        document.getElementById("carttotalfinal").innerHTML =
          "₹ " + carttotal + " /-";
      
      

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
  })
  .catch((error) => {
    alert("Your Cart is Empty");
    console.log("Error getting documents: ", error);
  });

    // console.log(emails);
    // console.log($("#table td").closest("tr").length);
  
